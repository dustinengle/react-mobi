
import { ReactNode } from 'react'

export interface BodyProps {
  children: ReactNode
  margin?: number | string
  padding?: number | string
}

export function Body({children, margin, padding, ...props}: BodyProps) {
  const style = {
    margin,
    padding,
  }

  return (
    <div
      className='body'
      role='main'
      style={style}>
      {children}
    </div>
  )
}
