
import { Contexts, Positions, Style } from '../commons'
import { Extractor } from '../utils'
import { ReactNode } from 'react'

export interface TooltipProps extends Contexts, Positions {
  children: ReactNode
  message: string
  style?: Style
}

export function Tooltip({children, message, style, ...props}: TooltipProps) {
  return (
    <div {...props}
      className={[
          'tooltip',
          ...Extractor.positions(props),
        ].join(' ')}>
      <div
        className={[
          'message',
          ...Extractor.contexts(props),
        ].join(' ')}
        role='tooltip'>
        {message}
      </div>
      <span style={style}>{children}</span>
    </div>
  )
}
