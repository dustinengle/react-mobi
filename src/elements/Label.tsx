
import { Field } from '@/commons/types'

import Text from '@/elements/Text'

export interface LabelProps {
  error?: boolean
  field: Field
  highlight?: 'none' | 'optional' | 'required'
  optional?: string
  required?: string
}

export default function Label({
    error = false,
    field,
    highlight = 'none',
    optional = '(optional)',
    required = '(required)',
    ...props
  }: LabelProps) {
  const classes = error ? 'error' : undefined

  return (
    <label {...props}
      aria-label={field.label}
      className={classes}
      htmlFor={field.name}>
      {field.label}
      {highlight === 'optional' && !field.required &&
        <Text italic>{optional}</Text>
      }
      {highlight === 'required' && field.required &&
        <Text italic>{required}</Text>
      }
    </label>
  )
}
