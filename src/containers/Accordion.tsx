
import { ReactNode, useState } from 'react'

import Flex from '@/layouts/Flex'
import Icon from '@/elements/Icon'

export interface AccordionProps {
  children: ReactNode
}

export function Accordion({children, ...props}: AccordionProps) {
  return (
    <div {...props} className='accordion'>
      {children}
    </div>
  )
}

export interface AccordionItemProps {
  children: ReactNode
  title: string
}

export function AccordionItem({children, title, ...props}: AccordionItemProps) {
  const [open, setOpen] = useState<boolean>(false)

  function handleClick() {
    setOpen(!open)
  }

  const classes = `accordion-item accordion-item-${open ? 'open' : 'close'}`

  return (
    <div {...props} className={classes}>
      <div className='accordion-item-title' onClick={handleClick}>
        <Flex align='center' justify='between' row>
          <div>{title}</div>
          <Icon name={open ? 'caret-up' : 'caret-down'} size='sm' />
        </Flex>
      </div>
      <div className='accordion-item-body'>{children}</div>
    </div>
  )
}
