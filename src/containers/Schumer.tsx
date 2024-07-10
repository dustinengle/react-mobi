
import { ReactElement, ReactNode } from 'react'

import Highlight from '@/elements/Highlight'
import Math from '@/elements/Math'

export interface ChargeItem {
  amount: number
  max?: number
  min?: number
  rate: number
}

export interface ChargeItemDescriptions {
  subTitle: string
  subTitleItems?: Array<string>
  template: string
  title: string
}

export const ChargeItemDescriptionsDefault: ChargeItemDescriptions = {
  subTitle: 'Transaction Charges',
  subTitleItems: ['Cash Advance Charge'],
  template: '[b:{rate}] for each [b:{amount}] of Mobiloans Cash advanced, [b:for draws {min:over} {max:up to}]',
  title: 'Charges',
}

export interface ChargesProps {
  chargeItems: Array<ChargeItem>
  chargeItemDescriptions?: ChargeItemDescriptions
}

export function Charges({chargeItems, chargeItemDescriptions = ChargeItemDescriptionsDefault}: ChargesProps) {
  return (
    <>
      <tr>
        <td colSpan={6}>
          Charges
        </td>
      </tr>
      <tr>
        <td className='header' colSpan={3}>
          Minimum Charge
          <ul>
            <li>Fixed Finance Charge</li>
          </ul>
        </td>
        <td colSpan={3}>
          Each Billing Cycle you will be charged a Fixed Finance Charge of:
          <table>
            <thead>
              <tr>
                <th style={{width: '50%'}}>
                  If the principal balance as of the last day of your prior Billing Cycle, excluding the amount of new Mobiloans Cash advances made during that Billing Cycle was
                </th>
                <th style={{width: '50%'}}>
                  …your Fixed Finance Charge will be:
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  $0-$10.00
                </td>
                <td>
                  No charge
                </td>
              </tr>
              <tr>
                <td>
                  $10.01-$100
                </td>
                <td>
                  $15
                </td>
              </tr>
              <tr>
                <td>
                  $100.01-$200
                </td>
                <td>
                  $30
                </td>
              </tr>
              <tr>
                <td>
                  $200.01-$300
                </td>
                <td>
                  $35
                </td>
              </tr>
              <tr>
                <td>
                  $300.01-$400
                </td>
                <td>
                  $45
                </td>
              </tr>
              <tr>
                <td>
                  $400.01-$500
                </td>
                <td>
                  $75
                </td>
              </tr>
              <tr>
                <td>
                  $500.01-$600
                </td>
                <td>
                  $85
                </td>
              </tr>
              <tr>
                <td>
                  $600.01-$700
                </td>
                <td>
                  $95
                </td>
              </tr>
              <tr>
                <td>
                  $700.01-$900
                </td>
                <td>
                  $105
                </td>
              </tr>
              <tr>
                <td>
                  $900.01-$1,000
                </td>
                <td>
                  $115
                </td>
              </tr>
              <tr>
                <td>
                  $1,000.01-$1,400
                </td>
                <td>
                  $135
                </td>
              </tr>
              <tr>
                <td>
                  $1,400.01-$2,500
                </td>
                <td>
                  $150
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
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

function renderer(template: string, data: Record<string, number>): ReactNode {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  })
  const rendered: Array<ReactNode> = []

  let i: number = 0
  let text: string = ''
  let token: string = ''

  function getValue(value: string): string {
    let text = ''

    const [key, prefix] = value.split(':')
    if (data[key]) {
      if (prefix) text += `${prefix} `
      text += formatter.format(data[key])
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

export function Fees({feeItems, feeItemDescriptions = FeeItemDescriptionsDefault}: FeesProps) {
  return (
    <>
      <tr>
        <td colSpan={6}>
          {feeItemDescriptions.title}
        </td>
      </tr>
      <tr>
        <td className='header' colSpan={3}>
          {feeItemDescriptions.subTitle}
          <ul>
            {feeItemDescriptions.subTitleItems?.map((subTitle, index) => (
              <li key={`fee-subtitle-${index}`}>{subTitle}</li>
            ))}
          </ul>
        </td>
        <td colSpan={3}>
          {feeItems.map((item, index) => (
            <div className='line' key={`fee-${index}`}>
              {renderer(feeItemDescriptions.template, {...item})}
            </div>
          ))}
        </td>
      </tr>
    </>
  )
}

export interface APR {
  formula: ReactElement<Math>
  rate: string
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

export const ItemDescriptionDefaults: APRItemDescription = {
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
    aprItemDescriptions = ItemDescriptionDefaults,
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
            <td colSpan={1} rowSpan={2}>
              <b>{apr.title}</b><br />
              {apr.subTitle}
            </td>
            <td colSpan={5}>
              <div className='rate'>
                <Highlight>{apr.rate}</Highlight>
              </div>
              <div>
                <b>{apr.summary}</b>
              </div>
              <div>
                {apr.formula}
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={5}>
              <table>
                <thead>
                  <tr>
                    <th>
                      <b>{aprItemDescriptions.amount}</b><br />
                      ({aprItemDescriptions.amountExtra})
                    </th>
                    <th>
                      <b>{aprItemDescriptions.cycles}</b><br />
                      ({aprItemDescriptions.cyclesExtra})
                    </th>
                    <th>
                      <b>{aprItemDescriptions.fees}</b><br />
                      ({aprItemDescriptions.feesExtra})
                    </th>
                    <th>
                      <b>{aprItemDescriptions.apr}</b><br />
                      ({aprItemDescriptions.aprExtra})
                    </th>
                    <th>
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
                    <tr key={`apr-${index}`}>
                      <td>${item.amount.toFixed(2)}</td>
                      <td>${item.cycles.toFixed(2)}</td>
                      <td>${item.fees.toFixed(2)}</td>
                      <td>{item.apr.toFixed(2)}%</td>
                      <td>{item.rewards.toFixed(2)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
          <Charges chargeItemDescriptions={chargeItemDescriptions} chargeItems={chargeItems} />
          <Fees feeItemDescriptions={feeItemDescriptions} feeItems={feeItems} />
        </tbody>
      </table>
    </div>
  )
}
