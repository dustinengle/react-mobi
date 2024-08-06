
import { Behaviors, Dimensions, Spacings, Style } from '../commons'
import { Extractor } from '../utils'

export interface ImageProps extends Behaviors, Dimensions, Spacings {
  alt?: string
  caption?: string
  src: string
  style?: Style
}

export function Image({alt, caption, src, style, ...props}: ImageProps) {
  const classes = [
    'image',
    ...Extractor.behaviors(props),
  ].join(' ')

  const {height, width} = props
  const {margin, padding} = props
  const styles = {
    height,
    margin,
    padding,
    width,
    ...style,
  }

  return (
    <div
      aria-label={alt || caption}
      aria-labelledby={caption ? src : undefined}
      role='figure'
      style={styles}>
      <img
        alt={alt || caption || src}
        className={classes}
        src={src}
        style={styles} />
      {caption &&
        <p className='image-caption' id={src}>{caption}</p>
      }
    </div>
  )
}
