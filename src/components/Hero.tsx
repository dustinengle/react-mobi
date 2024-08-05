
import { Extractor } from '../utils'
import { Locations } from '../commons'
import { ReactNode } from 'react'

export interface HeroProps extends Locations {
  children: ReactNode
  image: string
}

export function Hero({children, image = 'left', ...props}: HeroProps) {
  const classes = [
    'hero',
    ...Extractor.locations(props),
  ].join(' ')

  return (
    <div {...props}
      className={classes}
      role='banner'
      style={{backgroundImage: `url(${image})`}}>
      <div className='hero-info'>
        {children}
      </div>
    </div>
  )
}
