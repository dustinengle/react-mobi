
import { Formatter } from './formatter'
import { ReactNode, createElement } from 'react'

import { Text, TextProps } from '../elements'

export class Renderer {
  static render(template: string, data: Record<string, number>): Array<ReactNode> {
    const rendered: Array<ReactNode> = []

    let i: number = 0
    let text: string = ''
    let token: string = ''

    function getValue(value: string): string {
      let text = ''

      const [key, prefix] = value.split(':')
      if (data[key]) {
        if (prefix) text += `${prefix} `
        text += Formatter.currency(data[key])
      }

      return text
    }

    function renderText() {
      if (text.length) {
        rendered.push(text)
      }
      text = ''
    }

    function renderToken() {
      const props: TextProps = {children: text}
      switch (token) {
        case 'b':
          props.bold = true
          break
        case 'i':
          props.italic = true
          break
        case 'u':
          props.underline = true
          break
      }

      rendered.push(createElement(Text, props))

      text = ''
      token = ''
    }

    let char: string = ''
    while (i < template.length) {
      char = template[i]

      if (char === '[') {
        renderText()

        i++
        token = template[i]
        i++
      } else if (char === ']') {
        renderToken()
      } else if (char === '{') {
        let v = ''
        i++
        while (template[i] !== '}') {
          v += template[i]
          i++
        }
        text += getValue(v)
      } else {
        text += char
      }

      i++
    }

    return rendered
  }
}

