
import { ChangeEvent, ReactNode, useState } from 'react'

import Flex from '@/layouts/Flex'

export interface CheckboxProps {
  checked?: boolean
  children: ReactNode
  error?: boolean
  handler: (name: string, value: string) => void
  name: string
}

export function Checkbox({children, handler, checked = false, error, name, ...props}: CheckboxProps) {
  const [on, setOn] = useState<boolean>(checked)

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    handler(name, ev.target.checked.toString())
    setOn(!on)
  }

  return (
    <Flex align='center' row>
      <input {...props}
        className={error ? 'error' : undefined}
        checked={on}
        name={name}
        onChange={handleChange}
        type='checkbox' />
      {children}
    </Flex>
  )
}

export interface InputProps {
  error?: boolean
  handler: (name: string, value: string) => void
  name: string
  type?: string
  value?: string
}

export function Input({error, handler, name, type = 'text', value, ...props}: InputProps) {
  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    handler(name, ev.target.value)
  }

  return (
    <input {...props}
      className={error ? 'error' : undefined}
      name={name}
      onChange={handleChange}
      onInput={handleChange}
      type={type}
      value={value} />
  )
}

export interface OptionProps {
  children: ReactNode
  value: string
}

export function Option({children, value, ...props}: OptionProps) {
  return (
    <option {...props} value={value}>
      {children}
    </option>
  )
}

export interface RadioProps {
  children: ReactNode
  error?: boolean
  handler: (name: string, value: string) => void
  name: string
  value: string
}

export function Radio({children, error, handler, name, value, ...props}: RadioProps) {
  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    handler(name, ev.target.value)
  }

  return (
    <Flex align='center' row>
      <input {...props}
        className={error ? 'error' : undefined}
        name={name}
        onChange={handleChange}
        type='radio'
        value={value} />
      {children}
    </Flex>
  )
}

export interface SelectProps {
  children: ReactNode
  error?: boolean
  handler: (name: string, value: string) => void
  name: string
  value?: string
}

export function Select({children, error, handler, name, value, ...props}: SelectProps) {
  function handleChange(ev: ChangeEvent<HTMLSelectElement>) {
    handler(name, ev.target.value)
  }

  return (
    <select {...props}
      className={error ? 'error' : undefined}
      defaultValue={value}
      name={name}
      onChange={handleChange}>
      {children}
    </select>
  )
}

export interface TextareaProps {
  children?: ReactNode
  error?: boolean
  handler: (name: string, value: string) => void
  name: string
}

export function Textarea({children, error, handler, name, ...props}: TextareaProps) {
  function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
    handler(name, ev.target.value)
  }

  return (
    <textarea {...props}
      className={error ? 'error' : undefined}
      onChange={handleChange}>
      {children}
    </textarea>
  )
}
