
import { Alignments, Justifications, Style } from '../commons'
import { Extractor } from '../utils'
import { ReactNode } from 'react'

export interface FlexProps extends Alignments, Justifications {
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
    gap = 0,
    row,
    style,
    wrap,
    ...props
  }: FlexProps) {
  const classNames = [
    'flex',
    ...Extractor.alignments(props),
    ...Extractor.justifications(props),
  ]
  if (autoWrap) classNames.push('autowrap')
  if (column) classNames.push('flex-column')
  if (full) classNames.push('flex-full')
  if (row) classNames.push('flex-row')
  if (wrap) classNames.push('flex-wrap')

  const classes = classNames.join(' ')
  const styles = {gap, ...style}

  return (
    <div {...props} className={classes} style={styles}>
      {children}
    </div>
  )
}
