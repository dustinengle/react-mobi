
import { ReactNode } from 'react'

export interface ListProps {
  children: ReactNode
  role?: 'ordered' | 'unordered'
}

export interface ListItemProps {
  children: ReactNode
}

export function List({children, role = 'unordered', ...props}: ListProps) {
  switch (role) {
    case 'ordered':
      return (<ol {...props} role='list'>{children}</ol>)
    case 'unordered':
    default:
      return (<ul {...props} role='list'>{children}</ul>)
  }
}

export function ListItem({children, ...props}: ListItemProps) {
  return (
    <li {...props} role='listitem'>
      {children}
    </li>
  )
}
