
import { Context } from '@/commons/types'
import { ReactNode } from 'react'

import Flex from '@/layouts/Flex'
import Icon from '@/elements/Icon'

export interface NotificationProps {
  children: ReactNode
  context: Context
}

export default function Notification({children, context, ...props}: NotificationProps) {
  const classes = `notification notification-${context}`

  return (
    <div {...props} className={classes}>
      <Flex align='center' row>
        <Icon name={context} /> {children}
      </Flex>
    </div>
  )
}
