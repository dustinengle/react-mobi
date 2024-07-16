
import { Role } from '../commons/types'

export interface ButtonProps {
  callback: (...args: any[]) => any
  label: string
  role?: Role | 'default'
}

export default function Button({ callback, label, role = 'default' }: ButtonProps) {
  const classes = `button button-${role}`

  return (
    <button
      className={classes}
      onClick={callback}
      role='button'>
      {label}
    </button>
  )
}
