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

const RentingObjectDE = ({ renting }) => {
  return (
    <Card outline className='text-center'>
      <Link to={`/de/mieten/${renting._id}`}>
        <CardImg
          className='coverPhoto-card'
          src={renting.coverPhoto}
          variant='top'
        />
      </Link>
      <CardBody>
        <Link to={`/de/mieten/${renting._id}`}>
          <CardTitle tag='h5'>{renting.name}</CardTitle>
          <CardSubtitle className='mb-2'>{renting.title_de} </CardSubtitle>
        </Link>
        <CardText className='description'>
          <i className='now-ui-icons location_pin'></i>{' '}
          {renting.location.address}, {renting.location.postalCode}{' '}
          {renting.location.city}
        </CardText>
        <CardText>
          {renting.nbRooms} Zimmer | {renting.sqm} qm
        </CardText>
        {renting.available ? (
          <CardText className='text-muted'>Derzeit Verfügbar</CardText>
        ) : (
          <CardText className='text-muted'>Vor Kurzem Vermietet !</CardText>
        )}
      </CardBody>
    </Card>
  )
}

export default RentingObjectDE
//format features
