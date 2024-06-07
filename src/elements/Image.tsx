
import { Style } from '@/commons/types'

export interface ImageProps {
  alt?: string
  role?: 'contain' | 'cover' | 'fill' | 'responsive'
  src: string
  style?: Style
}

export default function Image({alt, role, src, ...props}: ImageProps) {
  const classes = `image image-${role}`

  return (
    <img {...props} alt={alt || src} className={classes} src={src} />
  )
}
