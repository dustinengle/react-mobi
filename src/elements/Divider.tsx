
export interface DividerProps {
  direction: 'horizontal' | 'vertical'
  dots?: boolean
}

export default function Divider({ direction, dots = true }: DividerProps) {
  const classes = `divider divider-${direction}`

  return (
    <div className={classes}>
      {dots && <div className='dot' />}
      <div className='line' />
      {dots && <div className='dot' />}
    </div>
  )
}
