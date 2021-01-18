import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from 'components/Message'
import Loader from 'components/Loader'
import NavbarAdmin from 'components/NavbarAdmin'
import MyFooter from 'components/English/MyFooter'
import NumberFormat from 'react-number-format'

import { listBuyings, deleteBuying, createBuying } from 'actions/buyingActions'
import { BUYING_CREATE_RESET } from 'constants/buyingConstants'

const BuyingListScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const buyingList = useSelector((state) => state.buyingList)
  const { loading, error, buyings } = buyingList

  const buyingDelete = useSelector((state) => state.buyingDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = buyingDelete

  const buyingCreate = useSelector((state) => state.buyingCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    buying: createdBuying,
  } = buyingCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: BUYING_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      history.push('/en/admin/login')
    }

    if (successCreate) {
      history.push(`/en/admin/buy/${createdBuying._id}/edit`)
    } else {
      dispatch(listBuyings(''))
    }
  }, [dispatch, history, userInfo, successDelete, successCreate, createdBuying])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure ?')) {
      dispatch(deleteBuying(id))
    }
  }

  const createBuyingHandler = () => {
    dispatch(createBuying())
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
              <h2>Buying Objects</h2>
            </Col>
            <Col className='text-right'>
              <Button
                className='my-3'
                color='primary'
                onClick={createBuyingHandler}>
                <i className='fas fa-plus'></i> Create Buying Object
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
                    <th>PRICE</th>
                    <th>AVAILABLE</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {buyings.map((buying) => (
                    <tr key={buying._id}>
                      <td className='title'>{buying.name}</td>
                      <td className='title'>{buying.location.address}</td>
                      <td className='title'>{buying.location.postalCode}</td>
                      <td className='title'>{buying.sqm} sqm</td>
                      <td className='title'>
                        <NumberFormat
                          value={buying.price}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'€ '}
                        />
                      </td>
                      <td>
                        {buying.available ? (
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
                        <LinkContainer to={`/en/admin/buy/${buying._id}/edit`}>
                          <Button color='primary' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>
                        <Button
                          color='danger'
                          className='btn-sm'
                          onClick={() => deleteHandler(buying._id)}>
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

export default BuyingListScreen
