
import { Behaviors, Style } from '../commons'
import { Extractor } from '../utils'

export interface ImageProps extends Behaviors {
  alt?: string
  caption?: string
  src: string
  style?: Style
}

export function Image({alt, caption, src, ...props}: ImageProps) {
  const classes = [
    'image',
    ...Extractor.behaviors(props),
  ].join(' ')

  return (
    <div {...props}
      aria-label={alt || caption}
      aria-labelledby={caption ? src : undefined}
      role='figure'>
      <img {...props}
        alt={alt || caption || src}
        className={classes}
        src={src} />
      {caption &&
        <p className='image-caption' id={src}>{caption}</p>
      }
    </div>
  )
}
