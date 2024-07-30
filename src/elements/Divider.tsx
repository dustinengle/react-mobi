
import { Directions, Lines } from '../commons'
import { Extractor } from '../utils'

export interface DividerProps extends Directions, Lines {
  dots?: boolean
}

export function Divider({dots = true, ...props}: DividerProps) {
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
      ].join(' ')} />
      {dots && <div className='divider-dot' />}
    </div>
  )
}
