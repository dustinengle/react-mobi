
import { Field } from '@/commons/types'

import Text from '@/elements/Text'

export interface LabelProps {
  field: Field
  highlight?: 'none' | 'optional' | 'required'
  optional?: string
  required?: string
}

export default function Label({
    field,
    highlight = 'none',
    optional = '(optional)',
    required = '(required)',
    ...props
  }: LabelProps) {
  return (
    <label {...props}
      aria-label={field.label}
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
