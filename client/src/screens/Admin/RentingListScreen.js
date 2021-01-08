import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import {
  listRentings,
  deleteRenting,
  createRenting,
} from '../../actions/rentingActions'
import { RENTING_CREATE_RESET } from '../../constants/rentingConstants'

const RentingListScreen = ({ history, match }) => {

  
  const dispatch = useDispatch()

  const rentingList = useSelector((state) => state.rentingList)
  const { loading, error, rentings } = rentingList

  const rentingDelete = useSelector((state) => state.rentingDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = rentingDelete

  const rentingCreate = useSelector((state) => state.rentingCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    renting: createdRenting,
  } = rentingCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: RENTING_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/rent/${createdRenting._id}/edit`)
    } else {
      dispatch(listRentings)    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdRenting,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure ?')) {
      dispatch(deleteRenting(id))
    }
  }

  const createRentingHandler = () => {
    dispatch(createRenting())
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Renting Objects:</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createRentingHandler}>
            <i className='fas fa-plus'></i> Create Renting Object
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message color='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>NAME</th>
                <th>COVER PHOTO</th>
                <th>SQM</th>
                <th>ROOMS</th>
                <th>AVAILABLE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rentings.map((renting) => (
                <tr key={renting._id}>
                  <td>{renting.name}</td>
                  <td>{renting.coverPhoto}kfkf</td>
                  <td>{renting.sqm}lalala</td>
                  <td>{renting.nbRooms}</td>
                  <td>{renting.available}</td>
                  <td>
                    <LinkContainer to={`/admin/rent/${renting._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(renting._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default RentingListScreen

