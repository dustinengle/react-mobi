
import { ChangeEvent, ReactNode, useState } from 'react'
import random from '@/utils/random'

import Flex from '@/layouts/Flex'

export interface CheckboxProps {
  checked?: boolean
  children: ReactNode
  error?: boolean
  handler: (name: string, value: string) => void
  id?: string
  name: string
}

export function Checkbox({
    children,
    handler,
    checked = false,
    error,
    id,
    name,
    ...props
  }: CheckboxProps) {
  const [on, setOn] = useState<boolean>(checked)

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    handler(name, ev.target.checked.toString())
    setOn(!on)
  }

  return (
    <Flex align='center' row>
      <input {...props}
        aria-checked={on}
        aria-label={name}
        className={error ? 'error' : undefined}
        checked={on}
        id={id || random()}
        name={name}
        onChange={handleChange}
        role='checkbox'
        type='checkbox' />
      {children}
    </Flex>
  )
}

export interface InputProps {
  autocomplete?: string
  disabled?: boolean
  error?: boolean
  handler: (name: string, value: string) => void
  id?: string
  name: string
  type?: string
  value?: string
}

export function Input({
    autocomplete = 'on',
    disabled = false,
    error,
    handler,
    id,
    name,
    type = 'text',
    value,
    ...props
  }: InputProps) {
  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    handler(name, ev.target.value)
  }

  return (
    <input {...props}
      aria-disabled={disabled}
      aria-label={name}
      autoComplete={autocomplete}
      className={error ? 'error' : undefined}
      disabled={disabled}
      id={id || random()}
      name={name}
      onChange={handleChange}
      onInput={handleChange}
      role='textbox'
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
    <option {...props}
      aria-label={value}
      role='option'
      value={value}>
      {children}
    </option>
  )
}

export interface RadioProps {
  children: ReactNode
  error?: boolean
  handler: (name: string, value: string) => void
  id?: string
  name: string
  value: string
}

export function Radio({children, error, handler, id, name, value, ...props}: RadioProps) {
  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    handler(name, ev.target.value)
  }

  return (
    <Flex align='center' row>
      <input {...props}
        aria-label={name}
        className={error ? 'error' : undefined}
        id={id || random()}
        name={name}
        onChange={handleChange}
        role='radio'
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
  id?: string
  name: string
  value?: string
}

export function Select({children, error, handler, id, name, value, ...props}: SelectProps) {
  function handleChange(ev: ChangeEvent<HTMLSelectElement>) {
    handler(name, ev.target.value)
  }

  return (
    <select {...props}
      aria-label={name}
      className={error ? 'error' : undefined}
      defaultValue={value}
      id={id || random()}
      name={name}
      onChange={handleChange}
      onInput={handleChange}
      role='listbox'>
      {children}
    </select>
  )
}

export interface TextareaProps {
  error?: boolean
  handler: (name: string, value: string) => void
  id?: string
  name: string
  value?: string
}

export function Textarea({error, handler, id, name, value, ...props}: TextareaProps) {
  function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
    handler(name, ev.target.value)
  }

  return (
    <textarea {...props}
      aria-label={name}
      aria-multiline='true'
      className={error ? 'error' : undefined}
      id={id || random()}
      onChange={handleChange}
      role='textbox'
      value={value} />
  )
}
