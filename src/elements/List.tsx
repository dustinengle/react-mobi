
import { Arrangements } from '../commons'
import { ReactNode } from 'react'

export interface ListProps extends Arrangements {
  children: ReactNode
}

export interface ListItemProps {
  children: ReactNode
}

export function List({children, ...props}: ListProps) {
  if (props.ordered) return (<ol {...props} role='list'>{children}</ol>)
  else return (<ul {...props} role='list'>{children}</ul>)
}

export function ListItem({children, ...props}: ListItemProps) {
  return (
    <li {...props} role='listitem'>
      {children}
    </li>
  )
}
