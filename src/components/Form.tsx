
import { Field, FormData } from '../commons/types'
import { FormEvent, ReactNode, useState } from 'react'
import { validateMax, validateMin, validateRegEx } from '../utils/validation'

import { Checkbox, Input, Option, Radio, Select, Textarea } from '../elements/Input'
import { Flex } from '../layouts/Flex'
import { Label } from '../elements/Label'
import { Text } from '../elements/Text'

export interface FormProps {
  fields: Array<Field>
  handler: (data: FormData) => void
  highlight?: 'none' | 'optional' | 'required'
  label?: string
}

export function Form({fields, handler, highlight = 'none', label = 'Form'}: FormProps) {
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
    <form
      aria-label={label}
      onReset={handleReset}
      onSubmit={handleSubmit}
      role='form'>
      <Flex gap='1rem'>
        {fields.map(field => {
          const errorLabel = errors[field.name]
            ? (
                <div className='input-error' id={`error-${field.name}`}>
                  <Text context='danger'>{field.error}</Text>
                </div>
              )
            : null
          const inputLabel = (
            <div className='input-label'>
              <Label
                error={errors[field.name]}
                field={field}
                highlight={!['checkbox'].includes(field.input) ? highlight : undefined} />
            </div>
          )

          return (
            <div className='input' key={field.name}>
              {field.input === 'checkbox' &&
                <>
                  <Checkbox
                    aria-errormessage={`error-${field.name}`}
                    aria-required={field.required}
                    error={errors[field.name]}
                    handler={handleChange}
                    id={field.name}
                    name={field.name}>
                    {inputLabel}
                  </Checkbox>
                  {errorLabel}
                </>
              }
              {['date', 'email', 'file', 'number', 'password', 'tel', 'text'].includes(field.input) &&
                <>
                  {inputLabel}
                  <Input
                    aria-errormessage={`error-${field.name}`}
                    aria-invalid={!!errors[field.name]}
                    aria-required={field.required}
                    autocomplete={field.autocomplete}
                    error={errors[field.name]}
                    handler={handleChange}
                    id={field.name}
                    name={field.name}
                    type={field.input}
                    value={field.value as string} />
                  {errorLabel}
                </>
              }
              {field.input === 'radio' &&
                <>
                  <Radio
                    aria-required={field.required}
                    error={errors[field.name]}
                    handler={handleChange}
                    id={field.name}
                    name={field.name}
                    value={field.value as string}>
                    {inputLabel}
                  </Radio>
                  {errorLabel}
                </>
              }
              {field.input === 'select' &&
                <>
                  {inputLabel}
                  <Select
                    aria-errormessage={`error-${field.name}`}
                    aria-required={field.required}
                    error={errors[field.name]}
                    handler={handleChange}
                    id={field.name}
                    name={field.name}
                    value={''}>
                    {getOptions(field)}
                  </Select>
                  {errorLabel}
                </>
              }
              {field.input === 'textarea' &&
                <>
                  {inputLabel}
                  <Textarea
                    aria-errormessage={`error-${field.name}`}
                    aria-invalid={!!errors[field.name]}
                    aria-required={field.required}
                    error={errors[field.name]}
                    handler={handleChange}
                    id={field.name}
                    name={field.name}
                    value={field.value as string} />
                  {errorLabel}
                </>
              }
            </div>
          )
        })}
        <Flex align='center' justify='around' row>
          <input
            aria-label='submit'
            className='button button-primary'
            disabled={!canSubmit()}
            type='submit' />
          <input
            aria-label='reset'
            className='button button-default'
            type='reset' />
        </Flex>
      </Flex>
    </form>
  )
}
