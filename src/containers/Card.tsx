
import { ReactNode } from 'react'
import { Style } from '@/commons/types'

export interface CardProps {
  children: ReactNode
  style?: Style
}

export default function Card({children, style, ...props}: CardProps) {
  return (
    <div {...props} className='card' style={style}>
      {children}
    </div>
  )
}
