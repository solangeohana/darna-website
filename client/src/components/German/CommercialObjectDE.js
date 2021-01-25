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

const CommercialObjectDE = ({ commercial }) => {
  return (
    <Card outline className='text-center'>
      <Link to={`/de/gewerbe/${commercial._id}`}>
        <CardImg
          className='coverPhoto-card'
          src={commercial.coverPhoto}
          variant='top'
        />
      </Link>
      <CardBody>
        <Link to={`/de/gewerbe/${commercial._id}`}>
          <CardTitle tag='h5'>{commercial.name}</CardTitle>
          <CardSubtitle className='mb-2'>{commercial.title_de} </CardSubtitle>
        </Link>
        <CardText className='description'>
          <i className='now-ui-icons location_pin'></i>{' '}
          {commercial.location.address}, {commercial.location.postalCode}{' '}
          {commercial.location.city}
        </CardText>
        <CardText>
          {commercial.nbRooms} Zimmer | {commercial.sqm} qm
        </CardText>
        {commercial.available ? (
          <CardText className='text-muted'>Derzeit Verfügbar</CardText>
        ) : (
          <CardText className='text-muted'>Vor Kurzem Vermietet !</CardText>
        )}
      </CardBody>
    </Card>
  )
}

export default CommercialObjectDE
