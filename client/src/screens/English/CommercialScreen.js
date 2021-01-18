import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col, Button, Container } from 'reactstrap'

// core components
import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import CommercialPageHeader from 'components/English/CommercialPageHeader'
import CommercialObject from 'components/English/CommercialObject'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { listCommercials } from 'actions/commercialActions'

const CommercialPage = () => {
  const dispatch = useDispatch()

  const commercialList = useSelector((state) => state.commercialList)
  const { loading, error, commercials } = commercialList

  useEffect(() => {
    dispatch(listCommercials())
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
        <CommercialPageHeader />
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
          <br /> <br /> <br />
          <p className='content text-center'>
            Looking for a commercial object to rent? Check our our latest
            listings!
          </p>
        </div>
        <div>
          <h3 className='title'>Latest Listings</h3> <br/> <br/>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message color='danger'>{error}</Message>
          ) : (
            <Container>
              <Row>
                {commercials.map((commercial) => (
                  <Col key={commercial._id} md={4}>
                    <CommercialObject commercial={commercial} />
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

export default CommercialPage
