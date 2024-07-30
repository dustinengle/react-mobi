
import { Contexts } from '../commons'
import { Extractor } from '../utils'
import { ReactNode } from 'react'

export interface BadgeProps extends Contexts {
  children: ReactNode
  count: number
}

export function Badge({children, count, ...props}: BadgeProps) {
  const classes = [
    'count',
    ...Extractor.contexts(props),
  ].join(' ')

  return (
    <div className='badge'>
      <div className={classes} role='status'>{count}</div>
      {children}
    </div>
  )
}
