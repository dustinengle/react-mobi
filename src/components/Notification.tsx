
import { Contexts } from '../commons'
import { Extractor } from '../utils'
import { ReactNode } from 'react'

import { Flex } from '../layouts/Flex'
import { Icon, Icons } from '../elements/Icon'

export interface NotificationProps extends Contexts {
  callback?: () => void
  children: ReactNode
}

export function Notification({children, callback, ...props}: NotificationProps) {
  const classes = [
    'notification',
    callback ? 'notification-closable' : '',
    ...Extractor.contexts(props),
  ].join(' ')

  const context = Extractor.contexts(props)[0]

  return (
    <div
      className={classes}
      role='alert'>
      {callback &&
        <div
          aria-label='Close'
          className='notification-close'
          onClick={callback}>
          <Icon name={Icons.close} sm />
        </div>
      }
      <Flex row>
        <Icon name={context as Icons} /> {children}
      </Flex>
    </div>
  )
}
