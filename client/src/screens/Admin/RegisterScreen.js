import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Container,
  Col,
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { register } from 'actions/userActions'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = '/en'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <>
      <div
        className='section section-signup'
        style={{
          backgroundImage: 'url(' + require('assets/img/marble-bg.jpeg') + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          minHeight: '700px',
        }}>
        <Container className='container col-4'>
          <h1>Create User</h1>
          {message && <Message color='danger'>{message}</Message>}
          {error && <Message color='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                id='name'
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label>Email Address</Label>
              <Input
                id='email'
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                id='confirmPassword'
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}></Input>
            </FormGroup>

            <Button type='submit' variant='primary'>
              Register
            </Button>
          </Form>

          <Row className='py-3'>
            <Col>
              Have an Account? <Link to={'/en/admin/login'}>Login</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default RegisterScreen
