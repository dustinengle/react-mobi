
import { ReactNode, useState } from 'react'

import Flex from '@/layouts/Flex'
import Icon from '@/elements/Icon'

export interface CarouselProps {
  children: Array<ReactNode>
}

export function Carousel({children, ...props}: CarouselProps) {
  const [index, setIndex] = useState<number>(0)

  function handleNext() {
    setIndex(index >= children.length - 1 ? 0 : index + 1)
  }

  function handlePrev() {
    setIndex(index === 0 ? children.length - 1 : index - 1)
  }

  const activeChild = children[index]

  return (
    <div {...props} className='carousel'>
      <Flex align='center'>
        <Flex align='center' justify='between' row>
          <div
            className='carousel-nav'
            onClick={handlePrev}
            role='button'>
            <Icon name='prev' />
          </div>
          <Flex
            aria-controls='carousel-controls'
            align='center'
            justify='center'>
            {activeChild}
          </Flex>
          <div
            className='carousel-nav'
            onClick={handleNext}
            role='button'>
            <Icon name='next' />
          </div>
        </Flex>
        <div id='carousel-controls' className='carousel-discs'>
          <Flex align='center' justify='center' row>
            {children.map((_, idx) => (
              <div
                className={`carousel-disc ${index === idx ? 'active' : ''}`}
                key={idx}
                onClick={() => setIndex(idx)}
                role='button' />
            ))}
          </Flex>
        </div>
      </Flex>
    </div>
  )
}

export interface CarouselItemProps {
  children: ReactNode
}

export function CarouselItem({children, ...props}: CarouselItemProps) {
  return (
    <div {...props} className='carousel-item'>
      {children}
    </div>
  )
}
