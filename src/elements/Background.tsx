
import { Context, Style } from '@/commons/types'
import { ReactNode } from 'react'

export interface BackgroundProps {
  children: ReactNode
  context?: Context
  style?: Style
}

export default function Background({children, context = 'info', style, ...props}: BackgroundProps) {
  const classes = `background background-${context}`

  return (
    <div {...props} className={classes} style={style}>
      {children}
    </div>
  )
}
