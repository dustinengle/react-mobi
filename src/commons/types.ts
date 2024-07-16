
export type Align = 'center' | 'end' | 'start' | 'stretch'

export type Context = 'danger' | 'info' | 'success' | 'warning'

export interface Field {
  autocomplete?: string
  error?: string
  label: string
  input: 'checkbox'
    | 'date'
    | 'email'
    | 'file'
    | 'number'
    | 'password'
    | 'radio'
    | 'select'
    | 'tel'
    | 'text'
    | 'textarea'
  max?: number
  min?: number
  name: string
  options?: Record<string, string>
  regex?: RegExp
  required?: boolean
  value?: boolean | number | string
}

export type FormData = Record<string, boolean | number | string>

export type Icons = 'alert'
  | 'attach'
  | 'award'
  | 'calendar'
  | 'caret-down'
  | 'caret-up'
  | 'cash'
  | 'cc-amex'
  | 'cc-discover'
  | 'cc-mastercard'
  | 'cc-visa'
  | 'check'
  | 'close'
  | 'comment'
  | 'danger'
  | 'delete'
  | 'edit'
  | 'email'
  | 'folder'
  | 'hide'
  | 'info'
  | 'lock'
  | 'map'
  | 'message'
  | 'minus'
  | 'next'
  | 'open'
  | 'plus'
  | 'prev'
  | 'profile'
  | 'restricted'
  | 'save'
  | 'settings'
  | 'star'
  | 'success'
  | 'tag'
  | 'unlock'
  | 'user'
  | 'view'
  | 'warning'

export type Justify = 'around' | 'between' | 'center' | 'end' | 'evenly' | 'start'

export type Position = 'cover' | 'bottom' | 'left' | 'right' | 'top'

export type Role = 'primary' | 'secondary' | 'tertiary'

export type Style = Record<string, number | string>
