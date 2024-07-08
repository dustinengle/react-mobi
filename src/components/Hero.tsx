
import { Position } from '@/commons/types'
import { ReactNode } from 'react'

export interface HeroProps {
  children: ReactNode
  image: string
  position?: Position
}

export default function Hero({children, image, position = 'left', ...props}: HeroProps) {
  const classes = `hero hero-${position}`

  return (
    <div {...props}
      className={classes}
      role='banner'
      style={{backgroundImage: `url(${image})`}}>
      <div className='info'>
        {children}
      </div>
    </div>
  )
}
