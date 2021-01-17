import React, { useEffect } from 'react'

// reactstrap components

import { Button, Container, Row, Col } from 'reactstrap'

// core components
import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import SellingPageHeader from 'components/English/SellingPageHeader'
import PhotoshootCarousel from 'components/English/PhotoshootCarousel'

const SellingPage = () => {
    
  useEffect(() => {
    document.body.classList.add('profile-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('profile-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <MyNavbar />
      <div className='wrapper'>
        <SellingPageHeader />
        <div className='section'>
          <Container>
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
            <h3 className='title'>Selling your property</h3>

            <div className='separator separator-primary'></div>
            <div className='section-story-overview'>
              <Row>
                <Col md='6'>
                  <div
                    className='image-container'
                    style={{
                      backgroundImage:
                        'url(' + require('assets/img/buy.png') + ')',
                    }}></div>
                </Col>

                <Col md='5'>
                  <br />
                  <p className='content'>
                    Selling your property is a sensitive and serious topic. If
                    you are thinking of selling your property, you should have a
                    trustworthy professional, who knows the market, obtains the
                    Know-How and passionately works on setting a smart strategic
                    plan for the sale of your property.{' '}
                  </p>
                  <p>
                    {' '}
                    <br />
                    At DARNA, we expertise in selling properties and
                    passionately work together with our clients, supporting you
                    with a fair and a transparent service.{' '}
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className='section section-team text-center'>
            <Container>
              <h4 className='title'>The 6 steps of selling your property :</h4>
              <div className='team'>
                <Row>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>1. Free Property Evaluation</h4>
                      <p className='content'>
                        We are going to evaluate the current value fo your
                        property - quick and without any obligation. Afterward
                        you’ll receive a handmade property evaluation that is
                        specifically made for your object due to the current
                        market situation.
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>2. Assignment of Mission</h4>
                      <p className='content'>
                        Afterwards, we start preparing the right marketing
                        strategy with a professional photoshoot to represent
                        your property in its best way for the Exposé
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>3. Start of Sales & Advertising</h4>
                      <p className='content'>
                        We send the Exposé to preselected clients by E-Mail. We
                        place the object on various platforms as well as on our
                        Website. Each object has its own, personalizes marketing
                        strategy to guarantee you the best selling price. While
                        doing that, we always keep you in the loop.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>4. Reservation Agreement</h4>
                      <p className='content'>
                        After we inspected the property with all prospective
                        buyers we discuss the processing of the sale and a
                        reservation agreement is going to be signed. We stop
                        advertising the object and start with the next steps to
                        prepare the purchase.
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>5. Purchase Agreement</h4>
                      <p className='content'>
                        The notary of the buyer will create the first draft of
                        the purchase contract and send it to all parties. We are
                        here for you to answer all your questions and we’re
                        happy to set up the notary appointment for you.
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>6. Notarization</h4>
                      <p className='content'>
                        The sale is certified by the notary and an appointment
                        for the key handover will be set. 6-8 weeks after
                        signing the purchase contract, you will be asked by the
                        notary to pay the full purchase price to the seller. The
                        handover takes place a few weeks later and the process
                        is complete.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <Container>
              <PhotoshootCarousel />
            </Container>
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default SellingPage
