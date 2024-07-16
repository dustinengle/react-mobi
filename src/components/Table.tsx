
import { ReactNode } from 'react'

export interface Column {
  label: string
  name: string
}

export interface TableProps {
  card?: boolean
  cols: Array<Column>
  header?: 'column' | 'none' | 'row'
  rows: Array<Record<string, any>>
  footer?: ReactNode
}

export function Table({card, cols, header = 'row', rows, footer, ...props}: TableProps) {
  const classNames = ['table']
  if (card) classNames.push('table-card')
  if (header && header !== 'none') classNames.push(`header-${header}`)

  const classes = classNames.join(' ')

  return (
    <table {...props}
      aria-colcount={cols.length}
      aria-rowcount={rows.length}
      className={classes}
      role='table'>
      {header === 'row' &&
        <thead>
          <tr
            aria-label='Row Header'
            role='row'>
            {cols.map(col => (
              <th
                key={col.name}
                role='columnheader'
                scope='col'>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
      }
      <tbody>
        {rows.map((row, index) => (
          <tr
            aria-label={`Row ${index}`}
            aria-rowindex={index}
            key={index}
            role='row'>
            {cols.map((col, colIndex) => {
              if (header === 'column' && colIndex === 0) {
                return (
                  <th
                    aria-colindex={colIndex}
                    key={col.name}
                    role='rowheader'
                    scope='row'>
                    {row[col.name]}
                  </th>)
              }
              return (
                <td
                  aria-colindex={colIndex}
                  key={col.name}
                  role='cell'>
                  {row[col.name]}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr
            aria-label='Row Footer'
            role='row'>
            <td
              aria-colspan={cols.length}
              colSpan={cols.length}
              role='cell'>
              {footer}
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  )
}
