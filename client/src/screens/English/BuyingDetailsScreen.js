import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'reactstrap'
import NumberFormat from 'react-number-format'
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
import { listBuyingDetails } from 'actions/buyingActions'
import ImagesCarousel from 'components/ImagesCarousel'
import NavbarFixed from 'components/English/NavbarFixed'
import MyFooter from 'components/English/MyFooter'

const BuyingDetailsScreen = ({ match }) => {
  const dispatch = useDispatch()

  const buyingDetails = useSelector((state) => state.buyingDetails)
  const { loading, error, buying } = buyingDetails

  const shareUrl = match.url
  const title = buying.title_en

  useEffect(() => {
    dispatch(listBuyingDetails(match.params.id))
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
          <a href='/en/buy'>
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
                <h3 className='title'>{buying.name}</h3>
                <h4> {buying.title_en}</h4>
                {buying.available ? (
                  <h6>Available !</h6>
                ) : (
                  <h5>Recently Sold !</h5>
                )}
                <div>
                  <p>
                    <i className='now-ui-icons location_pin'></i>
                    {buying.location.address}, {buying.location.postalCode}{' '}
                    {buying.location.city}
                  </p>
                </div>
              </Col>
            </Row>
          )}
          <ImagesCarousel items={buying.images} />

          <Container>
            <div className='listing-features'>
              <div className='dashboard-button'>
                <Button className='btn-round' color='default' outline>
                  <NumberFormat
                    value={buying.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'€ '}
                  />
                </Button>
              </div>
              <div className='dashboard-button'>
                <Button className='btn-round' color='default' outline>
                  {buying.sqm} sqm
                </Button>
              </div>
              {buying.feature1_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature1_en}
                  </Button>
                </div>
              )}
              {buying.feature2_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature2_en}
                  </Button>
                </div>
              )}
              {buying.feature3_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature3_en}
                  </Button>
                </div>
              )}
              {buying.feature4_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature4_en}
                  </Button>
                </div>
              )}
              {buying.feature5_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature5_en}
                  </Button>
                </div>
              )}
              {buying.feature6_en && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature6_en}
                  </Button>
                </div>
              )}
            </div>
          </Container>
          <p className='listing-description'>{buying.description_en}</p>
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
      <MyFooter />
    </>
  )
}

export default BuyingDetailsScreen
