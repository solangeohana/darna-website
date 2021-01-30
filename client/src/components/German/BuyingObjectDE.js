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
import NumberFormat from 'react-number-format'

const BuyingObjectDE = ({ buying }) => {
  return (
    <Card outline className='text-center'>
      <Link to={`/de/kaufen/${buying._id}`}>
        <CardImg
          className='coverPhoto-card'
          src={buying.coverPhoto}
          variant='top'
        />
      </Link>
      <CardBody>
        <Link to={`/de/kaufen/${buying._id}`}>
          <CardTitle tag='h5'>{buying.name}</CardTitle>
          <CardSubtitle className='mb-2'>{buying.title_de} </CardSubtitle>
        </Link>
        <CardText className='description'>
          <i className='now-ui-icons location_pin'></i>{' '}
          {buying.location.address}, {buying.location.postalCode}{' '}
          {buying.location.city}
        </CardText>
        <CardText>
          {buying.sqm} qm | <NumberFormat
                    value={buying.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'€ '}
                  />
        </CardText>
        {buying.available ? (
          <CardText className='h6'>Derzeit Verfügbar</CardText>
        ) : (
          <CardText className='h6'>Vor Kurzem Verkauft !</CardText>
        )}
      </CardBody>
    </Card>
  )
}

export default BuyingObjectDE
