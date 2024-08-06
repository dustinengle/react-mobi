
import { Alignments } from '../commons'
import { Extractor } from '../utils'
import { ReactNode } from 'react'

export interface HeadingProps extends Alignments {
  children: ReactNode
}

export function H1({children, ...props}: HeadingProps) {
  const classes = [
    ...Extractor.alignments(props),
  ].join(' ')

  return (
    <h1 className={classes} id={children?.toString()}>
      {children}
    </h1>
  )
}

export function H2({children, ...props}: HeadingProps) {
  const classes = [
    ...Extractor.alignments(props),
  ].join(' ')

  return (
    <h2 className={classes} id={children?.toString()}>
      {children}
    </h2>
  )
}

export function H3({children, ...props}: HeadingProps) {
  const classes = [
    ...Extractor.alignments(props),
  ].join(' ')

  return (
    <h3 className={classes} id={children?.toString()}>
      {children}
    </h3>
  )
}

export function H4({children, ...props}: HeadingProps) {
  const classes = [
    ...Extractor.alignments(props),
  ].join(' ')

  return (
    <h4 className={classes} id={children?.toString()}>
      {children}
    </h4>
  )
}

export function H5({children, ...props}: HeadingProps) {
  const classes = [
    ...Extractor.alignments(props),
  ].join(' ')

  return (
    <h5 className={classes} id={children?.toString()}>
      {children}
    </h5>
  )
}

export function H6({children, ...props}: HeadingProps) {
  const classes = [
    ...Extractor.alignments(props),
  ].join(' ')

  return (
    <h6 className={classes} id={children?.toString()}>
      {children}
    </h6>
  )
}
