
import classNames from '@/utils/classNames'

import { Context } from '@/commons/types'
import { ReactNode } from 'react'

export interface BadgeProps {
  children: ReactNode
  context?: Context | 'default'
  count: number
}

export default function Badge({ children, count, context = 'default' }: BadgeProps) {
  const classes = classNames({ badge: context })

  return (
    <div className={`badge ${classes}`}>
      <div className='count'>{count}</div>
      {children}
    </div>
  )
}
