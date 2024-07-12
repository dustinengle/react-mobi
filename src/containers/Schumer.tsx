
import { ReactElement, ReactNode } from 'react'

import Highlight from '@/elements/Highlight'
import Math from '@/elements/Math'

const currency: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
})
const percentage: Intl.NumberFormat = new Intl.NumberFormat('en', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  style: 'percent',
})

function renderer(template: string, data: Record<string, number>): Array<ReactNode> {
  const rendered: Array<ReactNode> = []

  let i: number = 0
  let text: string = ''
  let token: string = ''

  function getValue(value: string): string {
    let text = ''

    const [key, prefix] = value.split(':')
    if (data[key]) {
      if (prefix) text += `${prefix} `
      text += currency.format(data[key])
    }

    return text
  }

  function renderText() {
    if (text.length) {
      rendered.push(text)
    }
    text = ''
  }

  function renderToken() {
    switch (token) {
      case 'b':
        rendered.push(<b>{text}</b>)
        break
      case 'i':
        rendered.push(<i>{text}</i>)
        break
      case 'u':
        rendered.push(<u>{text}</u>)
        break
    }

    text = ''
    token = ''
  }

  let char: string = ''
  while (i < template.length) {
    char = template[i]

    if (char === '[') {
      renderText()

      i++
      token = template[i]
      i++
    } else if (char === ']') {
      renderToken()
    } else if (char === '{') {
      let v = ''
      i++
      while (template[i] !== '}') {
        v += template[i]
        i++
      }
      text += getValue(v)
    } else {
      text += char
    }

    i++
  }

  return rendered
}

export interface ChargeItem {
  charge: number
  max: number
  min: number
}

export interface ChargeItemDescriptions {
  balance: string
  charge: string
  noCharge: string
  subTitle: string
  subTitleItems?: Array<string>
  summary: string
  title: string
}

export const ChargeItemDescriptionsDefault: ChargeItemDescriptions = {
  balance: 'If the principal balance as of the last day of your prior Billing Cycle, excluding the amount of new Mobiloans Cash advances made during that Billing Cycle was',
  charge: '…your Fixed Finance Charge will be:',
  noCharge: 'No charge',
  subTitle: 'Minimum Charge',
  subTitleItems: ['Fixed Finance Charge'],
  summary: 'Each Billing Cycle you will be charged a Fixed Finance Charge of:',
  title: 'Charges',
}

export interface ChargesProps {
  chargeItems: Array<ChargeItem>
  chargeItemDescriptions?: ChargeItemDescriptions
}

export function Charges({
    chargeItems,
    chargeItemDescriptions = ChargeItemDescriptionsDefault,
    ...props
  }: ChargesProps) {
  return (
    <div {...props} className='schumer'>
      <table
        aria-colcount={2}
        aria-rowcount={2}
        role='table'>
        <tbody>
          <tr role='row'>
            <td colSpan={2} role='cell'>
              {chargeItemDescriptions.title}
            </td>
          </tr>
          <tr role='row'>
            <th className='half header' role='rowheader' scope='row'>
              {chargeItemDescriptions.subTitle}
              <ul>
                {chargeItemDescriptions.subTitleItems?.map((subTitle, index) => (
                  <li key={`charge-subtitle-${index}`}>{subTitle}</li>
                ))}
              </ul>
            </th>
            <td role='cell'>
              {chargeItemDescriptions.summary}
              <table
                aria-colcount={2}
                aria-rowcount={chargeItems.length}
                role='table'>
                <thead>
                  <tr role='row'>
                    <th className='half' role='columnheader' scope='col'>
                      {chargeItemDescriptions.balance}
                    </th>
                    <th className='half' role='columnheader' scope='col'>
                      {chargeItemDescriptions.charge}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {chargeItems.map((item, index) => (
                    <tr key={`charge-${index}`} role='row'>
                      <td role='cell'>{currency.format(item.min)} - {currency.format(item.max)}</td>
                      <td role='cell'>{!item.charge ? chargeItemDescriptions.noCharge : currency.format(item.charge)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export interface FeeItem {
  amount: number
  max?: number
  min?: number
  rate: number
}

export interface FeeItemDescriptions {
  subTitle: string
  subTitleItems?: Array<string>
  template: string
  title: string
}

export const FeeItemDescriptionsDefault: FeeItemDescriptions = {
  subTitle: 'Transaction Fees',
  subTitleItems: ['Cash Advance Fee'],
  template: '[b:{rate}] for each [b:{amount}] of Mobiloans Cash advanced, [b:for draws {min:over} {max:up to}]',
  title: 'Fees',
}

export interface FeesProps {
  feeItems: Array<FeeItem>
  feeItemDescriptions?: FeeItemDescriptions
}

export function Fees({
    feeItems,
    feeItemDescriptions = FeeItemDescriptionsDefault,
    ...props
  }: FeesProps) {
  return (
    <div {...props} className='schumer'>
      <table
        aria-colcount={2}
        aria-rowcount={2}
        role='table'>
        <tbody>
          <tr role='row'>
            <td colSpan={2} role='row'>
              {feeItemDescriptions.title}
            </td>
          </tr>
          <tr role='row'>
            <th className='half header' role='rowheader' scope='row'>
              {feeItemDescriptions.subTitle}
              <ul>
                {feeItemDescriptions.subTitleItems?.map((subTitle, index) => (
                  <li key={`fee-subtitle-${index}`}>{subTitle}</li>
                ))}
              </ul>
            </th>
            <td role='cell'>
              {feeItems.map((item, index) => (
                <div className='line' key={`fee-${index}`}>
                  {renderer(feeItemDescriptions.template, {...item}).map((component, idx) => (
                    <span key={`fee-${index}-item-${idx}`}>
                      {component}
                    </span>
                  ))}
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export interface APR {
  formula: ReactElement<Math>
  max: number
  min: number
  subTitle?: string
  summary: string
  title: string
}

export interface APRItem {
  amount: number
  apr: number
  cycles: number
  fees: number
  rewards: number
}

export interface APRItemDescription {
  amount: string
  amountExtra?: string
  apr: string
  aprExtra?: string
  cycles: string
  cyclesExtra?: string
  fees: string
  feesExtra?: string
  rewards: string
  rewardsExtra?: string
  rewardsSummary?: string
}

export const APRItemDescriptionDefaults: APRItemDescription = {
  amount: 'Line of Credit Amount',
  amountExtra: 'with full line drawn',
  apr: 'APR',
  aprExtra: 'No Rewards Discount',
  cycles: 'Number of Billing Cycles',
  cyclesExtra: '1 Billing Cycle = approximately 14 days or 26 per year',
  fees: 'Total Fees',
  feesExtra: 'Cash Advance and Fixed Finance Fees',
  rewards: 'Rewards Level - Diamond APR %',
  rewardsExtra: '65 % reduction in Cash Advance Fees and Fixed Finance Charges',
  rewardsSummary: 'Go to <a href="www.mobiloans.com/rewards">www.mobiloans.com/rewards</a> for more information on how to qualify.',
}

export interface APRsProps {
  apr: APR
  aprItems: Array<APRItem>
  aprItemDescriptions?: APRItemDescription
}

export function APRs({
    apr,
    aprItems,
    aprItemDescriptions = APRItemDescriptionDefaults,
    ...props
  }: APRsProps) {
  return (
    <div {...props} className='schumer'>
      <table
        aria-colcount={2}
        aria-rowcount={2}
        role='table'>
      <tbody>
        <tr role='row'>
          <th className='quarter' colSpan={1} rowSpan={2} role='columnheader' scope='col'>
            <b>{apr.title}</b><br />
            {apr.subTitle}
          </th>
          <td colSpan={5} role='cell'>
            <div className='rate'>
              <Highlight>{percentage.format(apr.min)} - {percentage.format(apr.max)}</Highlight>
            </div>
            <div>
              <b>{apr.summary}</b>
            </div>
            <div>
              {apr.formula}
            </div>
          </td>
        </tr>
        <tr role='row'>
          <td colSpan={5} role='cell'>
            <table
              aria-colcount={5}
              aria-rowcount={aprItems.length}
              role='table'>
              <thead>
                <tr role='row'>
                  <th role='columnheader' scope='col'>
                    <b>{aprItemDescriptions.amount}</b><br />
                    ({aprItemDescriptions.amountExtra})
                  </th>
                  <th role='columnheader' scope='col'>
                    <b>{aprItemDescriptions.cycles}</b><br />
                    ({aprItemDescriptions.cyclesExtra})
                  </th>
                  <th role='columnheader' scope='col'>
                    <b>{aprItemDescriptions.fees}</b><br />
                    ({aprItemDescriptions.feesExtra})
                  </th>
                  <th role='columnheader' scope='col'>
                    <b>{aprItemDescriptions.apr}</b><br />
                    ({aprItemDescriptions.aprExtra})
                  </th>
                  <th role='columnheader' scope='col'>
                    <b>{aprItemDescriptions.rewards}</b><br />
                    ({aprItemDescriptions.rewardsExtra})<br />
                    {aprItemDescriptions.rewardsSummary &&
                      <div dangerouslySetInnerHTML={{__html: aprItemDescriptions.rewardsSummary}} />
                    }
                  </th>
                </tr>
              </thead>
              <tbody>
                {aprItems.map((item, index) => (
                  <tr key={`apr-${index}`} role='row'>
                    <td role='cell'>{currency.format(item.amount)}</td>
                    <td role='cell'>{item.cycles}</td>
                    <td role='cell'>{currency.format(item.fees)}</td>
                    <td role='cell'>{percentage.format(item.apr)}</td>
                    <td role='cell'>{percentage.format(item.rewards)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export interface SchumerProps {
  apr: APR
  aprItems: Array<APRItem>
  aprItemDescriptions?: APRItemDescription
  chargeItems: Array<ChargeItem>
  chargeItemDescriptions?: ChargeItemDescriptions
  feeItems: Array<FeeItem>
  feeItemDescriptions?: FeeItemDescriptions
}

export default function Schumer({
    apr,
    aprItemDescriptions = APRItemDescriptionDefaults,
    aprItems,
    chargeItems,
    chargeItemDescriptions = ChargeItemDescriptionsDefault,
    feeItems,
    feeItemDescriptions = FeeItemDescriptionsDefault,
    ...props
  }: SchumerProps) {
  return (
    <div {...props} className='schumer'>
      <table>
        <tbody>
          <tr>
            <td className='no-padding'>
              <APRs apr={apr} aprItemDescriptions={aprItemDescriptions} aprItems={aprItems} />
            </td>
          </tr>
          <tr>
            <td className='no-padding'>
              <Charges chargeItemDescriptions={chargeItemDescriptions} chargeItems={chargeItems} />
            </td>
          </tr>
          <tr>
            <td className='no-padding'>
              <Fees feeItemDescriptions={feeItemDescriptions} feeItems={feeItems} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
