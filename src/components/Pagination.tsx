
import { ChangeEvent } from 'react'

import Flex from '@/layouts/Flex'
import Icon from '@/elements/Icon'

export interface PaginationProps {
  page: number
  pageHandler: (page: number) => void
  pageLabel?: string
  size?: number
  sizes?: Array<number>
  sizeHandler?: (size: number) => void
  sizeLabel?: string
  total: number
}

export default function Pagination({
    page,
    pageHandler,
    pageLabel = 'Page',
    size = 10,
    sizes = [10, 25, 50],
    sizeHandler,
    sizeLabel = 'Size',
    total,
    ...props
  }: PaginationProps) {
  const pages: Array<number> = []
  for (let i = 0; i < Math.ceil(total / size); i++) {
    pages.push(i)
  }

  function handleNext() {
    if (page < pages[pages.length - 1]) pageHandler(page + 1)
  }

  function handlePage(ev: ChangeEvent<HTMLSelectElement>) {
    pageHandler(Number(ev.target.value))
  }

  function handlePrev() {
    if (page > 0) pageHandler(page - 1)
  }

  function handleSize(ev: ChangeEvent<HTMLSelectElement>) {
    if (sizeHandler) sizeHandler(Number(ev.target.value))
  }

  return (
    <div {...props} className='pagination'>
      <Flex align='center' justify='between' row>
        <div className='prev' onClick={handlePrev}>
          <Icon name='prev' size='sm' />
        </div>
        <div className='label'>
          {pageLabel}:
        </div>
        <select className='pages' onChange={handlePage} value={page}>
          {pages.map(n => (<option key={n} value={n}>{n + 1}</option>))}
        </select>
        <div className='next' onClick={handleNext}>
          <Icon name='next' size='sm' />
        </div>
        <div className='label'>
          {sizeLabel}:
        </div>
        <select className='sizes' onChange={handleSize}>
          {sizes.map(n => (<option key={n} value={n}>{n}</option>))}
        </select>
      </Flex>
    </div>
  )
}
