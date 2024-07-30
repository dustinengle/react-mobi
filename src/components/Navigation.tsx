
import { ReactNode } from 'react'

import { Flex } from '../layouts/Flex'
import { Image } from '../elements/Image'

export interface NavigationProps {
  children: ReactNode
  logo: string
}

export function Navigation({children, logo, ...props}: NavigationProps) {
  return (
    <div {...props}
      aria-label='Main'
      className='navigation'
      role='navigation'>
      <Flex between row>
        <Flex row>
          <a href='/'>
            <Image alt='Logo' src={logo} />
          </a>
        </Flex>
        <Flex between full row>
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
