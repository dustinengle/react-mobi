
import { Amount, APR, Charge, Fee } from '../commons'
import { Formatter, Renderer } from '../utils'

import { Highlight } from '../elements/Highlight'
import { Math } from '../elements/Math'

export interface AmountsProps {
  amounts: Array<Amount>
  charges: Array<Charge>
  meta?: AmountsMetaProps
}

export interface AmountsMetaProps {
  amount: string
  charge: string
  title: string
  upTo: string
}

export function AmountsTable({
    amounts,
    charges,
    meta = {
      amount: 'Outstanding Mobiloans Cash statement balance immediately after the most recent Cash draw...',
      charge: 'Percentage or minimum amount of Mobiloans Cash statement balance to be included in the Minimum Payment Amount...',
      title: 'Calculation of Minimum Principal Amount',
      upTo: 'Up to ',
    },
  }: AmountsProps) {
  return (
    <div className='schumer'>
      <table
        aria-colcount={2}
        aria-rowcount={2}
        role='table'>
        <tbody>
          <tr role='row'>
            <th className='half header' role='rowheader' scope='row'>
              {meta.title}
            </th>
            <td role='cell'>
              <table
                aria-colcount={2}
                aria-rowcount={charges.length}
                role='table'>
                <thead>
                  <tr role='row'>
                    <th className='half' role='columnheader' scope='col'>
                      {meta.amount}
                    </th>
                    <th className='half' role='columnheader' scope='col'>
                      {meta.charge}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {amounts.map((amount, index) => (
                    <tr key={`charge-${index}`} role='row'>
                      <td role='cell'>
                        {amount.min ? `${Formatter.currency(amount.min)} - ` : meta.upTo}
                        {Formatter.currency(amount.max)}
                      </td>
                      <td role='cell'>
                        {amount.payment && Formatter.currency(amount.payment)}
                        {amount.percentage && Formatter.percentage(amount.percentage)}
                      </td>
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

export interface APRsProps {
  apr: APR
  meta?: APRsMetaProps
}

export interface APRsMetaProps {
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

export function APRsTable({
    apr,
    meta = {
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
    },
    ...props
  }: APRsProps) {
  return (
    <div className='schumer'>
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
              <Highlight>{Formatter.percentage(apr.min)} - {Formatter.percentage(apr.max)}</Highlight>
            </div>
            <div>
              <b>{apr.summary}</b>
            </div>
            <div>
              <Math formula={apr.formula} />
            </div>
          </td>
        </tr>
        <tr role='row'>
          <td colSpan={5} role='cell'>
            <table
              aria-colcount={5}
              aria-rowcount={apr.breakdowns.length}
              role='table'>
              <thead>
                <tr role='row'>
                  <th role='columnheader' scope='col'>
                    <b>{meta.amount}</b><br />
                    ({meta.amountExtra})
                  </th>
                  <th role='columnheader' scope='col'>
                    <b>{meta.cycles}</b><br />
                    ({meta.cyclesExtra})
                  </th>
                  <th role='columnheader' scope='col'>
                    <b>{meta.fees}</b><br />
                    ({meta.feesExtra})
                  </th>
                  <th role='columnheader' scope='col'>
                    <b>{meta.apr}</b><br />
                    ({meta.aprExtra})
                  </th>
                  <th role='columnheader' scope='col'>
                    <b>{meta.rewards}</b><br />
                    ({meta.rewardsExtra})<br />
                    {meta.rewardsSummary &&
                      <div dangerouslySetInnerHTML={{__html: meta.rewardsSummary}} />
                    }
                  </th>
                </tr>
              </thead>
              <tbody>
                {apr.breakdowns.map((item, index) => (
                  <tr key={`apr-${index}`} role='row'>
                    <td role='cell'>{Formatter.currency(item.amount)}</td>
                    <td role='cell'>{item.cycles}</td>
                    <td role='cell'>{Formatter.currency(item.fees)}</td>
                    <td role='cell'>{Formatter.percentage(item.apr)}</td>
                    <td role='cell'>{Formatter.percentage(item.rewards)}</td>
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

export interface ChargesProps {
  charges: Array<Charge>
  meta?: ChargesMetaProps
}

export interface ChargesMetaProps {
  balance: string
  charge: string
  noCharge: string
  subTitle: string
  subTitles?: Array<string>
  summary: string
  title: string
}

export function ChargesTable({
    charges,
    meta = {
      balance: 'If the principal balance as of the last day of your prior Billing Cycle, excluding the amount of new Mobiloans Cash advances made during that Billing Cycle was',
      charge: '…your Fixed Finance Charge will be:',
      noCharge: 'No charge',
      subTitle: 'Minimum Charge',
      subTitles: ['Fixed Finance Charge'],
      summary: 'Each Billing Cycle you will be charged a Fixed Finance Charge of:',
      title: 'Charges',
    },
  }: ChargesProps) {
  return (
    <div className='schumer'>
      <table
        aria-colcount={2}
        aria-rowcount={2}
        role='table'>
        <tbody>
          <tr role='row'>
            <td colSpan={2} role='cell'>
              {meta.title}
            </td>
          </tr>
          <tr role='row'>
            <th className='half header' role='rowheader' scope='row'>
              {meta.subTitle}
              <ul>
                {meta.subTitles?.map((subTitle, index) => (
                  <li key={`charge-subtitle-${index}`}>{subTitle}</li>
                ))}
              </ul>
            </th>
            <td role='cell'>
              {meta.summary}
              <table
                aria-colcount={2}
                aria-rowcount={charges.length}
                role='table'>
                <thead>
                  <tr role='row'>
                    <th className='half' role='columnheader' scope='col'>
                      {meta.balance}
                    </th>
                    <th className='half' role='columnheader' scope='col'>
                      {meta.charge}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {charges.map((item, index) => (
                    <tr key={`charge-${index}`} role='row'>
                      <td role='cell'>{Formatter.currency(item.min)} - {Formatter.currency(item.max)}</td>
                      <td role='cell'>{!item.amount ? meta.noCharge : Formatter.currency(item.amount)}</td>
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

export interface FeesProps {
  fees: Array<Fee>
  meta?: FeesMetaProps
}

export interface FeesMetaProps {
  subTitle: string
  subTitleItems?: Array<string>
  template: string
  title: string
}

export function FeesTable({
    fees,
    meta = {
      subTitle: 'Transaction Fees',
      subTitleItems: ['Cash Advance Fee'],
      template: '[b:{rate}] for each [b:{amount}] of Mobiloans Cash advanced, [b:for draws {min:over} {max:up to}]',
      title: 'Fees',
    },
  }: FeesProps) {
  return (
    <div className='schumer'>
      <table
        aria-colcount={2}
        aria-rowcount={2}
        role='table'>
        <tbody>
          <tr role='row'>
            <td colSpan={2} role='row'>
              {meta.title}
            </td>
          </tr>
          <tr role='row'>
            <th className='half header' role='rowheader' scope='row'>
              {meta.subTitle}
              <ul>
                {meta.subTitleItems?.map((subTitle, index) => (
                  <li key={`fee-subtitle-${index}`}>{subTitle}</li>
                ))}
              </ul>
            </th>
            <td role='cell'>
              {fees.map((item, index) => (
                <div className='line' key={`fee-${index}`}>
                  {Renderer.render(meta.template, {...item}).map((component, idx) => (
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

export interface SchumerProps {
  apr: APR
  aprsMeta?: APRsMetaProps
  charges: Array<Charge>
  chargesMeta?: ChargesMetaProps
  fees: Array<Fee>
  feesMeta?: FeesMetaProps
}

export function Schumer({
    apr,
    aprsMeta,
    charges,
    chargesMeta,
    fees,
    feesMeta,
  }: SchumerProps) {
  return (
    <div className='schumer'>
      <table>
        <tbody>
          <tr>
            <td className='no-padding'>
              <APRsTable apr={apr} meta={aprsMeta} />
            </td>
          </tr>
          <tr>
            <td className='no-padding'>
              <ChargesTable charges={charges} meta={chargesMeta} />
            </td>
          </tr>
          <tr>
            <td className='no-padding'>
              <FeesTable fees={fees} meta={feesMeta} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
