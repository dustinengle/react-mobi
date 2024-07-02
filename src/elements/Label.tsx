
import { Field } from '@/commons/types'

import Text from '@/elements/Text'

export interface LabelProps {
  field: Field
  symbol?: string
}

export default function Label({field, symbol = '*', ...props}: LabelProps) {
  return (
    <label htmlFor={field.name}>
      {field.label}
      {field.required && <Text context='danger'>{symbol}</Text>}
    </label>
  )
}
