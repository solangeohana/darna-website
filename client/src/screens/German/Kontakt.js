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
import NavbarFixedDE from 'components/German/NavbarFixedDE'
import FooterDe from 'components/German/FooterDe'
import Message from 'components/Message'

const Kontakt = ({ history }) => {
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
      history.push('/de')
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
      <NavbarFixedDE />
      <div className='wrapper'>
        <Container className='section container col-4'>
          <h4 className='section'>
            <strong>Interessieren Sie sich für DARNA?</strong> Nehmen Sie
            Kontakt mit uns auf und wir sind gleich bei Ihnen!
          </h4>
          <img
            src='/images/contact.png'
            alt='contact'
            height='250px'
            width='auto'></img>
          <Form onSubmit={sendEmail}>
            <FormGroup>
              <Label className='h6'>Interessiert an :</Label>
              <Input
                id='interest'
                type='text'
                name='interest'
                value={state.interest}
                placeholder='Mieten, Kaufen, Verkaufen, Gewerbe'
                onChange={onInputChange}
              />
            </FormGroup>
            <Row>
              <FormGroup className='col'>
                <Label className='h6'>Vorname</Label>
                <Input
                  id='firstName'
                  type='text'
                  name='firstName'
                  value={state.firstName}
                  placeholder='Vorname'
                  onChange={onInputChange}
                />
              </FormGroup>
              <FormGroup className='col'>
                <Label className='h6'>Nachname</Label>
                <Input
                  id='lastName'
                  type='text'
                  name='lastName'
                  value={state.lastName}
                  placeholder='Nachname'
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
                placeholder='Email'
                onChange={onInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label className='h6'>Telefonnummer</Label>
              <Input
                id='phoneNumber'
                type='text'
                name='phoneNumber'
                value={state.phoneNumber}
                placeholder='Telefonnummer'
                onChange={onInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label className='h6'>Nachricht</Label>
              <Input
                id='subject'
                type='textarea'
                name='message'
                value={state.message}
                rows='3'
                placeholder='Nachricht'
                onChange={onInputChange}
              />
            </FormGroup>
            {result && <Message>{result.message}</Message>}
            <Button color='primary' type='submit'>
              Senden
            </Button>
            <Button href='/de' color='warning'>
              Zurück
            </Button>
          </Form>
        </Container>

        <FooterDe />
      </div>
    </>
  )
}

export default Kontakt
