
import { ReactNode } from 'react'

export interface FooterProps {
  children: ReactNode
}

export function Footer({children, ...props}: FooterProps) {
  return (
    <div {...props}
      aria-label='Footer'
      className='footer'
      role='contentinfo'>
      {children}
    </div>
  )
}
