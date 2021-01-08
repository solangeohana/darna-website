import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const RentingObject = ({renting}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/en/rent/${renting._id}`}>
                <Card.Img src={renting.coverPhoto} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/en/rent/${renting._id}`}>
                    <Card.Title as='div'>
                        <strong>{renting.name}</strong>
                        <br/>
                        {renting.title}
                    </Card.Title>
                </Link>
            </Card.Body>
            <Card.Text as='div'>
                {renting.nbRooms} Rooms | {renting.sqm} sqm | {renting.location.address}, {renting.location.postalCode} {renting.location.city}
            </Card.Text>
        </Card>
    )
}

export default RentingObject