
export interface DividerProps {
  direction?: 'horizontal' | 'vertical'
  dots?: boolean
  line?: 'dashed' | 'solid'
}

export function Divider({direction = 'horizontal', dots = true, line = 'solid', ...props}: DividerProps) {
  return (
    <div {...props}
      className={`divider divider-${direction}`}
      role='separator'>
      {dots && <div className='divider-dot' />}
      <div className={`divider-line divider-${line}`} />
      {dots && <div className='divider-dot' />}
    </div>
  )
}
