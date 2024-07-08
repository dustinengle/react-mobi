
import { ReactNode } from 'react'

import Text from '@/elements/Text'

export interface HighlightProps {
  bg?: string
  children: ReactNode
  fg?: string
}

export default function Highlight({ children, bg = 'yellow', fg = 'black' }: HighlightProps) {
  return (
    <Text style={{ backgroundColor: bg, color: fg }}>
      {children}
    </Text>
  )
}
