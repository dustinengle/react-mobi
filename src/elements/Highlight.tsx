
import { ReactNode } from 'react'
import { Style } from '@/commons/types'

import Text from '@/elements/Text'

export interface HighlightProps {
  bg?: string
  children: ReactNode
  fg?: string
  style?: Style
}

export default function Highlight({children, bg = 'yellow', fg = 'black', style}: HighlightProps) {
  return (
    <Text style={{...style, backgroundColor: bg, color: fg}}>
      {children}
    </Text>
  )
}
