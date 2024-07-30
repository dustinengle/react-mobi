
import { Contexts, Style, Styles } from '../commons'
import { ReactNode } from 'react'
import { Extractor } from '../utils'

export interface TextProps extends Contexts, Styles {
  children: ReactNode
  style?: Style
}

export function Text({children, style, ...props}: TextProps) {
  const classes = [
    'text',
    ...Extractor.contexts(props),
    ...Extractor.styles(props),
  ].join(' ')

  return (
    <span className={classes} style={style}>
      {children}
    </span>
  )
}
