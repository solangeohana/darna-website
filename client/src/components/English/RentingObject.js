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

const RentingObject = ({ renting }) => {
  return (
    <Card outline className='text-center'>
      <Link to={`/en/rent/${renting._id}`}>
        <CardImg
          className='coverPhoto-card'
          src={renting.coverPhoto}
          variant='top'
        />
      </Link>
      <CardBody>
        <Link to={`/en/rent/${renting._id}`}>
          <CardTitle tag='h5'>{renting.name}</CardTitle>
          <CardSubtitle className='mb-2'>{renting.title_en} </CardSubtitle>
        </Link>
        <CardText className='description'>
          <i className='now-ui-icons location_pin'></i>{' '}
          {renting.location.address}, {renting.location.postalCode}{' '}
          {renting.location.city}
        </CardText>
        <CardText>
          {renting.nbRooms} rooms | {renting.sqm} sqm
        </CardText>
        {renting.available ? (
          <CardText className='h6'>Available</CardText>
        ) : (
          <CardText className='h6'>Recently Rented Out !</CardText>
        )}
      </CardBody>
    </Card>
  )
}

export default RentingObject
//format features
