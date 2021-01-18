import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from 'components/Message'
import Loader from 'components/Loader'
import NavbarAdmin from 'components/NavbarAdmin'
import MyFooter from 'components/English/MyFooter'

import { listCommercials, deleteCommercial, createCommercial } from 'actions/commercialActions'
import { COMMERCIAL_CREATE_RESET } from 'constants/commercialConstants'

const CommercialListScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const commercialList = useSelector((state) => state.commercialList)
  const { loading, error, commercials } = commercialList

  const commercialDelete = useSelector((state) => state.commercialDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = commercialDelete

  const commercialCreate = useSelector((state) => state.commercialCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    commercial: createdCommercial,
  } = commercialCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: COMMERCIAL_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      history.push('/en/admin/login')
    }

    if (successCreate) {
      history.push(`/en/admin/commercial/${createdCommercial._id}/edit`)
    } else {
      dispatch(listCommercials(''))
    }
  }, [dispatch, history, userInfo, successDelete, successCreate, createdCommercial])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure ?')) {
      dispatch(deleteCommercial(id))
    }
  }

  const createCommercialHandler = () => {
    dispatch(createCommercial())
  }

  return (
    <>
      <NavbarAdmin />
      <div
        className='section section-signup'
        style={{
          backgroundImage: 'url(' + require('assets/img/clouds.jpg') + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          minHeight: '900px',
        }}>
        <Container className='admintitles'>
          <Row>
            <Col>
              <h2>Commercial Objects</h2>
            </Col>
            <Col className='text-right'>
              <Button
                className='my-3'
                color='primary'
                onClick={createCommercialHandler}>
                <i className='fas fa-plus'></i> Create Commercial Object
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
                  {commercials.map((commercial) => (
                    <tr key={commercial._id}>
                      <td className='title'>{commercial.name}</td>
                      <td className='title'>{commercial.location.address}</td>
                      <td className='title'>{commercial.location.postalCode}</td>
                      <td className='title'>{commercial.sqm} sqm</td>
                      <td className='title'>{commercial.nbRooms}</td>
                      <td>
                        {commercial.available ? (
                          <i
                            className='fas fa-check'
                            style={{ color: 'green' }}></i>
                        ) : (
                          <i
                            className='fas fa-times'
                            style={{ color: 'red' }}></i>
                        )}
                      </td>
                      <td>
                        <LinkContainer to={`/en/admin/commercial/${commercial._id}/edit`}>
                          <Button color='primary' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>
                        <Button
                          color='danger'
                          className='btn-sm'
                          onClick={() => deleteHandler(commercial._id)}>
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
      <MyFooter />
    </>
  )
}

export default CommercialListScreen
