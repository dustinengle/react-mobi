
import { Dimensions, Style } from '../commons'
import { ReactNode } from 'react'

export interface CardProps extends Dimensions {
  children: ReactNode
  dark?: boolean
  style?: Style
}

export function Card({children, dark = false, style, ...props}: CardProps) {
  let classes = 'card'
  if (dark) classes += ' dark-shadow'

  const {height, width} = props
  const styles = {
    height,
    width,
    ...style,
  }

  return (
    <div {...props} className={classes} style={styles}>
      {children}
    </div>
  )
}
