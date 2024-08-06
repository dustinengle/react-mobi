
import {
  Dimensions,
  Justifications,
  Orientations,
  Spacings,
  Style,
} from '../commons'
import { Extractor } from '../utils'
import { ReactNode } from 'react'

export interface FlexProps extends Dimensions, Justifications, Orientations, Spacings {
  autoWrap?: boolean
  children: ReactNode
  column?: boolean
  full?: boolean
  gap?: number | string
  row?: boolean
  style?: Style
  wrap?: boolean
}

export function Flex({
    children,
    autoWrap = false,
    column = true,
    full,
    gap,
    row,
    style,
    wrap,
    ...props
  }: FlexProps) {
  const classNames = [
    'flex',
    ...Extractor.orientations(props),
    ...Extractor.justifications(props),
  ]
  if (autoWrap) classNames.push('autowrap')
  if (column) classNames.push('flex-column')
  if (full) classNames.push('flex-full')
  if (row) classNames.push('flex-row')
  if (wrap) classNames.push('flex-wrap')

  const classes = classNames.join(' ')

  const {height, width} = props
  const {margin, padding} = props
  const styles = {
    gap,
    height,
    margin,
    padding,
    width,
    ...style,
  }

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  )
}
