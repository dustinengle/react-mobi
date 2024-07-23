
import { Icons, Role } from '../commons/types'

import { Flex } from '../layouts/Flex'
import { Icon } from './Icon'

export interface ButtonProps {
  callback: (...args: any[]) => any
  icon?: string
  label: string
  role?: Role | 'default'
}

export function Button({
    callback,
    icon,
    label,
    role = 'default'
  }: ButtonProps) {
  const classes = `button button-${role}`

  return (
    <button
      className={classes}
      onClick={callback}
      role='button'>
      <Flex align='center' justify='center' row>
        {icon && <Icon name={icon as Icons} size='sm' />}
        {label}
      </Flex>
    </button>
  )
}
