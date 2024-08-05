
import { Behaviors, Dimensions, Style } from '../commons'
import { Extractor } from '../utils'

export interface ImageProps extends Behaviors, Dimensions {
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
  const styles = {
    height,
    width,
    ...style,
  }

  return (
    <div {...props}
      aria-label={alt || caption}
      aria-labelledby={caption ? src : undefined}
      role='figure'>
      <img {...props}
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
