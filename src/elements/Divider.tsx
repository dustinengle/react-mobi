
import { Dimensions, Directions, Lines } from '../commons'
import { Extractor } from '../utils'

export interface DividerProps extends Dimensions, Directions, Lines {
  color?: string
  dots?: boolean
}

export function Divider({color, dots = true, ...props}: DividerProps) {
  const {height, width} = props
  const styles = {
    height,
    width,
  }

  return (
    <div {...props}
      className={[
        'divider',
        ...Extractor.directions(props),
      ].join(' ')}
      role='separator'
      style={styles}>
      {dots && <div className='divider-dot' />}
      <div
        className={[
          'divider-line',
          ...Extractor.lines(props),
        ].join(' ')}
        style={{borderColor: color}} />
      {dots && <div className='divider-dot' />}
    </div>
  )
}
