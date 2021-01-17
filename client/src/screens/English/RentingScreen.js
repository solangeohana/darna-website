import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// reactstrap components

import { Row, Col, Button, Container } from 'reactstrap'

// core components
import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import RentingPageHeader from 'components/English/RentingPageHeader'
import RentingObject from 'components/English/RentingObject'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { listRentings } from 'actions/rentingActions'

const RentingPage = () => {
  const dispatch = useDispatch()

  const rentingList = useSelector((state) => state.rentingList)
  const { loading, error, rentings } = rentingList

  useEffect(() => {
    dispatch(listRentings())
    document.body.classList.add('profile-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('profile-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [dispatch])

  return (
    <>
      <MyNavbar />
      <div className='wrapper'>
        <RentingPageHeader />
          <Container className='section'>
            <div className='button-container'>
              <a href='/en/contact'>
                <Button
                  className='btn-round'
                  color='info'
                  type='button'
                  size='lg'>
                  Contact Us
                </Button>
              </a>
            </div>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <p className='content'>
                  Looking for an apartment or a house to rent?
                  <br />
                  Don’t have enough time and energy to apply for those
                  properties and go through all the documentation approval
                  process, viewings, etc..?
                  <br />
                  <br />
                  Let us take all this hustle away and do that for you! Our team
                  of real estate agents will do all that work happily for you
                  and support you with your desired property in no time!
                </p>
              </Col>
            </Row>
            <p className='content'>
              Get in <a href='/en/contact'>touch</a> with us so we can find you
              a new home.
            </p>
          </Container>
        
        <div>
          <h3 className='title'>Latest Listings</h3>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message color='danger'>{error}</Message>
          ) : (
            <Row>
              {rentings.map((renting) => (
                <Col key={renting._id} sm={12} md={6} lg={4} xl={3}>
                  <RentingObject renting={renting} />
                </Col>
              ))}
            </Row>
          )}
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default RentingPage
