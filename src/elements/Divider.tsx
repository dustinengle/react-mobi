
import { Dimensions, Directions, Lines, Spacings } from '../commons'
import { Extractor } from '../utils'

export interface DividerProps extends Dimensions, Directions, Lines, Spacings {
  color?: string
  dots?: boolean
}

export function Divider({color, dots = true, ...props}: DividerProps) {
  const {height, width} = props
  const {margin, padding} = props
  const styles = {
    height,
    margin,
    padding,
    width,
  }

  return (
    <div
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
