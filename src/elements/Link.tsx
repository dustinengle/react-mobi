
import { ReactNode } from 'react'
import { Style } from '../commons'

import { Icon, Icons } from '../elements/Icon'

export interface LinkProps {
  button?: boolean
  children: ReactNode
  href: string
  open?: boolean
  style?: Style
}

export function Link({button, children, href, open = false, ...props}: LinkProps) {
  const classes = ['link', button ? 'button primary' : ''].join(' ')

  const target = open ? '_blank' : '_self'

  return (
    <a
      className={classes}
      href={href}
      role='link'
      target={target}>
      {children} {open && <Icon name={Icons.open} sm />}
    </a>
  )
}
