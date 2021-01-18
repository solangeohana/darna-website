import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col, Button, Container } from 'reactstrap'


// core components
import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BuyingPageHeader from 'components/English/BuyingPageHeader'
import BuyingObject from 'components/English/BuyingObject'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { listBuyings } from 'actions/buyingActions'

const BuyingPage = () => {
  const dispatch = useDispatch()

  const buyingList = useSelector((state) => state.buyingList)
  const { loading, error, buyings } = buyingList

  useEffect(() => {
    dispatch(listBuyings())
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
        <BuyingPageHeader />
        <div className='section container'>
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
            <p className='content text-justify'>
              It’s always a good time to buy real estate…
              <br />
              <br />
              As prices per square meter keep rising, we can say that your
              investment in real estate is your smartest move for now. We are
              happy to help you find the property you are looking for, in the
              right area and at the right price.
              <br />
              <br />
              Prior to your search we find out what you are looking for, type of
              property, the purpose of your investment, budget, etc. and we will
              furnish you with the property that meets your criteria. Thanks to
              our extensive working relationship with many local real estate
              agents and house management companies, we always have our hands on
              listings even before they are put online.
            </p>
            <p className='content text-justify'>
            Get in <a href='/en/contact'>touch</a> for the latest listings !
          </p>
        </div>
        <div>
          <h3 className='title'>Latest Listings</h3>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message color='danger'>{error}</Message>
          ) : (
            <Container>
            <Row>
              {buyings.map((buying) => (
                <Col key={buying._id} md={4}>
                <BuyingObject buying={buying} />
                </Col>
              ))}
              </Row>
            </Container>
          )}
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default BuyingPage
