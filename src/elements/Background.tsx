
import { Extractor } from '../utils'
import { ReactNode } from 'react'
import { Roles, Style } from '../commons'

export interface BackgroundProps extends Roles {
  children: ReactNode
  style?: Style
}

export function Background({children, style, ...props}: BackgroundProps) {
  const classes = [
    'background',
    ...Extractor.roles(props),
  ].join(' ')

  return (
    <div {...props} className={classes} style={style}>
      {children}
    </div>
  )
}
