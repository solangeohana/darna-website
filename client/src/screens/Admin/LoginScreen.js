import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { login } from 'actions/userActions'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from 'reactstrap'

// core components

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  const { loading, error, userInfo } = userLogin

  const redirect = '/en/admin/dashboard'

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <div
        className='section section-signup'
        style={{
          backgroundImage: 'url(' + require('assets/img/bg11.jpg') + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          minHeight: '700px',
        }}>
        <Container>
          <Row>
            <Card className='card-signup' data-background-color='blue'>
              {error && <Message color='danger'>{error}</Message>}
              {loading && <Loader/>}
              <Form className='form' onSubmit={submitHandler}>
                <CardHeader className='text-center'>
                  <CardTitle className='title-up' tag='h3'>
                    LOGIN
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup className='no-border'>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <i className='now-ui-icons ui-1_email-85'></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type='email'
                      placeholder='Email...'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}></Input>
                  </InputGroup>

                  <InputGroup className='no-border'>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <i className='now-ui-icons objects_key-25'></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type='password'
                      placeholder='Password...'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}></Input>
                  </InputGroup>
                </CardBody>
                <CardFooter className='text-center'>
                  <Button
                    className='btn-neutral btn-round'
                    color='info'
                    type='submit'
                    size='lg'>
                    Log in
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className='col text-center'>
            <Button
              className='btn-round btn-white'
              color='info'
              to={redirect}
              outline
              size='lg'
              tag={Link}>
            Register
            </Button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default LoginScreen
