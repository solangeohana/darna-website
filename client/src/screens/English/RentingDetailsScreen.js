import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'reactstrap'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'
import Loader from 'components/Loader'
import Message from 'components/Message'
import { listRentingDetails } from 'actions/rentingActions'
import ImagesCarousel from 'components/ImagesCarousel'
import NavbarFixed from 'components/English/NavbarFixed'
import MyFooter from 'components/English/MyFooter'

const RentingDetailsScreen = ({ match }) => {
  const dispatch = useDispatch()

  const rentingDetails = useSelector((state) => state.rentingDetails)
  const { loading, error, renting } = rentingDetails

  const shareUrl = match.url
  const title = renting.title_en

  useEffect(() => {
    dispatch(listRentingDetails(match.params.id))
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
          <a href='/en/rent'>
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
                <h3 className='title'>{renting.name}</h3>
                <h4> {renting.title_en}</h4>
                {renting.available ? (
                  <h6>Available !</h6>
                ) : (
                  <h5>Recently rented out !</h5>
                )}
                <div>
                  <p>
                    <i className='now-ui-icons location_pin'></i>
                    {renting.location.address}, {renting.location.postalCode}{' '}
                    {renting.location.city}
                  </p>
                </div>
              </Col>
            </Row>
          )}
          <ImagesCarousel items={renting.images} />

          <Container>
            <div className='listing-features'>
              <div className='dashboard-button'>
                <Button className='btn-round' color='default' outline>
                  {renting.nbRooms} Rooms
                </Button>
              </div>
              <div className='dashboard-button'>
                <Button className='btn-round' color='default' outline>
                  {renting.sqm} sqm
                </Button>
              </div>
              {renting.fittedKitchen && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    Fitted Kitchen
                  </Button>
                </div>
              )}
              {renting.balcony && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    Balcony
                  </Button>
                </div>
              )}
              {renting.cellar && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    Cellar
                  </Button>
                </div>
              )}
              {renting.feature1_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {renting.feature1_en}
                  </Button>
                </div>
              )}
              {renting.feature2_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {renting.feature2_en}
                  </Button>
                </div>
              )}
            </div>
          </Container>
          <p className='listing-description'>{renting.description_en}</p>
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
        </Container>
      </div>
      <MyFooter/>
    </>
  )
}

export default RentingDetailsScreen
