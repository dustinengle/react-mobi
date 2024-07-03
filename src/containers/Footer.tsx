
import { ReactNode } from 'react'

export interface FooterProps {
  children: ReactNode
}

export default function Footer({children, ...props}: FooterProps) {
  return (
    <div {...props} className='footer'>
      {children}
    </div>
  )
}
