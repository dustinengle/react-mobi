
import { Extractor } from '../utils/extractor'
import { Roles } from '../commons/interfaces'

import { Flex } from '../layouts/Flex'
import { Icon, Icons } from './Icon'

export interface ButtonProps extends Roles {
  callback: (...args: any[]) => any
  icon?: Icons
  label: string
}

export function Button({
    callback,
    icon,
    label,
    ...props
  }: ButtonProps) {
  const role = Extractor.role(props)

  const classes = `button ${role}`

  return (
    <button
      className={classes}
      onClick={callback}
      role='button'>
      <Flex align='center' justify='center' row>
        {icon && <Icon name={icon} sm />}
        {label}
      </Flex>
    </button>
  )
}
