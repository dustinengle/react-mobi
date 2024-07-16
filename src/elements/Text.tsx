
import { Context, Style } from '../commons/types'
import { ReactNode } from 'react'

export interface TextProps {
  bold?: boolean
  capitalize?: boolean
  children: ReactNode
  context?: Context
  italic?: boolean
  legal?: boolean
  lowercase?: boolean
  strikethrough?: boolean
  style?: Style
  subscript?: boolean
  superscript?: boolean
  underline?: boolean
  uppercase?: boolean
}

export default function Text({children, context, style, ...props}: TextProps) {
  let classNames = ['text']
  if (context) classNames.push(context)
  for (const [name, active] of Object.entries(props)) {
    if (active) classNames.push(name)
  }

  const classes = classNames.join(' ')

  return (
    <span className={classes} style={style}>
      {children}
    </span>
  )
}
