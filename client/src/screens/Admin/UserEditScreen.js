import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button, Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { getUserDetails, updateUser } from 'actions/userActions'
import { USER_UPDATE_RESET } from 'constants/userConstants'

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      history.push('/en/admin/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, history, userId, user, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: userId, name, email, isAdmin }))
  }

  return (
    <>
      <Link to='/en/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <Container>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
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

            <FormGroup check>
              <Label check>
                <Input
                  id='isAdmin'
                  type='checkbox'
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}></Input>{' '}
                <span className='form-check-sign'></span>
                Admin
              </Label>
            </FormGroup>

            <Button type='submit' color='primary'>
              Update
            </Button>
          </Form>
        )}
      </Container>
    </>
  )
}

export default UserEditScreen

//         {loadingUpdate && <Loader />}   ==> if loading update is true, show Loader
