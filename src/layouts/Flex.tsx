
import classNames from '@/utils/classNames'

import { Align, Justify, Style } from '@/commons/types'
import { ReactNode } from 'react'

type Direction = 'column' | 'row'

export interface FlexProps {
  align?: Align
  children: ReactNode
  direction: Direction
  full?: boolean
  gap?: number | string
  justify?: Justify
  style?: Style
  wrap?: boolean
}

function Flex({children, direction, full, gap, style, wrap, ...props}: FlexProps) {
  let classes = classNames({
    'flex': direction,
    ...props,
  })
  if (full) classes += ' flex-full'
  if (wrap) classes += ' flex-wrap'

  const styles = {gap, ...style}

  return (
    <div className={`flex ${classes}`} style={styles}>
      {children}
    </div>
  )
}

export default Flex
