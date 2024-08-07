
import { useState } from 'react'

// We import this type in order to cast a string to it, this is only for demonstration
// purposes and won't be needed in the future.
import { FormData } from '../commons'

import { Background } from '../elements/Background'
import { Badge } from '../elements/Badge'
import { Button } from '../elements/Button'
import { Checkbox, Input, Option, Radio, Select, Textarea } from '../elements/Input'
import { Divider } from '../elements/Divider'
import { H1, H2, H3, H4, H5, H6 } from '../elements/Heading'
import { Highlight } from '../elements/Highlight'
import { Icon, Icons } from '../elements/Icon'
import { Image } from '../elements/Image'
import { Link } from '../elements/Link'
import { List, ListItem } from '../elements/List'
import { Math } from '../elements/Math'
import { Text } from '../elements/Text'
import { Tooltip } from '../elements/Tooltip'

import { Field, Form } from '../components/Form'
import { Hero } from '../components/Hero'
import { Modal } from '../components/Modal'
import { Navigation, NavigationLink } from '../components/Navigation'
import { Notification } from '../components/Notification'
import { Pagination } from '../components/Pagination'
import { Column, Table } from '../components/Table'

import { Accordion, AccordionItem } from '../containers/Accordion'
import { AmountsTable, APRsTable, ChargesTable, FeesTable, Schumer } from '../containers/Schumer'
import { Body } from '../containers/Body'
import { Card } from '../containers/Card'
import { Carousel, CarouselItem } from '../containers/Carousel'
import { Footer } from '../containers/Footer'
import { Stepper, StepperItem } from '../containers/Stepper'

import { Flex } from '../layouts/Flex'
import { Grid, GridArea } from '../layouts/Grid'

function App() {
  // This state and handler will be used by the modal demo.
  const [openConfirm, setOpenConfirm] = useState<boolean>(false)
  const [openYesNo, setOpenYesNo] = useState<boolean>(false)
  function handleResponse(yes: boolean) {
    alert(`The response was: ${yes}`)
    setOpenConfirm(false)
    setOpenYesNo(false)
  }

  // We use this simple callback to avoid prop validation errors.
  async function asyncCallback() {
    alert('Asynchronous callback fired!')
    return true
  }
  function callbackTest() {
    alert('You clicked me!')
  }

  // We use this function to handle changes to inputs.
  function handleChange(name: string, value: string) {
    console.log(`${name} = ${value}`)
  }

  // We use this submit handler for simulating the submission of valid form.
  function handleSubmit(data: FormData) {
    console.log(data)
  }

  // We setup the pagination demo state and handler here.
  const [page, setPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(10)
  function handlePage(page: number) {
    console.log(page)
    setPage(page)
  }
  function handlePageSize(size: number) {
    console.log(size)
    setPage(0)
    setPageSize(size)
  }

  // We use the columns and rows for the table.
  const cols: Array<Column> = [
    {label: 'Column A', name: 'a'},
    {label: 'Column B', name: 'b'},
    {label: 'Column C', name: 'c'},
    {label: 'Column D', name: 'd'},
  ]
  const rows: Array<Record<string, any>> = [
    {a: 'A1', b: 'B1', c: 'C1', d: 'D1'},
    {a: 'A2', b: 'B2', c: 'C2', d: 'D2'},
    {a: 'A3', b: 'B3', c: 'C3', d: 'D3'},
    {a: 'A4', b: 'B4', c: 'C4', d: 'D4'},
    {a: 'A5', b: 'B5', c: 'C5', d: 'D5'},
  ]

  // We use the following style to demonstrate the flex layout options.
  const flexDemoStyle = {
    border: '1px solid gray',
    height: '10rem',
    width: '12rem',
  }
  const flexDemoCellStyle = {
    border: '1px solid blue',
  }

  // The following is used for the grid example.
  const gridStyle = {
    border: '1px solid blue',
    height: '2rem',
    width: '2rem',
  }
  const cells = []
  for (let i = 0; i < 28; i++) {
    cells.push(<div key={i} style={gridStyle}>{i}</div>)
  }

  // We use this fields map for demonstrating the form component with validation.
  const fields: Array<Field> = [
    {
      autocomplete: 'email',
      error: 'A valid email address is required.',
      label: 'Email Address',
      input: 'email',
      max: 100,
      min: 10,
      name: 'email',
      regex: new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, 'i'),
      required: true,
    },
    {
      autocomplete: 'current-password',
      error: 'A valid password must be provided.',
      label: 'Password',
      input: 'password',
      max: 40,
      min: 10,
      name: 'password',
      required: true,
    },
    {
      error: 'A two-factor authentication required.',
      label: '2FA Method',
      input: 'select',
      name: '2fa',
      options: {
        email: 'Email Address',
        sms: 'SMS',
      },
      required: true,
    },
    {
      label: 'Notes',
      input: 'textarea',
      name: 'notes',
    },
    {
      label: 'Subscribe to newsletter',
      input: 'checkbox',
      name: 'newsletter',
    },
  ]

  // We use this to duplicate schumer and other tables.
  const amounts = [
    {max: 400, payment: 16, },
    {max: 899.99, min: 400.01, percentage: .040000},
    {max: 999.99, min: 900, percentage: .038467},
    {max: 1099.99, min: 1000, percentage: .035710},
    {max: 1199.99, min: 1100, percentage: .026316},
    {max: 1299.99, min: 1200, percentage: .025000},
    {max: 1399.99, min: 1300, percentage: .023808},
    {max: 1499.99, min: 1400, percentage: .022222},
    {max: 1999.99, min: 1500, percentage: .020000},
    {max: 2500, min: 2000, percentage: .016667},
  ]
  const apr = {
    breakdowns: [
      {amount: 500, apr: 4.05, cycles: 25, fees: 1012.50, rewards: 1.4175},
      {amount: 1000, apr: 3.6712, cycles: 28, fees: 2047, rewards: 1.2849},
      {amount: 2500, apr: 2.3886, cycles: 60, fees: 7005.05, rewards: .8360},
    ],
    formula: '$$APR=(\\frac{(\\frac{\\text{Total Fees}}{\\text{Avg. Principal Balance}})}{\\text{Number Of Billing Cycles}})*\\text{Billing Cycles Per Year}*100$$',
    max: 4.05,
    min: .836,
  }
  const charges = [
    {amount: 0, max: 10, min: 0},
    {amount: 15, max: 100, min: 10.01},
    {amount: 30, max: 200, min: 100.01},
    {amount: 35, max: 300, min: 200.01},
    {amount: 45, max: 400, min: 300.01},
    {amount: 75, max: 500, min: 400.01},
    {amount: 85, max: 600, min: 500.01},
    {amount: 95, max: 700, min: 600.01},
    {amount: 105, max: 900, min: 700.01},
    {amount: 115, max: 1000, min: 900.01},
    {amount: 135, max: 1400, min: 1000.01},
    {amount: 150, max: 2500, min: 1400.01},
  ]
  const fees = [
    {amount: 20, max: 500, rate: 3.5},
    {amount: 20, max: 1000, min: 500, rate: 2.75},
    {amount: 20, max: 1200, min: 1000, rate: 2.25},
    {amount: 20, max: 1500, min: 1200, rate: 2},
    {amount: 20, max: 1800, min: 1500, rate: 1.65},
    {amount: 20, max: 2000, min: 1800, rate: 1.5},
    {amount: 20, min: 2000, rate: 1.2},
  ]

  return (
    <Body padding='1rem'>
      <ul>
      <li><Link href="#Elements">Elements</Link></li>
        <li><Link href="#Components">Components</Link></li>
        <li><Link href="#Containers">Containers</Link></li>
        <li><Link href="#Layouts">Layouts</Link></li>
      </ul>

      <Flex gap='5rem'>

        <H1>Elements</H1>

        <Flex>
          <H2>Badges</H2>
          <Flex gap='3rem' row wrap>
            <Badge count={123}>
              <Button callback={callbackTest} label='Click me!' secondary />
            </Badge>
            <Badge danger count={123}>
              <Icon name={Icons.alert} lg />
            </Badge>
            <Badge info count={123}>
              <Button callback={callbackTest} icon={Icons.print} label='Click me!' />
            </Badge>
            <Badge success count={123}>
              <Button callback={callbackTest} label='Click me!' tertiary />
            </Badge>
            <Badge warning count={123}>
              <Icon name={Icons.calendar} xl />
            </Badge>
          </Flex>
        </Flex>

        <Flex>
          <H2>Buttons</H2>
          <Flex gap='1rem' evenly row wrap>
              <Button callback={callbackTest} icon={Icons.plus} label='Click me!' />
              <Button callback={callbackTest} label='Click me!' primary />
              <Button callback={callbackTest} icon={Icons.minus} label='Click me!' secondary />
              <Button callback={callbackTest} label='Click me!' tertiary />
          </Flex>
        </Flex>

        <Flex>
          <H2>Dividers</H2>
          <Flex gap='1rem' row wrap>
            <Flex>
              <H3>Solid w/ Dots (default)</H3>
              <Flex evenly row wrap>
                <Divider horizontal width='10rem' />
                <Divider height='5rem' vertical />
              </Flex>
            </Flex>
            <Flex>
              <H3>Solid</H3>
              <Flex evenly row wrap>
                <Divider dots={false} horizontal width='10rem' />
                <Divider dots={false} height='5rem' vertical />
              </Flex>
            </Flex>
            <Flex>
              <H3>Solid w/ Color</H3>
              <Flex evenly row wrap>
                <Divider color='gray' dots={false} horizontal width='10rem' />
                <Divider color='gray' dots={false} height='5rem' vertical />
              </Flex>
            </Flex>
            <Flex>
              <H3>Dashed w/ Dots</H3>
              <Flex evenly row wrap>
                <Divider dashed horizontal width='10rem' />
                <Divider dashed height='5rem' vertical />
              </Flex>
            </Flex>
            <Flex>
              <H3>Dashed</H3>
              <Flex evenly row wrap>
                <Divider dashed dots={false} horizontal width='10rem' />
                <Divider dashed dots={false} height='5rem' vertical />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <H2>Fonts</H2>
          <Flex gap='1rem' row start wrap>
            <Flex>
              <H4>Body</H4>
              <p className='font-body' style={{width: '10rem'}}>
                Vestibulum vel ipsum euismod, feugiat metus a, efficitur enim. Aliquam ut euismod neque.
              </p>
            </Flex>
            <Flex>
              <H4>Legal</H4>
              <p className='font-legal' style={{width: '10rem'}}>
                Vestibulum vel ipsum euismod, feugiat metus a, efficitur enim. Aliquam ut euismod neque.
              </p>
            </Flex>
            <Flex>
              <H4>Number</H4>
              <p className='font-number' style={{width: '10rem'}}>
                Vestibulum vel ipsum euismod, feugiat metus a, efficitur enim. Aliquam ut euismod neque.
              </p>
            </Flex>
            <Flex>
              <H4>Title</H4>
              <p className='font-title' style={{width: '10rem'}}>
                Vestibulum vel ipsum euismod, feugiat metus a, efficitur enim. Aliquam ut euismod neque.
              </p>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <H2>Headings</H2>
          <Flex evenly gap='1rem' row wrap>
              <H1>Heading 1</H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <H4>Heading 4</H4>
              <H5>Heading 5</H5>
              <H6>Heading 6</H6>
          </Flex>
        </Flex>

        <Flex>
          <H2>Highlights</H2>
          <Flex evenly gap='1rem' row wrap>
              <p>
                Etiam finibus, velit eu convallis aliquet, mauris justo
                tincidunt <Highlight>lectus 10-20%</Highlight>, nec tempor elit massa eget metus.
              </p>
              <p>
                Etiam finibus, velit eu convallis aliquet, mauris justo
                tincidunt <Highlight bg='black' fg='white'>lectus 10-20%</Highlight>, nec tempor elit massa eget metus.
              </p>
              <p>
                Etiam finibus, velit eu convallis aliquet, mauris justo
                tincidunt <Highlight bg='cyan' fg='purple'>lectus 10-20%</Highlight>, nec tempor elit massa eget metus.
              </p>
          </Flex>
        </Flex>

        <Flex>
          <H2>Icons</H2>
          <Flex gap='1rem' row wrap>
            {Object.values(Icons).map((icon, index) => {
              // We do this small hack in order to showcase the different colors & sizes, this is for demonstration purposes only.
              const props: Record<string, boolean | string> = {}
              if (index % 4 === 0) {
                props['color'] = 'red'
                props['xl'] = true
              } else if (index % 3 === 0) {
                props['color'] = 'green'
                props['lg'] = true
              } else if (index % 2 === 0) {
                props['color'] = 'blue'
                props['md'] = true
              } else {
                props['color'] = 'black'
                props['sm'] = true
              }

              return (
                <Flex key={index} style={{flexBasis: '4rem'}}>
                  <Icon {...props} name={icon as Icons} />
                  <div>{icon}</div>
                </Flex>
              )
          })}
          </Flex>
        </Flex>

        <Flex>
          <H2>Images</H2>
          <Flex evenly row wrap>
            <Flex>
              <H4>Contain</H4>
              <Image contain height='10rem' src='/images/test.jpg' width='20rem' />
            </Flex>
            <Flex>
              <H4>Cover</H4>
              <Image caption='This image contains a caption' cover height='10rem' src='/images/test.jpg' width='20rem' />
            </Flex>
            <Flex>
              <H4>Fill</H4>
              <Image fill height='10rem' src='/images/test.jpg' width='20rem' />
            </Flex>
            <Flex>
              <H4>Responsive</H4>
              <Image src='/images/test.jpg' width='20rem' />
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <H2>Inputs</H2>
          <Flex evenly row wrap>
            <Flex>
              <H4>Checkbox</H4>
              <Checkbox handler={handleChange} name='checkbox'>I agree to terms</Checkbox>
            </Flex>
            <Flex>
              <H4>Email</H4>
              <Input autocomplete='email' handler={handleChange} name='email' type='email' />
            </Flex>
            <Flex>
              <H4>File</H4>
              <Input autocomplete='file' handler={handleChange} name='file' type='file' />
            </Flex>
            <Flex>
              <H4>CC Number</H4>
              <Input autocomplete='cc-number' handler={handleChange} name='number' type='number' />
            </Flex>
            <Flex>
              <H4>Password</H4>
              <Input autocomplete='current-password' handler={handleChange} name='password' type='password' />
            </Flex>
            <Flex>
              <H4>Radio</H4>
              <Flex start>
                <Radio handler={handleChange} name='radio' value='yes'>Agree</Radio>
                <Radio handler={handleChange} name='radio' value='no'>Disagree</Radio>
              </Flex>
            </Flex>
            <Flex>
              <H4>Select</H4>
              <Select handler={handleChange} name='select' value='three'>
                <Option value='one'>Option 1</Option>
                <Option value='two'>Option 2</Option>
                <Option value='three'>Option 3</Option>
                <Option value='four'>Option 4</Option>
                <Option value='five'>Option 5</Option>
              </Select>
            </Flex>
            <Flex>
              <H4>Telephone</H4>
              <Input autocomplete='tel' handler={handleChange} name='telephone' type='tel' />
            </Flex>
            <Flex>
              <H4>Text</H4>
              <Input autocomplete='on' handler={handleChange} name='text' />
            </Flex>
            <Flex>
              <H4>Textarea</H4>
              <Textarea handler={handleChange} name='textarea' />
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <H2>Links</H2>
          <Flex evenly gap='2rem' row wrap>
            <Link href='/'>Default Link</Link>
            <Link button href='/'>Button Link</Link>
            <Link href='/' open>New Window Link</Link>
            <Link href='/' style={{color: 'black', backgroundColor: 'red'}}>Custom Style</Link>
            <Link href='/' open style={{color: 'green', backgroundColor: 'yellow'}}>Custom Style New Window</Link>
          </Flex>
        </Flex>

        <Flex>
          <H2>Lists</H2>
          <Flex evenly row wrap>
            <Flex>
              <H4>Ordered</H4>
              <List ordered>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
                <ListItem>Item 5</ListItem>
              </List>
            </Flex>
            <Flex>
              <H4>Unordered</H4>
              <List unordered>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
                <ListItem>Item 5</ListItem>
              </List>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <H2>Texts</H2>
          <Flex evenly row wrap>
            <Flex>
              <H4>Default</H4>
              <Text>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Bold</H4>
              <Text bold>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Capitalize</H4>
              <Text capitalize>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Italic</H4>
              <Text italic>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Legal</H4>
              <Text legal>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Lowercase</H4>
              <Text lower>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Strikethrough</H4>
              <Text strike>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Subscript</H4>
              <Text>Aliquam vitae neque<Text sub>log n</Text> at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Superscript</H4>
              <Text>Aliquam vitae neque<Text super>(xy)</Text> at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Underline</H4>
              <Text underline>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Uppercase</H4>
              <Text upper>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Custom Style</H4>
              <Text style={{color: '#996500'}}>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Context</H4>
              <Text danger>Danger - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text info>Info - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text success>Success - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text warning>Warning - Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Role</H4>
              <Text primary>Primary - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text secondary>Secondary - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text tertiary>Tertiary - Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex>
              <H4>Alignment</H4>
              <Text center style={{width: '30rem'}}>Center - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text left style={{width: '30rem'}}>Left - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text justify style={{width: '30rem'}}>Justify - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text right style={{width: '30rem'}}>Right - Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <H2>Tooltips</H2>
          <Flex evenly gap='4rem' row wrap>
            <Flex>
              <H4>Default</H4>
              <Tooltip message='Nothing special here'>
                No position
              </Tooltip>
            </Flex>
            <Flex>
              <H4>Danger</H4>
              <Tooltip danger message='Oh no, we are in trouble' top>
                Position top
              </Tooltip>
            </Flex>
            <Flex>
              <H4>Info</H4>
              <Tooltip info message='For your information' right>
                Position right
              </Tooltip>
            </Flex>
            <Flex>
              <H4>Success</H4>
              <Tooltip success message='Congratulations, we did it' bottom>
                Position bottom
              </Tooltip>
            </Flex>
            <Flex>
              <H4>Warning</H4>
              <Tooltip warning message='You should keep an eye out' left>
                Position left
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>

        <H1>Components</H1>

        <Flex>
          <H2>Forms</H2>
          <Flex gap='1rem' row wrap>
            <Flex>
              <H3>Highlight None</H3>
              <Form fields={fields} handler={handleSubmit} />
            </Flex>
            <Flex>
              <H3>Highlight Optional</H3>
              <Form fields={fields} handler={handleSubmit} highlight='optional' />
            </Flex>
            <Flex>
              <H3>Highlight Required</H3>
              <Form fields={fields} handler={handleSubmit} highlight='required' />
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <H2>Heros</H2>
          <H3>Bottom</H3>
          <Flex height='30vh' width='80vw'>
            <Hero image='/images/test.jpg' bottom>
              <Flex>
                <p>Donec viverra leo augue, sed semper enim ornare in. Pellentesque sit amet arcu tortor. Proin venenatis quam nec rhoncus porta.</p>
              </Flex>
            </Hero>
          </Flex>
          <H3>Cover</H3>
          <Flex height='30vh' width='80vw'>
            <Hero image='/images/test.jpg' cover>
              <Flex>
                <p>Donec viverra leo augue, sed semper enim ornare in. Pellentesque sit amet arcu tortor. Proin venenatis quam nec rhoncus porta.</p>
              </Flex>
            </Hero>
          </Flex>
          <H3>Left</H3>
          <Flex height='30vh' width='80vw'>
            <Hero image='/images/test.jpg' left>
              <Flex start>
                <p>Donec viverra leo augue, sed semper enim ornare in. Pellentesque sit amet arcu tortor. Proin venenatis quam nec rhoncus porta.</p>
                <Button callback={callbackTest} label='Tortor ornare!' primary />
              </Flex>
            </Hero>
          </Flex>
          <H3>Right</H3>
          <Flex height='30vh' width='80vw'>
            <Hero image='/images/test.jpg' right>
              <Flex end>
                <p>Donec viverra leo augue, sed semper enim ornare in. Pellentesque sit amet arcu tortor. Proin venenatis quam nec rhoncus porta.</p>
                <Button callback={callbackTest} label='Tortor ornare!' primary />
              </Flex>
            </Hero>
          </Flex>
          <H3>Top</H3>
          <Flex height='30vh' width='80vw'>
            <Hero image='/images/test.jpg' top>
              <Flex>
                <p>Donec viverra leo augue, sed semper enim ornare in. Pellentesque sit amet arcu tortor. Proin venenatis quam nec rhoncus porta.</p>
              </Flex>
            </Hero>
          </Flex>
        </Flex>

        <Flex>
          <H2>Modals</H2>
          <Flex gap='1rem' row>
            <Modal callback={handleResponse} open={openConfirm} yes='Confirm'>
              Nullam sapien nisi, dictum at nibh quis, ornare laoreet ex. Aliquam commodo tincidunt venenatis. Integer ac sem nisl.
            </Modal>
            <Button callback={() => setOpenConfirm(true)} label='Open confirmation modal' secondary />
            <Modal callback={handleResponse} no='Deny' open={openYesNo} yes='Accept'>
              Nullam sapien nisi, dictum at nibh quis, ornare laoreet ex. Aliquam commodo tincidunt venenatis. Integer ac sem nisl.
            </Modal>
            <Button callback={() => setOpenYesNo(true)} label='Open yes/no modal' tertiary />
          </Flex>
        </Flex>

        <Flex>
          <H2>Navigation</H2>
          <Navigation logo='/images/logo.svg'>
            <NavigationLink href='/'>Link 1</NavigationLink>
            <NavigationLink href='/'>Link 2</NavigationLink>
            <NavigationLink href='/'>Link 3</NavigationLink>
            <NavigationLink href='/'>Link 4</NavigationLink>
            <Flex row>
              <Button callback={callbackTest} label='Sign In' />
              <Button callback={callbackTest} label='Apply Now' secondary />
            </Flex>
          </Navigation>
        </Flex>

        <Flex>
          <H2>Notifications</H2>
          <Flex gap='1rem'>
            <Notification callback={callbackTest} danger>There was something wrong.</Notification>
            <Notification callback={callbackTest} info>This is for your information.</Notification>
            <Notification success>Whatever you did worked!</Notification>
            <Notification warning>Next time this might not work.</Notification>
          </Flex>
        </Flex>

        <Flex>
          <H2>Pagination</H2>
          <Pagination
            page={page}
            pageHandler={handlePage}
            size={pageSize}
            sizeHandler={handlePageSize}
            total={201} />
        </Flex>

        <Flex>
          <H2>Table</H2>
          <Flex gap='1rem' row wrap>
            <Flex>
              <H3>Default w/ Header Row</H3>
              <Table cols={cols} rows={rows} />
            </Flex>
            <Flex>
              <H3>Default w/ Header Column</H3>
              <Table cols={cols} header='column' rows={rows} />
            </Flex>
            <Flex>
              <H3>Default w/o Header</H3>
              <Table cols={cols} header='none' rows={rows} />
            </Flex>
            <Flex>
              <H3>Card</H3>
              <Table
                card
                cols={cols}
                footer={<p>Here is the footer.  Changed to accept a ReactNode component, so similar as `children` but no unsafe.</p>}
                rows={rows} />
            </Flex>
          </Flex>
        </Flex>

        <H1>Containers</H1>
        <Flex>
          <H2>Accordion</H2>
          <Accordion>
            <AccordionItem title='Donec cursus arcu sed nisl ullamcorper egestas.'>
              Aenean sodales rhoncus lacus. Fusce vulputate tempor nisi, sed volutpat quam blandit at. Suspendisse varius blandit mi sed viverra. Proin congue massa sem, in vehicula nulla lacinia at. Phasellus in sapien bibendum, sodales sapien eget, lacinia orci. Proin molestie auctor ipsum quis molestie.
            </AccordionItem>
            <AccordionItem iconClose={Icons.plus} iconOpen={Icons.minus} title='Customize the icons'>
              <Text margin='0 0 1rem 0'>
                Aenean sodales rhoncus lacus. Fusce vulputate tempor nisi, sed volutpat quam blandit at. Suspendisse varius blandit mi sed viverra. Proin congue massa sem, in vehicula nulla lacinia at. Phasellus in sapien bibendum, sodales sapien eget, lacinia orci. Proin molestie auctor ipsum quis molestie.
              </Text>
              <Text margin='0 0 1rem 0'>
                Duis nec accumsan sapien. Sed eu magna sed dolor molestie molestie vel vitae est. Nunc sit amet nulla a eros aliquam ultricies vitae accumsan libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer viverra nisi vitae dui pretium, eget euismod leo ullamcorper. Aenean venenatis dignissim velit, in vulputate mi semper ac. Aliquam pulvinar eget diam id elementum. Duis dapibus, turpis at fermentum lacinia, ipsum nibh gravida urna, eu eleifend nisl sapien non leo. Vestibulum ullamcorper risus sapien, ac ornare ipsum feugiat vitae. Quisque eu nisi justo. Nullam tempus est non justo commodo euismod sed condimentum risus. In at molestie arcu, a euismod orci. Donec aliquet in sapien eu luctus.
              </Text>
              <Text margin='0 0 1rem 0'>
                Integer turpis orci, elementum a bibendum eu, pellentesque ac orci. Nulla facilisi. Pellentesque mattis ipsum magna, nec vestibulum ligula gravida non. Sed tempor massa a laoreet vulputate. Aliquam mollis vestibulum leo vitae vehicula. Vivamus at lectus ex. Nunc malesuada leo sed nisi luctus scelerisque. Proin vel ipsum tristique, laoreet leo nec, rhoncus mauris. Nam quis ex mi. Nunc mollis ligula et vulputate convallis. Phasellus eget lacinia dui, sit amet viverra elit. Pellentesque accumsan suscipit rhoncus.
              </Text>
              <Text margin='0 0 1rem 0'>
                Aenean sodales rhoncus lacus. Fusce vulputate tempor nisi, sed volutpat quam blandit at. Suspendisse varius blandit mi sed viverra. Proin congue massa sem, in vehicula nulla lacinia at. Phasellus in sapien bibendum, sodales sapien eget, lacinia orci. Proin molestie auctor ipsum quis molestie.
              </Text>
              <Text margin='0 0 1rem 0'>
                Duis nec accumsan sapien. Sed eu magna sed dolor molestie molestie vel vitae est. Nunc sit amet nulla a eros aliquam ultricies vitae accumsan libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer viverra nisi vitae dui pretium, eget euismod leo ullamcorper. Aenean venenatis dignissim velit, in vulputate mi semper ac. Aliquam pulvinar eget diam id elementum. Duis dapibus, turpis at fermentum lacinia, ipsum nibh gravida urna, eu eleifend nisl sapien non leo. Vestibulum ullamcorper risus sapien, ac ornare ipsum feugiat vitae. Quisque eu nisi justo. Nullam tempus est non justo commodo euismod sed condimentum risus. In at molestie arcu, a euismod orci. Donec aliquet in sapien eu luctus.
              </Text>
              <Text margin='0 0 1rem 0'>
                Integer turpis orci, elementum a bibendum eu, pellentesque ac orci. Nulla facilisi. Pellentesque mattis ipsum magna, nec vestibulum ligula gravida non. Sed tempor massa a laoreet vulputate. Aliquam mollis vestibulum leo vitae vehicula. Vivamus at lectus ex. Nunc malesuada leo sed nisi luctus scelerisque. Proin vel ipsum tristique, laoreet leo nec, rhoncus mauris. Nam quis ex mi. Nunc mollis ligula et vulputate convallis. Phasellus eget lacinia dui, sit amet viverra elit. Pellentesque accumsan suscipit rhoncus.
              </Text>
              <Text margin='0 0 1rem 0'>
                Aenean sodales rhoncus lacus. Fusce vulputate tempor nisi, sed volutpat quam blandit at. Suspendisse varius blandit mi sed viverra. Proin congue massa sem, in vehicula nulla lacinia at. Phasellus in sapien bibendum, sodales sapien eget, lacinia orci. Proin molestie auctor ipsum quis molestie.
              </Text>
              <Text margin='0 0 1rem 0'>
                Duis nec accumsan sapien. Sed eu magna sed dolor molestie molestie vel vitae est. Nunc sit amet nulla a eros aliquam ultricies vitae accumsan libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer viverra nisi vitae dui pretium, eget euismod leo ullamcorper. Aenean venenatis dignissim velit, in vulputate mi semper ac. Aliquam pulvinar eget diam id elementum. Duis dapibus, turpis at fermentum lacinia, ipsum nibh gravida urna, eu eleifend nisl sapien non leo. Vestibulum ullamcorper risus sapien, ac ornare ipsum feugiat vitae. Quisque eu nisi justo. Nullam tempus est non justo commodo euismod sed condimentum risus. In at molestie arcu, a euismod orci. Donec aliquet in sapien eu luctus.
              </Text>
              <Text margin='0 0 1rem 0'>
                Integer turpis orci, elementum a bibendum eu, pellentesque ac orci. Nulla facilisi. Pellentesque mattis ipsum magna, nec vestibulum ligula gravida non. Sed tempor massa a laoreet vulputate. Aliquam mollis vestibulum leo vitae vehicula. Vivamus at lectus ex. Nunc malesuada leo sed nisi luctus scelerisque. Proin vel ipsum tristique, laoreet leo nec, rhoncus mauris. Nam quis ex mi. Nunc mollis ligula et vulputate convallis. Phasellus eget lacinia dui, sit amet viverra elit. Pellentesque accumsan suscipit rhoncus.
              </Text>
              <Text margin='0 0 1rem 0'>
                Aenean sodales rhoncus lacus. Fusce vulputate tempor nisi, sed volutpat quam blandit at. Suspendisse varius blandit mi sed viverra. Proin congue massa sem, in vehicula nulla lacinia at. Phasellus in sapien bibendum, sodales sapien eget, lacinia orci. Proin molestie auctor ipsum quis molestie.
              </Text>
              <Text margin='0 0 1rem 0'>
                Duis nec accumsan sapien. Sed eu magna sed dolor molestie molestie vel vitae est. Nunc sit amet nulla a eros aliquam ultricies vitae accumsan libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer viverra nisi vitae dui pretium, eget euismod leo ullamcorper. Aenean venenatis dignissim velit, in vulputate mi semper ac. Aliquam pulvinar eget diam id elementum. Duis dapibus, turpis at fermentum lacinia, ipsum nibh gravida urna, eu eleifend nisl sapien non leo. Vestibulum ullamcorper risus sapien, ac ornare ipsum feugiat vitae. Quisque eu nisi justo. Nullam tempus est non justo commodo euismod sed condimentum risus. In at molestie arcu, a euismod orci. Donec aliquet in sapien eu luctus.
              </Text>
              <Text margin='0 0 1rem 0'>
                Integer turpis orci, elementum a bibendum eu, pellentesque ac orci. Nulla facilisi. Pellentesque mattis ipsum magna, nec vestibulum ligula gravida non. Sed tempor massa a laoreet vulputate. Aliquam mollis vestibulum leo vitae vehicula. Vivamus at lectus ex. Nunc malesuada leo sed nisi luctus scelerisque. Proin vel ipsum tristique, laoreet leo nec, rhoncus mauris. Nam quis ex mi. Nunc mollis ligula et vulputate convallis. Phasellus eget lacinia dui, sit amet viverra elit. Pellentesque accumsan suscipit rhoncus.
              </Text>
            </AccordionItem>
            <AccordionItem title='Donec cursus arcu sed nisl ullamcorper egestas.'>
              Aenean sodales rhoncus lacus. Fusce vulputate tempor nisi, sed volutpat quam blandit at. Suspendisse varius blandit mi sed viverra. Proin congue massa sem, in vehicula nulla lacinia at. Phasellus in sapien bibendum, sodales sapien eget, lacinia orci. Proin molestie auctor ipsum quis molestie.
            </AccordionItem>
          </Accordion>
        </Flex>

        <Flex gap='1rem'>
          <H2>Cards</H2>
          <Card style={{padding: '1rem'}}>
            Sed eu tempor massa. Pellentesque vel mauris efficitur, feugiat massa sit amet, commodo erat. Integer tristique, mauris non luctus elementum, lectus urna faucibus urna, vel convallis sapien dui vitae nibh.
          </Card>
          <Card>
            <Flex stretch full row>
              <Background primary>
                <Flex start margin='2rem'>
                  <H2>Step 1</H2>
                  <Text tertiary>Do something</Text>
                  <Flex center full>
                    <Icon name={Icons.lock} xl />
                  </Flex>
                </Flex>
              </Background>
              <Flex full padding='1rem' style={{flex: '2'}}>
                Integer tristique, mauris non luctus elementum, lectus urna faucibus urna, vel convallis sapien dui vitae nibh.
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex stretch full row>
              <Background secondary>
                <Flex start margin='2rem'>
                  <H2>Step 2</H2>
                  <Text tertiary>Do something</Text>
                  <Flex center full>
                    <Icon name={Icons.lock} xl />
                  </Flex>
                </Flex>
              </Background>
              <Flex full padding='1rem' style={{flex: '2'}}>
                Integer tristique, mauris non luctus elementum, lectus urna faucibus urna, vel convallis sapien dui vitae nibh.
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex stretch full row>
              <Background tertiary>
                <Flex start margin='2rem'>
                  <H2>Step 3</H2>
                  <Text primary>Do something</Text>
                  <Flex center full>
                    <Icon name={Icons.lock} xl />
                  </Flex>
                </Flex>
              </Background>
              <Flex full padding='1rem' style={{flex: '2'}}>
                Integer tristique, mauris non luctus elementum, lectus urna faucibus urna, vel convallis sapien dui vitae nibh.
              </Flex>
            </Flex>
          </Card>
        </Flex>

        <Flex>
          <H2>Carousel</H2>
          <Carousel>
            <CarouselItem>
              <Image src='https://placehold.co/640x480/green/white?text=One' />
              <H3>Item 1</H3>
            </CarouselItem>
            <CarouselItem>
              <Image src='https://placehold.co/640x480/red/black?text=Two' />
              <H3>Item 2</H3>
            </CarouselItem>
            <CarouselItem>
              <Image src='https://placehold.co/640x480/silver/blue?text=Three' />
              <H3>Item 3</H3>
            </CarouselItem>
            <CarouselItem>
              <Image src='https://placehold.co/640x480/blue/white?text=Four' />
              <H3>Item 4</H3>
            </CarouselItem>
          </Carousel>
        </Flex>

        <Flex>
          <Flex>
            <H2>Schumer</H2>
            <Schumer apr={apr} charges={charges} fees={fees} />
          </Flex>
          <Flex>
            <H3>Amounts</H3>
            <AmountsTable amounts={amounts} charges={charges} />
          </Flex>
          <Flex>
            <H3>APRs</H3>
            <APRsTable apr={apr} />
          </Flex>
          <Flex>
            <H3>Charges</H3>
            <ChargesTable charges={charges} />
          </Flex>
          <Flex>
            <H3>Fees</H3>
            <FeesTable fees={fees} />
          </Flex>
        </Flex>

        <Flex>
          <H2>Stepper</H2>
          <Stepper finish={() => alert('Stepper finished!')} nextLabel='Continue' prevLabel='Go back'>
            <StepperItem title='Do this first'>
              <H3>Step One</H3>
              Fusce eros metus, dapibus id nibh sit amet, condimentum mollis quam. Nam quis egestas ante. Donec pharetra semper nibh, in placerat erat hendrerit eget.
            </StepperItem>
            <StepperItem title='Now this second'>
              <H3>Step Two</H3>
              Donec cursus arcu sed nisl ullamcorper egestas. Aenean sodales rhoncus lacus. Fusce vulputate tempor nisi, sed volutpat quam blandit at. Suspendisse varius blandit mi sed viverra. Proin congue massa sem, in vehicula nulla lacinia at. Phasellus in sapien bibendum, sodales sapien eget, lacinia orci. Proin molestie auctor ipsum quis molestie. Nulla id est posuere, pretium neque id, bibendum massa. Nulla interdum urna a elit convallis, eu facilisis tellus accumsan. Aliquam sed tempor diam, ut consequat ligula. Pellentesque maximus vehicula justo, ut maximus nisi luctus eu. Fusce rhoncus sed libero ac facilisis. Fusce et dui diam. Quisque venenatis hendrerit sapien sed tincidunt. Sed vel tellus nulla.
            </StepperItem>
            <StepperItem callback={asyncCallback} callbackLabel='Keep going' title='One more item'>
              <H3>Step Three</H3>
              Vestibulum feugiat lacus non sapien gravida congue. Praesent ut lobortis ipsum. Ut congue, nulla at ornare malesuada, ex mi imperdiet diam, eu eleifend lacus libero in ante. Pellentesque mollis, neque eget vestibulum pellentesque, arcu turpis convallis urna, vel sodales libero turpis nec nibh. In id sagittis mauris. Cras blandit justo nec magna accumsan, nec viverra est auctor. Phasellus non malesuada est, nec sagittis velit. Sed rhoncus varius fringilla. Nulla aliquet egestas ornare.
            </StepperItem>
            <StepperItem title='It is done'>
              <H3>Final step</H3>
              Fusce eros metus, dapibus id nibh sit amet, condimentum mollis quam. Nam quis egestas ante. Donec pharetra semper nibh, in placerat erat hendrerit eget.
            </StepperItem>
          </Stepper>
        </Flex>

        <H1>Layouts</H1>
        <Flex>
          <H2>Flex</H2>
          <Flex>
            <H3>Column</H3>
            <Flex row wrap>
              <Flex>
                <H4>Align</H4>
                <Flex between gap='1rem' row wrap>
                  <Flex start style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Start</Text>
                  </Flex>
                  <Flex style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Center</Text>
                  </Flex>
                  <Flex end style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>End</Text>
                  </Flex>
                  <Flex stretch style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Stretch</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex>
                <H4>Justify</H4>
                <Flex between gap='1rem' row wrap>
                  <Flex start style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Start</Text>
                  </Flex>
                  <Flex style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Center</Text>
                  </Flex>
                  <Flex end style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>End</Text>
                  </Flex>
                  <Flex around style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Around</Text>
                    <Text style={flexDemoCellStyle}>Around</Text>
                    <Text style={flexDemoCellStyle}>Around</Text>
                  </Flex>
                  <Flex between style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Between</Text>
                    <Text style={flexDemoCellStyle}>Between</Text>
                    <Text style={flexDemoCellStyle}>Between</Text>
                  </Flex>
                  <Flex evenly style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Evenly</Text>
                    <Text style={flexDemoCellStyle}>Evenly</Text>
                    <Text style={flexDemoCellStyle}>Evenly</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <H3>Row</H3>
            <Flex row wrap>
              <Flex>
                <H4>Align</H4>
                <Flex between gap='1rem' row wrap>
                  <Flex row start style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Start</Text>
                  </Flex>
                  <Flex row style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Center</Text>
                  </Flex>
                  <Flex end row style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>End</Text>
                  </Flex>
                  <Flex row stretch style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Stretch</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex>
                <H4>Justify</H4>
                <Flex between gap='1rem' row wrap>
                  <Flex row start style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Start</Text>
                  </Flex>
                  <Flex row style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>Center</Text>
                  </Flex>
                  <Flex end row style={flexDemoStyle}>
                    <Text style={flexDemoCellStyle}>End</Text>
                  </Flex>
                  <Flex around row style={{...flexDemoStyle, width: '16rem'}}>
                    <Text style={flexDemoCellStyle}>Around</Text>
                    <Text style={flexDemoCellStyle}>Around</Text>
                    <Text style={flexDemoCellStyle}>Around</Text>
                  </Flex>
                  <Flex between row style={{...flexDemoStyle, width: '16rem'}}>
                    <Text style={flexDemoCellStyle}>Between</Text>
                    <Text style={flexDemoCellStyle}>Between</Text>
                    <Text style={flexDemoCellStyle}>Between</Text>
                  </Flex>
                  <Flex evenly row style={{...flexDemoStyle, width: '16rem'}}>
                    <Text style={flexDemoCellStyle}>Evenly</Text>
                    <Text style={flexDemoCellStyle}>Evenly</Text>
                    <Text style={flexDemoCellStyle}>Evenly</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <H2>Grid</H2>
          <Flex row start wrap>
            <Flex>
              <H3>3 columns</H3>
              <Grid cols={3}>
                {cells}
              </Grid>
            </Flex>
            <Flex>
              <H3>6 columns (w/ gap)</H3>
              <Grid cols={6} gap='1rem'>
                {cells}
              </Grid>
            </Flex>
            <Flex>
              <H3>12 columns</H3>
              <Grid cols={12}>
                {cells}
              </Grid>
            </Flex>
          </Flex>
          <Flex>
            <H3>Grid Area</H3>
            <Text>12x12 with areas</Text>
            <Flex style={{border: '1px solid blue'}}>
              <Grid cols={12} rows={12}>
                <GridArea colStart={2} colEnd={12} rowStart={2} rowEnd={12}>
                  <div style={{border: '1px solid red', height: '100%', width: '100%'}}>
                    Cols: 2-12, Rows: 2-12
                  </div>
                </GridArea>
                <GridArea colStart={1} colEnd={7} rowStart={5} rowEnd={7}>
                  <div style={{border: '1px solid green', height: '100%', width: '100%'}}>
                    Cols: 1-7, Rows: 5-7
                  </div>
                </GridArea>
                <GridArea colStart={6} colEnd={13} rowStart={6} rowEnd={13}>
                  <div style={{border: '1px solid blue', height: '100%', width: '100%'}}>
                    Cols: 6-13, Rows: 6-13
                  </div>
                </GridArea>
              </Grid>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <H2>Footer</H2>
          <Footer>
            Some text here in the footer.
          </Footer>
        </Flex>
      </Flex>
    </Body>
  )
}

export default App
