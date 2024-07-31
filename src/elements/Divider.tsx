
import { Directions, Lines, Style } from '../commons'
import { Extractor } from '../utils'

export interface DividerProps extends Directions, Lines {
  color?: string
  dots?: boolean
}

export function Divider({color, dots = true, ...props}: DividerProps) {
  const style: Style = {}
  if (color) style.borderColor = color

  return (
    <div {...props}
      className={[
        'divider',
        ...Extractor.directions(props),
      ].join(' ')}
      role='separator'>
      {dots && <div className='divider-dot' />}
      <div className={[
        'divider-line',
        ...Extractor.lines(props),
      ].join(' ')} style={style} />
      {dots && <div className='divider-dot' />}
    </div>
  )
}
