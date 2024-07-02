
import { Field, FormData } from '@/commons/types'
import { FormEvent, ReactNode, useState } from 'react'
import { validateMax, validateMin, validateRegEx } from '@/utils/validation'

import { Checkbox, Input, Option, Radio, Select, Textarea } from '@/elements/Input'
import Flex from '@/layouts/Flex'
import Label from '@/elements/Label'
import Text from '@/elements/Text'

export interface FormProps {
  fields: Array<Field>
  handler: (data: FormData) => void
}

export default function Form({ fields, handler }: FormProps) {
  const [data, setData] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function canSubmit(): boolean {
    return Object.values(errors).length === 0 && Object.values(data).length > 0
  }

  function getOptions(field: Field): Array<ReactNode> {
    const options: Array<ReactNode> = [<Option key='' value=''>&nbsp;</Option>]
    for (const [value, label] of Object.entries(field.options || [])) {
      options.push(<Option key={value} value={value}>{label}</Option>)
    }
    return options;
  }

  function handleChange(name: string, value: string) {
    data[name] = value
    setData(data)

    validate()
  }

  function handleReset() {
    setData({})
    setErrors(() => ({}))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (canSubmit()) {
      handler(data as FormData)
    }
  }

  function validate() {
    const newErrors: Record<string, boolean> = {}
    for (const field of fields) {
      const value = data[field.name]
      if (field.required && !value) {
        newErrors[field.name] = true
      } else if (field.max && !validateMax(field.max, value)) {
        newErrors[field.name] = true
      } else if (field.min && !validateMin(field.min, value)) {
        newErrors[field.name] = true
      } else if (field.regex && !validateRegEx(field.regex, value)) {
        newErrors[field.name] = true
      }
    }
    setErrors(newErrors)
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
                  <Label field={field} />
                </Checkbox>
              }
              {['date', 'email', 'file', 'number', 'password', 'tel', 'text'].includes(field.input) &&
                <>
                  <Label field={field} />
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
                  <Label field={field} />
                </Radio>
              }
              {field.input === 'select' &&
                <>
                <Label field={field} />
                  <Select
                    error={errors[field.name]}
                    handler={handleChange}
                    name={field.name}
                    value={''}>
                    {getOptions(field)}
                  </Select>
                </>
              }
              {field.input === 'textarea' &&
                <>
                <Label field={field} />
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
