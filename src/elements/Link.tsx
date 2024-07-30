
import { ReactNode } from 'react'
import { Style } from '../commons/types'

import { Icon, Icons } from '../elements/Icon'

export interface LinkProps {
  children: ReactNode
  href: string
  open?: boolean
  style?: Style
}

export function Link({children, href, open = false, ...props}: LinkProps) {
  const target = open ? '_blank' : '_self'

  return (
    <a {...props}
      className='link'
      href={href}
      role='link'
      target={target}>
      {children} {open && <Icon name={Icons.open} sm />}
    </a>
  )
}
