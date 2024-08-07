
export interface Amount {
  max: number
  min?: number
  payment?: number
  percentage?: number
}

export interface APR {
  breakdowns: Array<Breakdown>
  formula: string
  max: number
  min: number
  subTitle: string
  summary: string
  title: string
}

export interface Breakdown {
  amount: number
  apr: number
  cycles: number
  fees: number
  rewards: number
}

export interface Charge {
  amount: number
  max: number
  min: number
}
export interface Dimensions {
  height?: number | string
  width?: number | string
}

export interface Fee {
  amount: number
  max?: number
  min?: number
  rate: number
}

export interface Positions {
  bottom?: number | string
  left?: number | string
  right?: number | string
  top?: number | string
}

export interface Spacings {
  margin?: number | string
  padding?: number | string
}
