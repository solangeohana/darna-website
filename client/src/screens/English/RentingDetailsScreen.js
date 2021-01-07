import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { listRentingDetails } from '../../actions/rentingActions'

const RentingDetailsScreen = ({ history, match }) => {
  const dispatch = useDispatch()

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
          <Col md={6}>
            <Image src={renting.images[0]} alt={renting.name} fluid />
          </Col>
          {/* <Col md={6}>
            <Image src={renting.images[1]} alt={renting.name} fluid />
          </Col>
          <Col md={6}>
            <Image src={renting.images[2]} alt={renting.name} fluid />
          </Col> */}
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{renting.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item>{renting.title}</ListGroup.Item>
              <ListGroup.Item>
                 {renting.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  )
}

export default RentingDetailsScreen
