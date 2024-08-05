
import {
  Alignments,
  Contexts,
  Roles,
  Spacings,
  Style,
  Styles,
} from '../commons'
import { ReactNode } from 'react'
import { Extractor } from '../utils'

export interface TextProps extends Alignments, Contexts, Roles, Spacings, Styles {
  children: ReactNode
  size?: number | string
  style?: Style
}

export function Text({children, size, style, ...props}: TextProps) {
  const classes = [
    'text',
    ...Extractor.alignments(props),
    ...Extractor.contexts(props),
    ...Extractor.roles(props),
    ...Extractor.styles(props),
  ].join(' ')

  const {margin, padding} = props
  const styles = {
    fontSize: size,
    margin,
    padding,
    ...style,
  }

  return (
    <span className={classes} style={styles}>
      {children}
    </span>
  )
}
