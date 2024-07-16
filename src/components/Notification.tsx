
import { Context } from '../commons/types'
import { ReactNode } from 'react'

import Flex from '../layouts/Flex'
import Icon from '../elements/Icon'

export interface NotificationProps {
  callback?: () => void
  children: ReactNode
  context: Context
}

export default function Notification({children, callback, context, ...props}: NotificationProps) {
  let classes = `notification notification-${context}`
  if (callback) classes += ' notification-closable'

  return (
    <div {...props}
      className={classes}
      role='alert'>
      {callback &&
        <div
          aria-label='Close'
          className='notification-close'
          onClick={callback}>
          <Icon name='close' size='sm' />
        </div>
      }
      <Flex align='center' row>
        <Icon name={context} /> {children}
      </Flex>
    </div>
  )
}
