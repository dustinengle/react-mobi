
import { ReactNode } from 'react'
import { Style } from '@/commons/types'

import Icon from '@/elements/Icon'

export interface LinkProps {
  children: ReactNode
  href: string
  open?: boolean
  style?: Style
}

export default function Link({children, href, open = false, ...props}: LinkProps) {
  const target = open ? '_blank' : '_self'

  return (
    <a {...props}
      className='link'
      href={href}
      role='link'
      target={target}>
      {children} {open && <Icon name='open' size='sm' />}
    </a>
  )
}
