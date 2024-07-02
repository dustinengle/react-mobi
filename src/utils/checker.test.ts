
import { isBoolean, isNumber, isString } from './checker'

it('checks for booleans', () => {
  expect(isBoolean(1)).toEqual(false)
  expect(isBoolean('a')).toEqual(false)
  expect(isBoolean(false)).toEqual(true)
})

it('checks for numbers', () => {
  expect(isNumber(true)).toEqual(false)
  expect(isNumber('3')).toEqual(false)
  expect(isNumber(1)).toEqual(true)
})

it('checks for strings', () => {
  expect(isString(1)).toEqual(false)
  expect(isString(true)).toEqual(false)
  expect(isString('a')).toEqual(true)
})
