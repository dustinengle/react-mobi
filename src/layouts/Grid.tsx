
import { Justify } from '@/commons/types'
import { ReactNode } from 'react'

export interface GridProps {
  children: ReactNode
  cols: number
  gap?: number | string
  justify?: Justify
  rows?: number
}

export default function Grid({children, cols, gap, justify, rows, ...props}: GridProps) {
  const classNames = ['grid']
  if (justify) classNames.push(`justify-${justify}`)

  const classes = classNames.join(' ')
  const style = {
    gap,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  }

  return (
    <div {...props}
      className={classes}
      role='grid'
      style={style}>
      {children}
    </div>
  )
}

export interface GridAreaProps {
  children: ReactNode
  colEnd?: number
  colStart: number
  rowEnd?: number
  rowStart: number
}

export function GridArea({children, colEnd, colStart, rowEnd, rowStart, ...props}: GridAreaProps) {
  const style = {
    gridColumn: `${colStart} / ${colEnd || colStart}`,
    gridRow: `${rowStart} / ${rowEnd || rowStart}`,
  }

  return (
    <div {...props}
      role='gridcell'
      style={style}>
      {children}
    </div>
  )
}
