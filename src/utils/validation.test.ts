
import { validateMax, validateMin, validateRegEx } from './validation'

it('validates max', () => {
  expect(validateMax(3, 1)).toEqual(true)
  expect(validateMax(3, 5)).toEqual(false)
  expect(validateMax(3, 'ab')).toEqual(true)
  expect(validateMax(3, 'abcd')).toEqual(false)
})

it('validates min', () => {
  expect(validateMin(3, 1)).toEqual(false)
  expect(validateMin(3, 5)).toEqual(true)
  expect(validateMin(3, 'ab')).toEqual(false)
  expect(validateMin(3, 'abcd')).toEqual(true)
})

it('validates by regex', () => {
  expect(validateRegEx(new RegExp(/^[0-9]{3}$/), 123)).toEqual(true)
  expect(validateRegEx(new RegExp(/^[0-9]{5}$/), 123)).toEqual(false)
  expect(validateRegEx(new RegExp(/^[0-9a-cA-B]+$/), '1aB2cA')).toEqual(true)
  expect(validateRegEx(new RegExp(/^[0-9a-cA-B]+$/), '3fI8')).toEqual(false)
  expect(validateRegEx(new RegExp(/^[0-9a-cA-B]+$/), '')).toEqual(false)
})
