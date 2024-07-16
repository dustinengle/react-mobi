
import { useEffect } from 'react'

export interface MathProps {
  formula: string
}

export function Math({formula, ...props}: MathProps) {
  useEffect(() => {
    if (typeof(window?.MathJax) !== 'undefined') {
      window.MathJax.typesetClear()
      window.MathJax.typeset()
    }
  }, [formula])

  return (
    <p>{formula}</p>
  )
}
