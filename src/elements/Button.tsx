
import { Role } from '../commons/types'

import { Flex } from '../layouts/Flex'
import { Icon, Icons } from './Icon'

export interface ButtonProps {
  callback: (...args: any[]) => any
  icon?: Icons
  label: string
  role?: Role | 'default'
}

export function Button({
    callback,
    icon,
    label,
    role
  }: ButtonProps) {
  const classes = `button ${role}`

  return (
    <button
      className={classes}
      onClick={callback}
      role='button'>
      <Flex align='center' justify='center' row>
        {icon && <Icon name={icon as Icons} sm />}
        {label}
      </Flex>
    </button>
  )
}
