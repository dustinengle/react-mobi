
import { ReactNode } from 'react'

import Flex from '@/layouts/Flex'
import Image from '@/elements/Image'

export interface NavigationProps {
  children: ReactNode
  logo: string
}

export function Navigation({children, logo, ...props}: NavigationProps) {
  return (
    <div {...props} className='navigation'>
      <Flex align='center' full justify='between' row>
        <Flex align='center' full row>
          <Image src={logo} />
        </Flex>
        <Flex align='center' justify='evenly' row>
          {children}
        </Flex>
      </Flex>
    </div>
  )
}

export interface NavigationLinkProps {
  children: ReactNode
  href: string
}

export function NavigationLink({children, href, ...props}: NavigationLinkProps) {
  return (
    <a {...props} className='navigation-link' href={href}>
      {children}
    </a>
  )
}
