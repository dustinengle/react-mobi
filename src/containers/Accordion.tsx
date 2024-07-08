
import { Icons } from '@/commons/types'
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
  iconClose?: Icons
  iconOpen?: Icons
  title: string
}

export function AccordionItem({
    children,
    iconClose = 'caret-down',
    iconOpen = 'caret-up',
    title,
    ...props
  }: AccordionItemProps) {
  const [open, setOpen] = useState<boolean>(false)

  function handleClick() {
    setOpen(!open)
  }

  const classes = `accordion-item accordion-item-${open ? 'open' : 'close'}`

  return (
    <div {...props}
      aria-expanded={open}
      className={classes}>
      <div className='accordion-item-title'>
        <Flex align='center' justify='between' row>
          <div>{title}</div>
          <div onClick={handleClick} role='button'>
            <Icon name={open ? iconOpen : iconClose} size='sm' />
          </div>
        </Flex>
      </div>
      <div className='accordion-item-body'>{children}</div>
    </div>
  )
}
