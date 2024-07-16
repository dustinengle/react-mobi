
import { isNumber, isString } from '../utils/checker'

export function validateMax(max: number, value: number | string): boolean {
  if (isNumber(value) && (value as number) <= max) return true
  if (isString(value) && (value as string).length <= max) return true
  return false
}

export function validateMin(min: number, value: number | string): boolean {
  if (isNumber(value) && (value as number) >= min) return true
  if (isString(value) && (value as string).length >= min) return true
  return false
}

export function validateRegEx(regex: RegExp, value: number | string): boolean {
  return regex.test(`${value}`)
}
