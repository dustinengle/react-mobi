
import { ReactNode } from 'react'

export interface Column {
  label: string
  name: string
}

export interface TableProps {
  card?: boolean
  cols: Array<Column>
  rows: Array<Record<string, any>>
  footer?: ReactNode
}

export default function Table({card, cols, rows, footer, ...props}: TableProps) {
  const classNames = ['table']
  if (card) classNames.push('table-card')

  const classes = classNames.join(' ')

  return (
    <table {...props} className={classes}>
      <thead>
        <tr>
          {cols.map(col => (
            <th key={col.name}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {cols.map(col => (
              <td key={col.name}>{row[col.name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr>
            <td colSpan={cols.length}>
              {footer}
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  )
}
