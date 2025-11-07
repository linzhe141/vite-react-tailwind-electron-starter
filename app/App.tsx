import { useState } from "react"
import { Alert, Badge, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Divider, Input, Radio, Select, Switch, Textarea } from "./components/ui"

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [switchChecked, setSwitchChecked] = useState(false)
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(true)
  const [radio, setRadio] = useState('option1')
  const [showAlert, setShowAlert] = useState(true)

  const selectOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]

  return (
    <div className='min-h-screen bg-[#0a0a0a] p-8'>
      <div className='mx-auto max-w-6xl space-y-8'>
        {/* Header */}
        <div className='space-y-2 text-center'>
          <h1 className='text-4xl font-bold text-[#f5f5f5]'>
            UI Components Library
          </h1>
          <p className='text-[#a3a3a3]'>Dark Green Theme - React Components</p>
        </div>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <h2 className='text-2xl font-semibold text-[#f5f5f5]'>Buttons</h2>
          </CardHeader>
          <CardBody>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-3'>
                <Button variant='primary'>Primary</Button>
                <Button variant='secondary'>Secondary</Button>
                <Button variant='ghost'>Ghost</Button>
                <Button variant='danger'>Danger</Button>
                <Button variant='outline'>Outline</Button>
              </div>

              <Divider />

              <div className='flex flex-wrap items-center gap-3'>
                <Button variant='primary' size='sm'>
                  Small
                </Button>
                <Button variant='primary' size='md'>
                  Medium
                </Button>
                <Button variant='primary' size='lg'>
                  Large
                </Button>
                <Button variant='primary' size='xl'>
                  Extra Large
                </Button>
              </div>

              <Divider />

              <div className='flex flex-wrap gap-3'>
                <Button variant='primary' disabled>
                  Disabled
                </Button>
                <Button variant='secondary' disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <h2 className='text-2xl font-semibold text-[#f5f5f5]'>Badges</h2>
          </CardHeader>
          <CardBody>
            <div className='flex flex-wrap items-center gap-3'>
              <Badge variant='default'>Default</Badge>
              <Badge variant='primary'>Primary</Badge>
              <Badge variant='success'>Success</Badge>
              <Badge variant='warning'>Warning</Badge>
              <Badge variant='danger'>Danger</Badge>
              <Badge variant='info'>Info</Badge>
            </div>
          </CardBody>
        </Card>

        {/* Form Items */}
        <Card>
          <CardHeader>
            <h2 className='text-2xl font-semibold text-[#f5f5f5]'>
              Form Items
            </h2>
          </CardHeader>
          <CardBody>
            <div className='space-y-6'>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <Input
                  label='Email Address'
                  type='email'
                  placeholder='Enter your email'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  helperText="We'll never share your email."
                />

                <Input
                  label='Password'
                  type='password'
                  placeholder='Enter password'
                  error='Password must be at least 8 characters'
                />
              </div>

              <Textarea
                label='Description'
                placeholder='Write something...'
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                helperText='Maximum 500 characters'
              />

              <Select
                label='Framework'
                options={selectOptions}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                placeholder='Select a framework'
              />

              <div className='space-y-4'>
                <h3 className='text-lg font-medium text-[#f5f5f5]'>Switches</h3>
                <div className='space-y-3'>
                  <Switch
                    checked={switchChecked}
                    onChange={(e) => setSwitchChecked(e.target.checked)}
                    label='Enable notifications'
                  />
                  <Switch
                    checked={true}
                    onChange={() => {}}
                    label='Disabled switch'
                    disabled
                  />
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='text-lg font-medium text-[#f5f5f5]'>
                  Checkboxes
                </h3>
                <div className='space-y-3'>
                  <Checkbox
                    checked={checkbox1}
                    onChange={(e) => setCheckbox1(e.target.checked)}
                    label='Accept terms and conditions'
                  />
                  <Checkbox
                    checked={checkbox2}
                    onChange={(e) => setCheckbox2(e.target.checked)}
                    label='Subscribe to newsletter'
                  />
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    label='Disabled checkbox'
                    disabled
                  />
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='text-lg font-medium text-[#f5f5f5]'>
                  Radio Buttons
                </h3>
                <div className='space-y-3'>
                  <Radio
                    checked={radio === 'option1'}
                    onChange={() => setRadio('option1')}
                    label='Option 1'
                    name='radio-group'
                  />
                  <Radio
                    checked={radio === 'option2'}
                    onChange={() => setRadio('option2')}
                    label='Option 2'
                    name='radio-group'
                  />
                  <Radio
                    checked={radio === 'option3'}
                    onChange={() => setRadio('option3')}
                    label='Option 3'
                    name='radio-group'
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <h2 className='text-2xl font-semibold text-[#f5f5f5]'>Alerts</h2>
          </CardHeader>
          <CardBody>
            <div className='space-y-4'>
              {showAlert && (
                <Alert variant='info' onClose={() => setShowAlert(false)}>
                  <strong className='font-semibold'>Info:</strong> This is an
                  informational message.
                </Alert>
              )}
              <Alert variant='success'>
                <strong className='font-semibold'>Success:</strong> Your changes
                have been saved successfully.
              </Alert>
              <Alert variant='warning'>
                <strong className='font-semibold'>Warning:</strong> Please
                review your input before submitting.
              </Alert>
              <Alert variant='danger'>
                <strong className='font-semibold'>Error:</strong> An error
                occurred while processing your request.
              </Alert>
            </div>
          </CardBody>
        </Card>

        {/* Card Examples */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <Card hover>
            <CardHeader>
              <h3 className='text-lg font-semibold text-[#f5f5f5]'>
                Card Title
              </h3>
            </CardHeader>
            <CardBody>
              <p className='text-[#a3a3a3]'>
                This is a card with header and body. Hover over it to see the
                effect.
              </p>
            </CardBody>
          </Card>

          <Card hover>
            <CardBody>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-semibold text-[#f5f5f5]'>
                    Statistics
                  </h3>
                  <Badge variant='success'>+12%</Badge>
                </div>
                <p className='text-3xl font-bold text-[#00d367]'>1,234</p>
                <p className='text-sm text-[#737373]'>Total users this month</p>
              </div>
            </CardBody>
          </Card>

          <Card hover>
            <CardBody>
              <h3 className='mb-3 text-lg font-semibold text-[#f5f5f5]'>
                Quick Actions
              </h3>
              <div className='space-y-2'>
                <Button variant='ghost' className='w-full justify-start'>
                  View Profile
                </Button>
                <Button variant='ghost' className='w-full justify-start'>
                  Settings
                </Button>
                <Button variant='ghost' className='w-full justify-start'>
                  Logout
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Card with Footer */}
        <Card>
          <CardHeader>
            <h3 className='text-xl font-semibold text-[#f5f5f5]'>
              Complete Card Example
            </h3>
          </CardHeader>
          <CardBody>
            <p className='text-[#a3a3a3]'>
              This card demonstrates all three sections: header, body, and
              footer. It's perfect for dialogs, forms, or detailed information
              displays.
            </p>
          </CardBody>
          <CardFooter>
            <div className='flex justify-end gap-3'>
              <Button variant='ghost'>Cancel</Button>
              <Button variant='primary'>Confirm</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
