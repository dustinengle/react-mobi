
import { ReactNode } from 'react'

import Button from '@/elements/Button'
import Flex from '@/layouts/Flex'

export interface ModalProps {
  callback: (yes: boolean) => void
  children: ReactNode
  no?: string
  open: boolean
  yes?: string
}

export default function Modal({children, callback, no, open, yes, ...props}: ModalProps) {
  return (
    <div aria-haspopup='dialog'>
      <div className={`modal modal-${open ? 'open' : 'close'}`} />
      <div {...props}
        aria-modal='true'
        className={`modal-body modal-body-${open ? 'open' : 'close'}`}
        role='dialog'>
        {children}
        <div className='modal-actions'>
          <Flex align='center' justify='evenly' row>
            {yes && <Button callback={() => callback(true)} label={yes} role='primary' />}
            {no && <Button callback={() => callback(false)} label={no} />}
          </Flex>
        </div>
      </div>
    </div>
  )
}
