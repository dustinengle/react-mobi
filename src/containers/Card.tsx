
import { ReactNode } from 'react'
import { Style } from '../commons'

export interface CardProps {
  children: ReactNode
  dark?: boolean
  style?: Style
}

export function Card({children, dark = false, style, ...props}: CardProps) {
  let classes = 'card'
  if (dark) classes += ' dark-shadow'

  return (
    <div {...props} className={classes} style={style}>
      {children}
    </div>
  )
}
