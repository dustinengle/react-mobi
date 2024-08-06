
import { Contexts, Locations, Style } from '../commons'
import { Extractor } from '../utils'
import { ReactNode } from 'react'

export interface TooltipProps extends Contexts, Locations {
  children: ReactNode
  message: string
  style?: Style
}

export function Tooltip({children, message, style, ...props}: TooltipProps) {
  return (
    <div
      className={[
          'tooltip',
          ...Extractor.locations(props),
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
