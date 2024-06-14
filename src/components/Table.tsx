
export interface Column {
  label: string
  name: string
}

export interface TableProps {
  cols: Array<Column>
  rows: Array<Record<string, any>>
  footer?: string //added along with associated code by ABS for optional footer
  context?: string //added along with associated CSS for card styling
}

export default function Table({cols, rows, footer, context, ...props}: TableProps) {
  return (
    <table {...props} className={context && context=='card' ? 'table-card-styled' :'table'}>
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
