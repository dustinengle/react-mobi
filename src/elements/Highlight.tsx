
import { ReactNode } from 'react'

export interface HighlightProps {
  bg?: string
  children: ReactNode
  fg?: string
}

export default function Highlight({ children, bg = 'yellow', fg = 'black' }: HighlightProps) {
  return (
    <span className='highlight' style={{ backgroundColor: bg, color: fg }}>
      {children}
    </span>
  )
}
