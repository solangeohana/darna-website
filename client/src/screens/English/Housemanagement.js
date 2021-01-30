import React, { useEffect } from 'react'
import NavbarFixed from 'components/English/NavbarFixed'
import MyFooter from 'components/English/MyFooter'
import { Link } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  Container,
  CardTitle,
  Col,
  Row,
} from 'reactstrap'

const Housemanagement = () => {
  useEffect(() => {
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <NavbarFixed />
      <div className='section'>
        <Container className='section'>
          <h3 className='text-center'>
            DARNA’s Services for Landlords & Housemanagements
          </h3>
          <br /> <br />
          <Row>
            <Col md={6}>
              <Card outline className='text-center'>
                <Link to={`/en/house-management/selling`}>
                  <CardTitle className='title'>SELLING Cooperation</CardTitle>
                </Link>
                <Link to={`/en/house-management/selling`}>
                  <CardImg
                    className='coverPhoto-card'
                    src='/images/sell1.png'
                    variant='bottom'
                  />
                </Link>
                <CardBody>
                  <p className='text-left'>
                    Do you know landlords who want to sell their property or
                    even think about it yourself? DARNA is happy to help! A team
                    of real estate professionals is working on promoting and
                    selling your property!
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card outline className='text-center'>
                <Link to={`/en/house-management/renting`}>
                  <CardTitle className='title'>
                    RENTING OUT Cooperation
                  </CardTitle>
                </Link>
                <Link to={`/en/house-management/renting`}>
                  <CardImg
                    className='coverPhoto-card'
                    src='/images/sell2.png'
                    variant='top'
                  />
                </Link>
                <CardBody>
                  <p className='text-left'>
                    The apartment is empty already, is being renovated or even
                    still inhabited by the current tenant? No worries — DARNA
                    finds you the perfect tenant!
                    <br />
                    DARNA's team is fast, professional yet very personal.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <MyFooter />
    </>
  )
}

export default Housemanagement
