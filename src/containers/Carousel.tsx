
import { ReactElement, ReactNode, useEffect, useState } from 'react'

import { Flex } from '../layouts/Flex'
import { Icon, Icons } from '../elements/Icon'

export interface CarouselProps {
  autoplay?: boolean
  children: Array<ReactElement<CarouselItemProps>>
  interval?: number
}

export function Carousel({children, autoplay = true, interval = 5000, ...props}: CarouselProps) {
  const [index, setIndex] = useState<number>(0)
  const total = children.length - 1

  function handleNext() {
    setIndex(index >= total ? 0 : index + 1)
  }

  function handlePrev() {
    setIndex(index === 0 ? total : index - 1)
  }

  useEffect(() => {
    if (autoplay) {
      let timer = setTimeout(() => {
        setIndex(index >= total ? 0 : index + 1)
      }, interval)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [index])

  return (
    <div {...props} className='carousel'>
      <Flex gap='1rem'>
        <Flex between row>
          <div
            className='carousel-nav'
            onClick={handlePrev}
            role='link'>
            <Icon name={Icons.prev} />
          </div>
          <Flex aria-controls='carousel-controls'>
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
            <Icon name={Icons.next} />
          </div>
        </Flex>
        <div id='carousel-controls' className='carousel-discs'>
          <Flex row>
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
