
import { ReactElement, ReactNode, useState } from 'react'

import Flex from '@/layouts/Flex'
import Icon from '@/elements/Icon'

export interface CarouselProps {
  children: Array<ReactElement<CarouselItemProps>>
}

export function Carousel({children, ...props}: CarouselProps) {
  const [index, setIndex] = useState<number>(0)
  const total = children.length - 1

  function handleNext() {
    setIndex(index >= total ? 0 : index + 1)
  }

  function handlePrev() {
    setIndex(index === 0 ? total : index - 1)
  }

  return (
    <div {...props} className='carousel'>
      <Flex align='center'>
        <Flex align='center' justify='between' row>
          <div
            className='carousel-nav'
            onClick={handlePrev}
            role='link'>
            <Icon name='prev' />
          </div>
          <Flex
            aria-controls='carousel-controls'
            align='center'
            justify='center'>
            <div className='carousel-container'>
              {children.map((child, idx) => {
                return (
                  <CarouselItem
                    active={index}
                    index={idx}
                    key={idx}
                    next={index >= total ? 0 : index + 1}
                    prev={index <= 0 ? total : index - 1}>
                    {child.props.children}
                  </CarouselItem>
                )
              })}
            </div>
          </Flex>
          <div
            className='carousel-nav'
            onClick={handleNext}
            role='link'>
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
                role='link' />
            ))}
          </Flex>
        </div>
      </Flex>
    </div>
  )
}

export interface CarouselItemProps {
  active?: number
  children: ReactNode
  index?: number
  next?: number
  prev?: number
}

export function CarouselItem({
    children,
    active = 0,
    index = 0,
    next = 0,
    prev = 0,
    ...props
  }: CarouselItemProps) {
  let classes = 'carousel-item'
  if (index === active) classes += ' active'
  if (index === next) classes += ' next'
  if (index === prev) classes += ' prev'

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
