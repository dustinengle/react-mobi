
import { Context } from '@/commons/types'
import { ReactNode } from 'react'

export interface BackgroundProps {
  children: ReactNode
  context?: Context
}

export default function Background({children, context = 'info', ...props}: BackgroundProps) {
  const classes = `background background-${context}`

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
