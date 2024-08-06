
import {
  Alignments,
  Contexts,
  Dimensions,
  Roles,
  Spacings,
  Style,
  Styles,
} from '../commons'
import { ReactNode } from 'react'
import { Extractor } from '../utils'

export interface TextProps extends Alignments, Contexts, Dimensions, Roles, Spacings, Styles {
  children: ReactNode
  color?: string
  size?: number | string
  style?: Style
}

export function Text({children, color, size, style, ...props}: TextProps) {
  const classes = [
    'text',
    ...Extractor.alignments(props),
    ...Extractor.contexts(props),
    ...Extractor.roles(props),
    ...Extractor.styles(props),
  ].join(' ')

  const {height, width} = props
  const {margin, padding} = props
  const styles = {
    color,
    fontSize: size,
    height,
    margin,
    padding,
    width,
    ...style,
  }

  return (
    <span className={classes} style={styles}>
      {children}
    </span>
  )
}
