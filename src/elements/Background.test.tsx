
import { render, screen } from '@testing-library/react'

import { Background } from '../elements/Background'

it('renders with text', () => {
  render(<Background>TEST</Background>)
  expect(screen.getByText('TEST')).toBeInTheDocument()
})

it('renders with primary role', () => {
  render(<Background primary>TEST</Background>)
  expect(screen.getByText('TEST')).toHaveClass('background')
  expect(screen.getByText('TEST')).toHaveClass('primary')
})

it('renders with secondary role', () => {
  render(<Background secondary>TEST</Background>)
  expect(screen.getByText('TEST')).toHaveClass('background')
  expect(screen.getByText('TEST')).toHaveClass('secondary')
})

it('renders with tertiary role', () => {
  render(<Background tertiary>TEST</Background>)
  expect(screen.getByText('TEST')).toHaveClass('background')
  expect(screen.getByText('TEST')).toHaveClass('tertiary')
})
