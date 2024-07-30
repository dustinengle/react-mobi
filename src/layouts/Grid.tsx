
import { ReactNode } from 'react'

export interface GridProps {
  children: ReactNode
  cols: number
  gap?: number | string
  rows?: number
}

export function Grid({children, cols, gap, rows, ...props}: GridProps) {
  const style = {
    gap,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  }

  return (
    <div {...props}
      className='grid'
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
