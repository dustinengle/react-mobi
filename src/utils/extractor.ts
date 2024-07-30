
import {
  Alignments,
  Arrangements,
  Behaviors,
  Contexts,
  Directions,
  Justifications,
  Lines,
  Positions,
  Roles,
  Sizes,
  Styles,
} from '../commons'

export class Extractor {
  static alignments(props: Alignments): Array<string> {
    const keys: Array<string> = []

    if (props.center) keys.push('center')
    if (props.end) keys.push('end')
    if (props.start) keys.push('start')
    if (props.stretch) keys.push('stretch')

    if (!keys.length) keys.push('center')
    return keys.map(k => `align-${k}`)
  }

  static arrangements(props: Arrangements): Array<string> {
    const keys: Array<string> = []

    if (props.ordered) keys.push('ordered')
    if (props.unordered) keys.push('unordered')

    if (!keys.length) keys.push('unordered')
    return keys
  }

  static behaviors(props: Behaviors): Array<string> {
    const keys: Array<string> = []

    if (props.contain) keys.push('contain')
    if (props.cover) keys.push('cover')
    if (props.fill) keys.push('fill')
    if (props.responsive) keys.push('responsive')

    if (!keys.length) keys.push('responsive')
    return keys
  }

  static contexts(props: Contexts): Array<string> {
    const keys: Array<string> = []

    if (props.danger) keys.push('danger')
    if (props.default) keys.push('default')
    if (props.info) keys.push('info')
    if (props.success) keys.push('success')
    if (props.warning) keys.push('warning')

    if (!keys.length) keys.push('default')
    return keys
  }

  static directions(props: Directions): Array<string> {
    const keys: Array<string> = []

    if (props.horizontal) keys.push('horizontal')
    if (props.vertical) keys.push('vertical')

    if (!keys.length) keys.push('horizontal')
    return keys
  }

  static justifications(props: Justifications): Array<string> {
    const keys: Array<string> = []

    if (props.around) keys.push('around')
    if (props.between) keys.push('between')
    if (props.center) keys.push('center')
    if (props.end) keys.push('end')
    if (props.evenly) keys.push('evenly')
    if (props.start) keys.push('start')

    if (!keys.length) keys.push('center')
    return keys.map(k => `justify-${k}`)
  }

  static lines(props: Lines): Array<string> {
    const keys: Array<string> = []

    if (props.dashed) keys.push('dashed')
    if (props.solid) keys.push('solid')

    if (!keys.length) keys.push('solid')
    return keys
  }

  static positions(props: Positions): Array<string> {
    const keys: Array<string> = []

    if (props.cover) keys.push('cover')
    if (props.bottom) keys.push('bottom')
    if (props.left) keys.push('left')
    if (props.right) keys.push('right')
    if (props.top) keys.push('top')

    if (!keys.length) keys.push('cover')
    return keys
  }

  static roles(props: Roles): Array<string> {
    const keys: Array<string> = []

    if (props.primary) keys.push('primary')
    if (props.secondary) keys.push('secondary')
    if (props.tertiary) keys.push('tertiary')

    if (!keys.length) keys.push('default')
    return keys
  }

  static sizes(props: Sizes): Array<string> {
    const keys: Array<string> = []

    if (props.sm) keys.push('sm')
    if (props.md) keys.push('md')
    if (props.lg) keys.push('lg')
    if (props.xl) keys.push('xl')

    if (!keys.length) keys.push('md')
    return keys
  }

  static styles(props: Styles): Array<string> {
    const keys: Array<string> = []

    if (props.bold) keys.push('bold')
    if (props.capitalize) keys.push('capitalize')
    if (props.italic) keys.push('italic')
    if (props.legal) keys.push('legal')
    if (props.lower) keys.push('lower')
    if (props.strike) keys.push('strike')
    if (props.sub) keys.push('sub')
    if (props.super) keys.push('super')
    if (props.underline) keys.push('underline')
    if (props.upper) keys.push('upper')

    return keys
  }
}
