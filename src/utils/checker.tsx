
export function isBoolean(x: any): boolean {
  return typeof x === 'boolean'
}

export function isNumber(x: any): boolean {
  return typeof x === 'number' || Number.isInteger(x) || !isNaN(x)
}

export function isString(x: any): boolean {
  return typeof x === 'string' || x instanceof String
}
