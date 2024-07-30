
import { Flex } from '../layouts/Flex'
import { Icon, Icons } from '../elements/Icon'
import { Option, Select } from '../elements'

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

export function Pagination({
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

  function handlePage(_: string, value: string) {
    pageHandler(Number(value))
  }

  function handlePrev() {
    if (page > 0) pageHandler(page - 1)
  }

  function handleSize(_: string, value: string) {
    if (sizeHandler) sizeHandler(Number(value))
  }

  return (
    <div {...props} className='pagination'>
      <Flex between row>
        <div className='prev' onClick={handlePrev}>
          <Icon name={Icons.prev} sm />
        </div>
        <div className='label'>
          {pageLabel}:
        </div>
        <div className='pages'>
          <Select handler={handlePage} name='page' value={`${page}`}>
            {pages.map(n => (<Option key={n} value={`${n}`}>{n + 1}</Option>))}
          </Select>
        </div>
        <div className='next' onClick={handleNext}>
          <Icon name={Icons.next} sm />
        </div>
        <div className='label'>
          {sizeLabel}:
        </div>
        <div className='sizes'>
          <Select handler={handleSize} name='size' value={`${size}`}>
            {sizes.map(n => (<Option key={n} value={`${n}`}>{n}</Option>))}
          </Select>
        </div>
      </Flex>
    </div>
  )
}
