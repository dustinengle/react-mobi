
import { Context } from '../commons/types'
import { ReactNode } from 'react'

export interface BadgeProps {
  children: ReactNode
  context?: Context | 'default'
  count: number
}

export default function Badge({ children, count, context = 'default' }: BadgeProps) {
  const classes = `badge badge-${context}`

  return (
    <div className={classes}>
      <div className='count' role='status'>{count}</div>
      {children}
    </div>
  )
}
