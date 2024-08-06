
import { Alignments } from '../commons'
import { Extractor } from '../utils'
import { ReactNode } from 'react'

export interface HeaderProps extends Alignments {
  children: ReactNode
}

export function Header({children, ...props}: HeaderProps) {
  const classes = [
    'header',
    ...Extractor.alignments(props),
  ].join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
