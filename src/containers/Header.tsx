
import { ReactNode } from 'react'

export interface HeaderProps {
  children: ReactNode
}

export function Header({children, ...props}: HeaderProps) {
  return (
    <div className='header'>
      {children}
    </div>
  )
}
