
import { Field, FormData } from '@/commons/types'
import { FormEvent, ReactNode, useState } from 'react'
import { validateMax, validateMin, validateRegEx } from '@/utils/validation'

import { Checkbox, Input, Option, Radio, Select, Textarea } from '@/elements/Input'
import Flex from '@/layouts/Flex'
import Text from '@/elements/Text'

export interface FormProps {
  fields: Array<Field>
  handler: (data: FormData) => void
}

export default function Form({ fields, handler }: FormProps) {
  const [data, setData] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function canSubmit(): boolean {
    return Object.keys(errors).length === 0
      && Object.keys(data).length > 0
  }

  function getOptions(field: Field): Array<ReactNode> {
    const options: Array<ReactNode> = []
    for (const [key, value] of Object.entries(field)) {
      options.push(<Option value={value}>{key}</Option>)
    }
    return options;
  }

  function handleChange(name: string, value: string) {
    const field = fields.find(f => f.name === name)
    if (!field) return

    let error: boolean = false
    if (field.max && !validateMax(field.max, value)) {
      error = true
    } else if (field.min && !validateMin(field.min, value)) {
      error = true
    } else if (field.regex && !validateRegEx(field.regex, value)) {
      error = true
    }
    setErrors({...errors, [name]: error})

    data[name] = value
    setData(data)
  }

  function handleReset() {
    setData({})
    setErrors(() => ({}))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!Object.keys(errors).length) {
      handler(data as FormData)
    }
  }

  return (
    <form onReset={handleReset} onSubmit={handleSubmit}>
      <Flex gap='1rem'>
        {fields.map(field => {
          return (
            <Flex key={field.name}>
              {field.input === 'checkbox' &&
                <Checkbox
                  error={errors[field.name]}
                  handler={handleChange}
                  name={field.name}>
                  {field.label}
                </Checkbox>
              }
              {['date', 'email', 'file', 'number', 'password', 'tel', 'text'].includes(field.input) &&
                <>
                  <label htmlFor={field.name}>{field.label}:</label>
                  <Input
                    error={errors[field.name]}
                    handler={handleChange}
                    name={field.name}
                    type={field.input}
                    value={field.value as string} />
                </>
              }
              {field.input === 'radio' &&
                <Radio
                  error={errors[field.name]}
                  handler={handleChange}
                  name={field.name}
                  value={field.value as string}>
                  {field.label}
                </Radio>
              }
              {field.input === 'select' &&
                <>
                <label htmlFor={field.name}>{field.label}:</label>
                  <Select
                    error={errors[field.name]}
                    handler={handleChange}
                    name={field.name}
                    value={field.value as string}>
                    {getOptions(field)}
                  </Select>
                </>
              }
              {field.input === 'textarea' &&
                <>
                <label htmlFor={field.name}>{field.label}:</label>
                  <Textarea
                    error={errors[field.name]}
                    handler={handleChange}
                    name={field.name}>
                    {field.label}
                  </Textarea>
                </>
              }
              {errors[field.name] &&
                <Text context='danger'>{field.error}</Text>
              }
            </Flex>
          )
        })}
        <Flex align='center' justify='around' row>
          <input
            className='button button-primary'
            disabled={!canSubmit()}
            type='submit' />
          <input
            className='button button-default'
            type='reset' />
        </Flex>
      </Flex>
    </form>
  )
}
