
export class Formatter {
  static _currency: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  })
  static _percentage: Intl.NumberFormat = new Intl.NumberFormat('en', {
    maximumFractionDigits: 4,
    minimumFractionDigits: 4,
    style: 'percent',
  })

  static currency(n: number): string {
    return this._currency.format(n)
  }

  static percentage(n: number): string {
    return this._percentage.format(n)
  }
}

export class ShortFormatter {
  static _currency: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    style: 'currency',
  })
  static _percentage: Intl.NumberFormat = new Intl.NumberFormat('en', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    style: 'percent',
  })

  static currency(n: number): string {
    return this._currency.format(n)
  }

  static percentage(n: number): string {
    return this._percentage.format(n)
  }
}
