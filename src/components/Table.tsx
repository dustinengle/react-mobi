
export interface Column {
  label: string
  name: string
}

export interface TableProps {
  cols: Array<Column>
  rows: Array<Record<string, any>>
}

export default function Table({cols, rows, ...props}: TableProps) {
  return (
    <table {...props} className='table'>
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
    </table>
  )
}
