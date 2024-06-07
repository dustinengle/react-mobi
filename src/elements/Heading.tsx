
import { ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode
}

export function H1({children, ...props}: HeadingProps) {
  return (
    <h1 {...props}>{children}</h1>
  )
}

export function H2({children, ...props}: HeadingProps) {
  return (
    <h2 {...props}>{children}</h2>
  )
}

export function H3({children, ...props}: HeadingProps) {
  return (
    <h3 {...props}>{children}</h3>
  )
}

export function H4({children, ...props}: HeadingProps) {
  return (
    <h4 {...props}>{children}</h4>
  )
}

export function H5({children, ...props}: HeadingProps) {
  return (
    <h5 {...props}>{children}</h5>
  )
}

export function H6({children, ...props}: HeadingProps) {
  return (
    <h6 {...props}>{children}</h6>
  )
}
