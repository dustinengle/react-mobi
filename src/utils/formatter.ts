
export class Formatter {
  static currency(n: number): string {
    return new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
    }).format(n)
  }

  static number(n: number): string {
    return new Intl.NumberFormat('en-US', {
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(n)
  }

  static percentage(n: number, digits: number = 4): string {
    return new Intl.NumberFormat('en', {
      maximumFractionDigits: digits,
      minimumFractionDigits: digits,
      style: 'percent',
    }).format(n)
  }
}
