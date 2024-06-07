
import classNames from '@/utils/classNames'

import { Justify } from '@/commons/types'
import { ReactNode } from 'react'

export interface GridProps {
  children: ReactNode
  cols: number
  justify?: Justify
  rows: number
}

function Grid({children, cols, rows, ...props}: GridProps) {
  const classes = classNames(props)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Grid
