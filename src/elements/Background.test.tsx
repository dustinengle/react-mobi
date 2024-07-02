
import { render, screen } from '@testing-library/react'

import Background from '@/elements/Background'

it('renders with text', () => {
  render(<Background>TEST</Background>)
  expect(screen.getByText('TEST')).toBeInTheDocument()
})

it('renders with danger context', () => {
  render(<Background context='danger'>TEST</Background>)
  expect(screen.getByText('TEST')).toHaveClass('background')
  expect(screen.getByText('TEST')).toHaveClass('background-danger')
})

it('renders with info (default) context', () => {
  render(<Background>TEST</Background>)
  expect(screen.getByText('TEST')).toHaveClass('background')
  expect(screen.getByText('TEST')).toHaveClass('background-info')
})

it('renders with success context', () => {
  render(<Background context='success'>TEST</Background>)
  expect(screen.getByText('TEST')).toHaveClass('background')
  expect(screen.getByText('TEST')).toHaveClass('background-success')
})

it('renders with warning context', () => {
  render(<Background context='warning'>TEST</Background>)
  expect(screen.getByText('TEST')).toHaveClass('background')
  expect(screen.getByText('TEST')).toHaveClass('background-warning')
})
