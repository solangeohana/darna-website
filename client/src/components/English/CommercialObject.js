import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from 'reactstrap'

const CommercialObject = ({ commercial }) => {
  return (
    <Card outline className='text-center'>
      <Link to={`/en/commercial/${commercial._id}`}>
        <CardImg
          className='coverPhoto-card'
          src={commercial.coverPhoto}
          variant='top'
        />
      </Link>
      <CardBody>
        <Link to={`/en/commercial/${commercial._id}`}>
          <CardTitle tag='h5'>{commercial.name}</CardTitle>
          <CardSubtitle className='mb-2'>{commercial.title_en} </CardSubtitle>
        </Link>
        <CardText className='description'>
          <i className='now-ui-icons location_pin'></i>{' '}
          {commercial.location.address}, {commercial.location.postalCode}{' '}
          {commercial.location.city}
        </CardText>
        <CardText>
          {commercial.nbRooms} rooms | {commercial.sqm} sqm
        </CardText>
        {commercial.available ? (
          <CardText className='h6'>Available</CardText>
        ) : (
          <CardText className='h6'>Recently Rented Out !</CardText>
        )}
      </CardBody>
    </Card>
  )
}

export default CommercialObject
