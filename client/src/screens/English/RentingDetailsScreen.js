import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { listRentingDetails } from '../../actions/rentingActions'

const RentingDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();

  const rentingDetails = useSelector((state) => state.rentingDetails)
  const { loading, error, renting } = rentingDetails

  useEffect(() => {
    dispatch(listRentingDetails(match.params.id))
  }, [dispatch, match])

  return (
    <>
      <Link className='btn btn-light my-3' to='/en/rent'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message color='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={renting.coverPhoto} alt={renting.name} fluid />
          </Col>
          <p>
            <strong>Address:</strong>
            {renting.location.address}
          </p>
          {renting.available ? (
            <Col md={4}>Listing available</Col>
          ) : (
            <h5>rencently rented out !</h5>
          )}
          <Col md={6}>
            {renting.images.map((image, i) => (
              <Image key={i} src={image} alt={renting.name} fluid />
            ))}
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{renting.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item>{renting.title_en}</ListGroup.Item>
              <ListGroup.Item>{renting.description_en}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  )
}

export default RentingDetailsScreen
