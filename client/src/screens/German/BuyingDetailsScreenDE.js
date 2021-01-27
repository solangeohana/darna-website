import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'reactstrap'
import NumberFormat from 'react-number-format'
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
import { listBuyingDetails } from 'actions/buyingActions'
import ImagesCarousel from 'components/ImagesCarousel'
import NavbarFixedDE from 'components/German/NavbarFixedDE'
import FooterDe from 'components/German/FooterDe'

const BuyingDetailsScreenDE = ({ match }) => {
  const dispatch = useDispatch()

  const buyingDetails = useSelector((state) => state.buyingDetails)
  const { loading, error, buying } = buyingDetails

  const shareUrl = match.url
  const title = buying.title_de

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
      <NavbarFixedDE />
      <div className='wrapper'>
        <Container className='listing-details-section'>
          <br />
          <br />
          <br />
          <a href='/de/kaufen'>
            <Button className='btn-round' color='default'>
              Zurück
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
                <h4> {buying.title_de}</h4>
                {buying.available ? (
                  <h6> Derzeit Verfügbar !</h6>
                ) : (
                  <h5>Vor Kurzem Verkauft !</h5>
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
                  {buying.sqm} qm
                </Button>
              </div>
              {buying.feature1_de && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature1_de}
                  </Button>
                </div>
              )}
              {buying.feature2_de && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature2_de}
                  </Button>
                </div>
              )}
              {buying.feature3_de && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature3_de}
                  </Button>
                </div>
              )}
              {buying.feature4_de && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature4_de}
                  </Button>
                </div>
              )}
              {buying.feature5_de && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature5_de}
                  </Button>
                </div>
              )}
              {buying.feature6_de && (
                <div className='dashboard-button'>
                  <Button className='btn-round' color='default' outline>
                    {buying.feature6_de}
                  </Button>
                </div>
              )}
            </div>
          </Container>
          <p className='listing-description'>{buying.description_de}</p>
          <div className='share'>
            <h6>
              Teilen <i className='fas fa-share-alt'></i>{' '}
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
      <FooterDe />
    </>
  )
}

export default BuyingDetailsScreenDE
