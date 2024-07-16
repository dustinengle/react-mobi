
import { Context, Position, Style } from '../commons/types'
import { ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
  context?: Context
  message: string
  position?: Position
  style?: Style
}

export function Tooltip({children, context, message, position = 'cover', style, ...props}: TooltipProps) {
  const classNames = ['tooltip', position]
  if (context) classNames.push(`tooltip-${context}`)
  const classes = classNames.join(' ')

  return (
    <div {...props} className={classes}>
      <div
        className='message'
        role='tooltip'>
        {message}
      </div>
      <span style={style}>{children}</span>
    </div>
  )
}
