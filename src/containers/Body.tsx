
import { ReactNode } from 'react'

export interface BodyProps {
  children: ReactNode
  margin?: number | string
  padding?: number | string
}

export default function Body({children, margin, padding, ...props}: BodyProps) {
  const style = {
    margin,
    padding,
  }

  return (
    <div {...props}
      className='body'
      role='main'
      style={style}>
      {children}
    </div>
  )
}
