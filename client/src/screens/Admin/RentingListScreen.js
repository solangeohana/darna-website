import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import NavbarAdmin from '../../components/NavbarAdmin'
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
      dispatch(listRentings(''))
    }
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
      <NavbarAdmin />
      <div className='section section-signup'
        style={{
          backgroundImage: 'url(' + require('assets/img/clouds.jpg') + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          minHeight: '700px',
        }}>
          <Container className='admintitles'>
            <Row>
              <Col>
                <h2>Renting Objects</h2>
              </Col>
              <Col className='text-right'>
                <Button
                  className='my-3'
                  color='primary'
                  onClick={createRentingHandler}>
                  <i className='fas fa-plus'></i> Create Renting Object
                </Button>
              </Col>
            </Row>
          </Container>
          {loadingDelete && <Loader />}
          {errorDelete && <Message color='danger'>{errorDelete}</Message>}
          {loadingCreate && <Loader />}
          {errorCreate && <Message color='danger'>{errorCreate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message color='danger'>{error}</Message>
          ) : (
            <>
              <Container>
                <Table striped bordered hover responsive className='table-sm'>
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>ADDRESS</th>
                      <th>ZIP</th>
                      <th>SQM</th>
                      <th>ROOMS</th>
                      <th>AVAILABLE</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentings.map((renting) => (
                      <tr key={renting._id}>
                        <td className='title'>{renting.name}</td>
                        <td className='title'>{renting.location.address}</td>
                        <td className='title'>{renting.location.postalCode}</td>
                        <td className='title'>{renting.sqm} sqm</td>
                        <td className='title'>{renting.nbRooms}</td>
                        <td>
                          {renting.available ? (
                            <i
                              className='fas fa-check'
                              style={{ color: 'green' }}></i>
                          ) : (
                            <i
                              className='fas fa-times'
                              style={{ color: 'red'}}></i>
                          )}
                        </td>
                        <td>
                          <LinkContainer to={`/admin/rent/${renting._id}/edit`}>
                            <Button color='primary' className='btn-sm'>
                              <i className='fas fa-edit'></i>
                            </Button>
                          </LinkContainer>
                          <Button
                            color='danger'
                            className='btn-sm'
                            onClick={() => deleteHandler(renting._id)}>
                            <i className='fas fa-trash'></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>
            </>
          )}
        </div>
    </>
  )
}

export default RentingListScreen
