
import { Context } from '../commons/types'
import { ReactNode } from 'react'

export interface BadgeProps {
  children: ReactNode
  context?: Context | 'default'
  count: number
}

export function Badge({children, count, context = 'default'}: BadgeProps) {
  const classes = `count ${context}`

  return (
    <div className='badge'>
      <div className={classes} role='status'>{count}</div>
      {children}
    </div>
  )
}
