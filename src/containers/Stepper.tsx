
import { ReactElement, ReactNode, useState } from 'react'

import Button from '@/elements/Button'
import Flex from '@/layouts/Flex'

export interface StepperProps {
  children: ReactElement<StepperItemProps>[]
  finish: () => void
  finishLabel?: string
  nextLabel?: string
  prevLabel?: string
}

export function Stepper({
    children,
    finish,
    finishLabel = 'Finish',
    nextLabel = 'Next',
    prevLabel = 'Previous',
    ...props
  }: StepperProps) {
  const [index, setIndex] = useState<number>(0)

  function handleCallback(go: number) {
    setIndex(index + go)
  }

  function handleFinish() {
    finish()
  }

  const activeChild = children[index]

  const steps: Array<ReactNode> = []
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    steps.push(
      <div className='stepper-step' key={i}>
        <Flex align='center' gap='1rem' justify='center' row>
          <Flex align='center' gap={0} justify='center' row>
            <div className={`stepper-step-count ${index >= i ? 'active' : ''}`}>
              <Flex align='center' justify='center'>
                {i + 1}
              </Flex>
            </div>
            {child.props.title && <div className='stepper-step-title'>{child.props.title}</div>}
          </Flex>
        </Flex>
      </div>
    )

    if (i < children.length - 1) {
      steps.push(<div className='stepper-step-separator' key={i + 10} />)
    }
  }

  const next: ReactNode = index < children.length - 1
    ? <Button
        callback={() => {
          if (activeChild.props.callback) {
            handleCallback(activeChild.props.callback() ? 1 : 0)
          } else {
            handleCallback(1)
          }
        }}
        label={activeChild.props.callbackLabel || nextLabel}
        role='secondary' />
    : <Button
        callback={handleFinish}
        label={finishLabel}
        role='primary' />
  const prev: ReactNode = index > 0
    ? <Button
        callback={() => handleCallback(-1)}
        label={prevLabel} />
    : <div />

  return (
    <div {...props} className='stepper'>
      <div className='stepper-header'>
        <Flex align='center' justify='evenly' row>
          {steps}
        </Flex>
      </div>
      <div className='stepper-body'>
        {activeChild}
      </div>
      <div className='stepper-footer'>
        <Flex align='center' justify='between' row>
          {prev}
          {next}
        </Flex>
      </div>
    </div>
  )
}

export interface StepperItemProps {
  callback?: () => boolean
  callbackLabel?: string
  children: ReactNode
  title?: string
}

export function StepperItem({
    children,
    callback,
    callbackLabel = 'Continue',
    title,
    ...props
  }: StepperItemProps) {
  return (
    <div {...props} className='stepper-item'>
      {children}
    </div>
  )
}
