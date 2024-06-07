
import classNames from '@/utils/classNames'

import { Role } from '@/commons/types'

export interface ButtonProps {
  callback: (...args: any[]) => any
  label: string
  role?: Role | 'default'
}

export default function Button({ callback, label, role = 'default' }: ButtonProps) {
  const classes = classNames({
    button: role,
  })

  return (
    <button className={`button ${classes}`} onClick={callback}>
      {label}
    </button>
  )
}
