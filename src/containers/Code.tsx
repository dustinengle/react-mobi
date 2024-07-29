
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
import { useEffect } from 'react'

export interface CodeProps {
  language?: string
  source: string
}

export function Code({language = 'javascript', source, ...props}: CodeProps) {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <pre {...props}>
      <code className={`language-${language}`}>
        {source}
      </code>
    </pre>
  )
}
