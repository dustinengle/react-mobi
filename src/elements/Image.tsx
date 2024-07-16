
import { Style } from '../commons/types'

export interface ImageProps {
  alt?: string
  caption?: string
  role?: 'contain' | 'cover' | 'fill' | 'responsive'
  src: string
  style?: Style
}

export default function Image({alt, caption, role = 'responsive', src, ...props}: ImageProps) {
  const classes = `image image-${role}`

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
