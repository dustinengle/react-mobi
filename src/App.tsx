
// We import this type in order to cast a string to it, this is only for demonstration
// purposes and won't be needed in the future.
import { Field, FormData, Icons } from '@/commons/types'

import Background from '@/elements/Background'
import Badge from '@/elements/Badge'
import Button from '@/elements/Button'
import { Checkbox, Input, Option, Radio, Select, Textarea } from '@/elements/Input'
import Divider from '@/elements/Divider'
import { H1, H2, H3, H4, H5, H6 } from '@/elements/Heading'
import Highlight from '@/elements/Highlight'
import Icon from '@/elements/Icon'
import Image from '@/elements/Image'
import Link from '@/elements/Link'
import { List, ListItem } from '@/elements/List'
import Text from '@/elements/Text'
import Tooltip from '@/elements/Tooltip'

import Form from '@/components/Form'
import { Navigation, NavigationLink } from '@/components/Navigation'
import Notification from '@/components/Notification'
import Table, { Column } from '@/components/Table'

import Card from '@/containers/Card'

import Flex from '@/layouts/Flex'

function App() {
  // We use this simple callback to avoid prop validation errors.
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
    height: '15rem',
    width: '20rem',
  }
  const flexDemoCellStyle = {
    border: '1px solid blue',
  }

  // We use this fields map for demonstrating the form component with validation.
  const fields: Array<Field> = [
    {
      error: 'A valid email address is required.',
      label: 'Email Address',
      input: 'email',
      max: 100,
      min: 10,
      name: 'email',
      regex: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'i'),
    },
    {
      error: 'A valid password must be provided.',
      label: 'Password',
      input: 'password',
      max: 40,
      min: 10,
      name: 'password',
    },
  ]

  // We will use this list to show all of the currently supported icons, this is only for
  // demonstration purposes.
  const icons = [
    'alert',
    'attach',
    'award',
    'calendar',
    'caret-down',
    'caret-up',
    'cash',
    'cc-amex',
    'cc-discover',
    'cc-mastercard',
    'cc-visa',
    'check',
    'comment',
    'danger',
    'delete',
    'edit',
    'email',
    'folder',
    'hide',
    'info',
    'lock',
    'map',
    'message',
    'minus',
    'next',
    'open',
    'plus',
    'prev',
    'profile',
    'restricted',
    'save',
    'settings',
    'star',
    'success',
    'tag',
    'unlock',
    'user',
    'view',
    'warning',
  ]

  return (
    <div className='content'>
      <Flex align='center' full justify='evenly' style={{padding: '1rem'}}>
        <H1>Elements</H1>

        <Flex align='center'>
          <H2>Badges</H2>
          <Flex row gap='3rem' justify='between'>
            <Badge count={123}>
              <Button callback={callbackTest} label='Click me!' role='secondary' />
            </Badge>
            <Badge context='danger' count={123}>
              <Icon name='alert' size='lg' />
            </Badge>
            <Badge context='info' count={123}>
              <Button callback={callbackTest} label='Click me!' />
            </Badge>
            <Badge context='success' count={123}>
              <Button callback={callbackTest} label='Click me!' role='tertiary' />
            </Badge>
            <Badge context='warning' count={123}>
              <Icon name='calendar' size='xl' />
            </Badge>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Buttons</H2>
          <Flex row justify='evenly'>
              <Button callback={callbackTest} label='Click me!' />
              <Button callback={callbackTest} label='Click me!' role='primary' />
              <Button callback={callbackTest} label='Click me!' role='secondary' />
              <Button callback={callbackTest} label='Click me!' role='tertiary' />
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Dividers</H2>
          <Flex row justify='evenly'>
              <div style={{ width: '10rem' }}>
                <Divider direction='horizontal' />
              </div>
              <div style={{ height: '5rem' }}>
                <Divider direction='vertical' />
              </div>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Fonts</H2>
          <Flex row justify='evenly'>
            <Flex align='center'>
              <H4>Body</H4>
              <p className='font-body'>
                Vestibulum vel ipsum euismod, feugiat metus a, efficitur enim. Aliquam ut euismod neque.
              </p>
            </Flex>
            <Flex align='center'>
              <H4>Legal</H4>
              <p className='font-legal'>
                Vestibulum vel ipsum euismod, feugiat metus a, efficitur enim. Aliquam ut euismod neque.
              </p>
            </Flex>
            <Flex align='center'>
              <H4>Number</H4>
              <p className='font-number'>
                Vestibulum vel ipsum euismod, feugiat metus a, efficitur enim. Aliquam ut euismod neque.
              </p>
            </Flex>
            <Flex align='center'>
              <H4>Title</H4>
              <p className='font-title'>
                Vestibulum vel ipsum euismod, feugiat metus a, efficitur enim. Aliquam ut euismod neque.
              </p>
            </Flex>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Headings</H2>
          <Flex row justify='evenly'>
              <H1>Heading 1</H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <H4>Heading 4</H4>
              <H5>Heading 5</H5>
              <H6>Heading 6</H6>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Highlights</H2>
          <Flex row justify='evenly'>
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

        <Flex align='center'>
          <H2>Icons</H2>
          <Flex align='center' row justify='center' wrap>
            {icons.map((icon, index) => {
              // We do this small hack in order to showcase the different sizes, this is
              // for demonstration purposes only.
              var size
              if (index % 4 === 0) size = 'xl' as const
              else if (index % 3 === 0) size = 'lg' as const
              else if (index % 2 === 0) size = 'md' as const
              else size = 'sm' as const

              return (
                <Flex align='center' justify='center' key={index} style={{flexBasis: '4rem'}}>
                  <Icon name={icon as Icons} size={size} />
                  <div>{icon}</div>
                </Flex>
              )
          })}
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Images</H2>
          <Flex row justify='evenly'>
            <Flex align='center'>
              <H4>Contain</H4>
              <Image role='contain' src='/images/test.jpg' style={{height: '10rem', width: '20rem'}} />
            </Flex>
            <Flex align='center'>
              <H4>Cover</H4>
              <Image role='cover' src='/images/test.jpg' style={{height: '10rem', width: '20rem'}} />
            </Flex>
            <Flex align='center'>
              <H4>Fill</H4>
              <Image role='fill' src='/images/test.jpg' style={{height: '10rem', width: '20rem'}} />
            </Flex>
            <Flex align='center'>
              <H4>Responsive</H4>
              <Image src='/images/test.jpg' style={{width: '20rem'}} />
            </Flex>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Inputs</H2>
          <Flex row justify='evenly' wrap>
            <Flex align='center'>
              <H4>Checkbox</H4>
              <Checkbox handler={handleChange} name='checkbox'>I agree to terms</Checkbox>
            </Flex>
            <Flex align='center'>
              <H4>Email</H4>
              <Input handler={handleChange} name='email' type='email' />
            </Flex>
            <Flex align='center'>
              <H4>File</H4>
              <Input handler={handleChange} name='file' type='file' />
            </Flex>
            <Flex align='center'>
              <H4>Number</H4>
              <Input handler={handleChange} name='number' type='number' />
            </Flex>
            <Flex align='center'>
              <H4>Password</H4>
              <Input handler={handleChange} name='password' type='password' />
            </Flex>
            <Flex align='center'>
              <H4>Radio</H4>
              <Flex>
                <Radio handler={handleChange} name='radio' value='yes'>Agree</Radio>
                <Radio handler={handleChange} name='radio' value='no'>Disagree</Radio>
              </Flex>
            </Flex>
            <Flex align='center'>
              <H4>Select</H4>
              <Select handler={handleChange} name='select' value='three'>
                <Option value='one'>Option 1</Option>
                <Option value='two'>Option 2</Option>
                <Option value='three'>Option 3</Option>
                <Option value='four'>Option 4</Option>
                <Option value='five'>Option 5</Option>
              </Select>
            </Flex>
            <Flex align='center'>
              <H4>Telephone</H4>
              <Input handler={handleChange} name='telephone' type='tel' />
            </Flex>
            <Flex align='center'>
              <H4>Text</H4>
              <Input handler={handleChange} name='text' />
            </Flex>
            <Flex align='center'>
              <H4>Textarea</H4>
              <Textarea handler={handleChange} name='textarea' />
            </Flex>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Links</H2>
          <Flex row justify='evenly'>
            <Link href='/'>Default Link</Link>
            <Link href='/' open>New Window Link</Link>
            <Link href='/' style={{color: 'black', backgroundColor: 'red'}}>Custom Style</Link>
            <Link href='/' open style={{color: 'green', backgroundColor: 'yellow'}}>Custom Style New Window</Link>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Lists</H2>
          <Flex row justify='evenly'>
            <Flex align='center'>
              <H4>Ordered</H4>
              <List role='ordered'>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
                <ListItem>Item 5</ListItem>
              </List>
            </Flex>
            <Flex align='center'>
              <H4>Unordered</H4>
              <List role='unordered'>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
                <ListItem>Item 5</ListItem>
              </List>
            </Flex>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Texts</H2>
          <Flex row justify='evenly' wrap>
            <Flex align='center'>
              <H4>Default</H4>
              <Text>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Bold</H4>
              <Text bold>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Capitalize</H4>
              <Text capitalize>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Italic</H4>
              <Text italic>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Legal</H4>
              <Text legal>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Lowercase</H4>
              <Text lowercase>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Strikethrough</H4>
              <Text strikethrough>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Subscript</H4>
              <Text>Aliquam vitae neque<Text subscript>log n</Text> at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Superscript</H4>
              <Text>Aliquam vitae neque<Text superscript>(xy)</Text> at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Underline</H4>
              <Text underline>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Uppercase</H4>
              <Text uppercase>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Custom Style</H4>
              <Text style={{color: 'orange'}}>Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
            <Flex align='center'>
              <H4>Context</H4>
              <Text context='danger'>Danger - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text context='info'>Info - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text context='success'>Success - Aliquam vitae neque at urna convallis molestie.</Text>
              <Text context='warning'>Warning - Aliquam vitae neque at urna convallis molestie.</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Tooltips</H2>
          <Flex row gap='4rem' justify='evenly'>
            <Flex align='center'>
              <H4>Default</H4>
              <Tooltip message='Nothing special here'>
                No position
              </Tooltip>
            </Flex>
            <Flex align='center'>
              <H4>Danger</H4>
              <Tooltip context='danger' message='Oh no, we are in trouble' position='top'>
                Position top
              </Tooltip>
            </Flex>
            <Flex align='center'>
              <H4>Info</H4>
              <Tooltip context='info' message='For your information' position='right'>
                Position right
              </Tooltip>
            </Flex>
            <Flex align='center'>
              <H4>Success</H4>
              <Tooltip context='success' message='Congratulations, we did it' position='bottom'>
                Position bottom
              </Tooltip>
            </Flex>
            <Flex align='center'>
              <H4>Warning</H4>
              <Tooltip context='warning' message='You should keep an eye out' position='left'>
                Position left
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>

        <H1>Components</H1>
        <Flex align='center'>
          <H2>Forms</H2>
          <Form fields={fields} handler={handleSubmit} />
        </Flex>

        <Flex align='center'>
          <H2>Heros</H2>
        </Flex>

        <Flex align='center'>
          <H2>Modals</H2>
        </Flex>

        <Flex align='center'>
          <H2>Navigation</H2>
          <Navigation logo='/images/logo.png'>
            <NavigationLink href='/'>Link 1</NavigationLink>
            <NavigationLink href='/'>Link 2</NavigationLink>
            <NavigationLink href='/'>Link 3</NavigationLink>
            <NavigationLink href='/'>Link 4</NavigationLink>
          </Navigation>
        </Flex>

        <Flex align='center'>
          <H2>Notifications</H2>
          <Flex align='center' justify='center' wrap>
            <Notification context='danger'>There was something wrong.</Notification>
            <Notification context='info'>This is for your information.</Notification>
            <Notification context='success'>Whatever you did worked!</Notification>
            <Notification context='warning'>Next time this might not work.</Notification>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Pagination</H2>
        </Flex>

        <Flex align='center'>
          <H2>Table</H2>
          <Table cols={cols} rows={rows} />
        </Flex>

        <H1>Containers</H1>
        <Flex align='center'>
          <H2>Accordion</H2>
        </Flex>

        <Flex align='center'>
          <H2>Cards</H2>
          <Flex align='center' justify='evenly' row>
            <Card style={{padding: '1rem'}}>
              Sed eu tempor massa. Pellentesque vel mauris efficitur, feugiat massa sit amet, commodo erat. Integer tristique, mauris non luctus elementum, lectus urna faucibus urna, vel convallis sapien dui vitae nibh.
            </Card>
            <Card>
              <Flex full row>
                <Background>
                  <Flex gap={0} justify='center'>
                    <H2>Step 1</H2>
                    <Text>Do something</Text>
                    <center><Icon name='lock' size='xl' /></center>
                  </Flex>
                </Background>
                <Flex align='center' full justify='center'>
                  Integer tristique, mauris non luctus elementum, lectus urna faucibus urna, vel convallis sapien dui vitae nibh.
                </Flex>
              </Flex>
            </Card>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Carousel</H2>
        </Flex>

        <Flex align='center'>
          <H2>Menu</H2>
        </Flex>

        <Flex align='center'>
          <H2>Schumer</H2>
        </Flex>

        <Flex align='center'>
          <H2>Stepper</H2>
        </Flex>

        <H1>Layouts</H1>
        <Flex align='center'>
          <H2>Flex</H2>
          <Flex align='center' justify='center'>
            <H3>Column</H3>
            <H4>Align</H4>
            <Flex align='center' justify='center' row wrap>
              <Flex align='start' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Start</Text>
              </Flex>
              <Flex align='center' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Center</Text>
              </Flex>
              <Flex align='end' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>End</Text>
              </Flex>
              <Flex align='stretch' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Stretch</Text>
              </Flex>
            </Flex>
            <H4>Justify</H4>
            <Flex align='center' justify='center' row wrap>
              <Flex align='center' justify='start' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Start</Text>
              </Flex>
              <Flex align='center' justify='center' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Center</Text>
              </Flex>
              <Flex align='center' justify='end' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>End</Text>
              </Flex>
              <Flex align='center' justify='around' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Around</Text>
                <Text style={flexDemoCellStyle}>Around</Text>
                <Text style={flexDemoCellStyle}>Around</Text>
              </Flex>
              <Flex align='center' justify='between' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Between</Text>
                <Text style={flexDemoCellStyle}>Between</Text>
                <Text style={flexDemoCellStyle}>Between</Text>
              </Flex>
              <Flex align='center' justify='evenly' style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Evenly</Text>
                <Text style={flexDemoCellStyle}>Evenly</Text>
                <Text style={flexDemoCellStyle}>Evenly</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex align='center' justify='center'>
            <H3>Row</H3>
            <H4>Align</H4>
            <Flex align='center' justify='center' row wrap>
              <Flex align='start' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Start</Text>
              </Flex>
              <Flex align='center' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Center</Text>
              </Flex>
              <Flex align='end' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>End</Text>
              </Flex>
              <Flex align='stretch' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Stretch</Text>
              </Flex>
            </Flex>
            <H4>Justify</H4>
            <Flex align='center' justify='center' row wrap>
              <Flex align='center' justify='start' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Start</Text>
              </Flex>
              <Flex align='center' justify='center' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Center</Text>
              </Flex>
              <Flex align='center' justify='end' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>End</Text>
              </Flex>
              <Flex align='center' justify='around' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Around</Text>
                <Text style={flexDemoCellStyle}>Around</Text>
                <Text style={flexDemoCellStyle}>Around</Text>
              </Flex>
              <Flex align='center' justify='between' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Between</Text>
                <Text style={flexDemoCellStyle}>Between</Text>
                <Text style={flexDemoCellStyle}>Between</Text>
              </Flex>
              <Flex align='center' justify='evenly' row style={flexDemoStyle}>
                <Text style={flexDemoCellStyle}>Evenly</Text>
                <Text style={flexDemoCellStyle}>Evenly</Text>
                <Text style={flexDemoCellStyle}>Evenly</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex align='center'>
          <H2>Grid</H2>
        </Flex>
      </Flex>
    </div>
  )
}

export default App
