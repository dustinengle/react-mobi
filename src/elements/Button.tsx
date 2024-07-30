
import { Extractor } from '../utils'
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
  const classes = [
    'button',
    ...Extractor.roles(props),
  ].join(' ')

  return (
    <button
      className={classes}
      onClick={callback}
      role='button'>
      <Flex row>
        {icon && <Icon name={icon} sm />}
        {label}
      </Flex>
    </button>
  )
}
