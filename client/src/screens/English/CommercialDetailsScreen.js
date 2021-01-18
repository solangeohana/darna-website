import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'reactstrap'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'
import Loader from 'components/Loader'
import Message from 'components/Message'
import { listCommercialDetails } from 'actions/commercialActions'
import ImagesCarousel from 'components/ImagesCarousel'
import NavbarFixed from 'components/English/NavbarFixed'
import MyFooter from 'components/English/MyFooter'

const CommercialDetailsScreen = ({ match }) => {
  const dispatch = useDispatch()

  const commercialDetails = useSelector((state) => state.commercialDetails)
  const { loading, error, commercial } = commercialDetails

  const shareUrl = match.url
  const title = commercial.title_en

  useEffect(() => {
    dispatch(listCommercialDetails(match.params.id))
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('sidebar-collapse')
    }
  }, [dispatch, match])

  return (
    <>
      <NavbarFixed />
      <div className='wrapper'>
        <Container className='listing-details-section'>
          <br />
          <br />
          <br />
          <a href='/en/commercial'>
            <Button className='btn-round' color='default'>
              Go Back
            </Button>
          </a>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message color='danger'>{error}</Message>
          ) : (
            <Row>
              <Col md={2}></Col>
              <Col>
                <h3 className='title'>{commercial.name}</h3>
                <h4> {commercial.title_en}</h4>
                {commercial.available ? (
                  <h6>Available !</h6>
                ) : (
                  <h5>Recently Rented Out !</h5>
                )}
                <div>
                  <p>
                    <i className='now-ui-icons location_pin'></i>
                    {commercial.location.address}, {commercial.location.postalCode}{' '}
                    {commercial.location.city}
                  </p>
                </div>
              </Col>
            </Row>
          )}
          <ImagesCarousel items={commercial.images} />

          <Container>
            <div className='listing-features'>
              <div className='dashboard-button'>
                <Button className='btn-round' color='default' outline>
                {commercial.nbRooms} Rooms
                </Button>
              </div>
              <div className='dashboard-button'>
                <Button className='btn-round' color='default' outline>
                  {commercial.sqm} sqm
                </Button>
              </div>
              {commercial.feature1_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {commercial.feature1_en}
                  </Button>
                </div>
              )}
              {commercial.feature2_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {commercial.feature2_en}
                  </Button>
                </div>
              )}
              {commercial.feature3_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {commercial.feature3_en}
                  </Button>
                </div>
              )}
              {commercial.feature4_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {commercial.feature4_en}
                  </Button>
                </div>
              )}
              {commercial.feature5_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {commercial.feature5_en}
                  </Button>
                </div>
              )}
              {commercial.feature6_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {commercial.feature6_en}
                  </Button>
                </div>
              )}
            </div>
          </Container>
          <p className='listing-description'>{commercial.description_en}</p>
          <div className='share'>
            <h6>
              Share <i className='fas fa-share-alt'></i>{' '}
            </h6>
          </div>

          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={title} separator=':: '>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <EmailShareButton url={shareUrl} subject={title} body='body'>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </Container>
      </div>
      <MyFooter />
    </>
  )
}

export default CommercialDetailsScreen
