import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Form,
  Button,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap'
import NavbarFixed from 'components/English/NavbarFixed'
import MyFooter from 'components/English/MyFooter'
import Message from 'components/Message'

const ContactScreen = () => {
  const [state, setState] = useState({
    interest: '',
    firstName: '',
    lastName: '',
    pronouns: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  const [result, setResult] = useState(null)

  useEffect(() => {
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])

  const sendEmail = (event) => {
    event.preventDefault()
    axios
      .post('/api/send', { ...state })
      .then((response) => {
        setResult(response.data)
        setState({
          interest: '',
          firstName: '',
          lastName: '',
          pronouns: '',
          email: '',
          phoneNumber: '',
          message: '',
        })
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong, try again later',
        })
      })
  }

  const onInputChange = (event) => {
    const { name, value } = event.target

    setState({
      ...state,
      [name]: value,
    })
  }

  return (
    <>
      <NavbarFixed />
      <div className='wrapper'>
        <Container className='section container col-4'>
          <h4 className='section'>
            <strong>Are you interested in DARNA? </strong>Get in touch with us
            and we'll be right there with you !
          </h4>
          <img
                src='/images/contact.png'
                alt='contact'
                height='250px'
                width='auto'></img>
          <Form onSubmit={sendEmail}>
            <FormGroup>
              <Label className='h6'>Interest</Label>
              <Input
                id='interest'
                type='text'
                name='interest'
                value={state.interest}
                required
                placeholder='Rent, Buy, Sell, Commercial'
                onChange={onInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label className='h6'>Pronouns</Label>
              <Input
                id='pronouns'
                type='text'
                name='pronouns'
                value={state.pronouns}
                required
                placeholder='He/him, She/her, They/them'
                onChange={onInputChange}
              />
            </FormGroup>

            <Row>
              <FormGroup className='col'>
                <Label className='h6'>First Name</Label>
                <Input
                  id='firstName'
                  type='text'
                  name='firstName'
                  value={state.firstName}
                  required
                  placeholder='Enter your first name'
                  onChange={onInputChange}
                />
              </FormGroup>
              <FormGroup className='col'>
                <Label className='h6'>Last Name</Label>
                <Input
                  id='lastName'
                  type='text'
                  name='lastName'
                  value={state.lastName}
                  required
                  placeholder='Enter your last name'
                  onChange={onInputChange}
                />
              </FormGroup>
            </Row>
            <FormGroup>
              <Label className='h6'>Email</Label>
              <Input
                id='email'
                type='text'
                name='email'
                value={state.email}
                required
                placeholder='Enter your email'
                onChange={onInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label className='h6'>Phone Number</Label>
              <Input
                id='phoneNumber'
                type='text'
                name='phoneNumber'
                value={state.phoneNumber}
                required
                placeholder='Enter your phone number'
                onChange={onInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label className='h6'>Message</Label>
              <Input
                id='subject'
                type='textarea'
                name='message'
                value={state.message}
                required
                rows='3'
                placeholder='Enter your message'
                onChange={onInputChange}
              />
            </FormGroup>
            {result && <Message>{result.message}</Message>}
            <Button color='primary' type='submit'>
              Submit
            </Button>
            <Button href='/en' color='warning'>
              Go Back
            </Button>
          </Form>
        </Container>

        <MyFooter />
      </div>
    </>
  )
}

export default ContactScreen
