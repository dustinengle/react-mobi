
import { ReactElement, ReactNode, useState } from 'react'

import { Button } from '../elements/Button'
import { Divider } from '../elements/Divider'
import { Flex } from '../layouts/Flex'

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
      <div
        aria-current={i === index ? 'step' : false}
        className='stepper-step'
        key={i}>
        <Flex gap='1rem' row>
          <Flex row>
            <div className={`stepper-step-count ${index >= i ? 'active' : ''}`}>
              <Flex>
                <span aria-label={`Step ${i + 1}`}>
                  {i + 1}
                </span>
              </Flex>
            </div>
            {child.props.title &&
              <div className='stepper-step-title'>{child.props.title}</div>
            }
          </Flex>
        </Flex>
      </div>
    )

    if (i < children.length - 1) {
      steps.push(<Divider key={i + 10} dots={false} dashed />)
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
        secondary />
    : <Button
        callback={handleFinish}
        label={finishLabel}
        primary />
  const prev: ReactNode = index > 0
    ? <Button
        callback={() => handleCallback(-1)}
        label={prevLabel} />
    : <div />

  return (
    <div {...props} className='stepper'>
      <div className='stepper-header'>
        <Flex evenly row>
          {steps}
        </Flex>
      </div>
      <div className='stepper-body'>
        {activeChild}
      </div>
      <div className='stepper-footer'>
        <Flex between row>
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
