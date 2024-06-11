
import { Justify } from '@/commons/types'
import { ReactNode } from 'react'

export interface GridProps {
  children: ReactNode
  cols: number
  justify?: Justify
  rows: number
}

function Grid({children, cols, rows, justify, ...props}: GridProps) {
  const classNames = []
  if (justify) classNames.push(`grid-${justify}`)

  const classes = classNames.join(' ')

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

export default Grid
