
export default function classNames(obj: Record<string, number | string>) {
  const classes: Array<string> = []

  for (const [key, value] of Object.entries(obj)) {
    classes.push(`${key}-${value}`)
  }

  return classes.join(' ')
}
