
import { ReactNode } from 'react'

export interface HeaderProps {
  children: ReactNode
}

export default function Header({children, ...props}: HeaderProps) {
  return (
    <div {...props} className='header'>
      {children}
    </div>
  )
}
