
import { Align, Justify, Style } from '@/commons/types'
import { ReactNode } from 'react'

type Direction = 'column' | 'row'

export interface FlexProps {
  align?: Align
  children: ReactNode
  column?: boolean
  full?: boolean
  gap?: number | string
  justify?: Justify
  row?: boolean
  style?: Style
  wrap?: boolean
}

function Flex({children, align, column = true, full, gap, justify, row, style, wrap, ...props}: FlexProps) {
  const classNames = ['flex']
  if (align) classNames.push(`align-${align}`)
  if (column) classNames.push('flex-column')
  if (full) classNames.push('flex-full')
  if (justify) classNames.push(`justify-${justify}`)
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

export default Flex
