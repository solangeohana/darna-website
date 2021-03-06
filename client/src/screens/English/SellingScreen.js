import React, { useEffect } from 'react'

// reactstrap components

import { Button, Container, ListGroupItem, ListGroup } from 'reactstrap'

// core components
import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import SellingPageHeader from 'components/English/SellingPageHeader'

const SellingPage = () => {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://slider.maklaro.com/src.latest.js'
      document.body.appendChild(script)
    }
    addScript()
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
              <Button
                className='btn-round'
                href='/en/contact'
                color='info'
                type='button'
                size='lg'>
                Contact Us
              </Button>
            </div>
            <br /> <br />
            <h3 className='text-center'>SELLING YOUR PROPERTY</h3>
            <Container className='col-md-6 '>
            <h3 className='title'>How you profit from DARNA’s Services</h3>
            <img src='/images/buy.png' className='coverPhoto-card' alt='buying'></img>
            <div className='dashboard-items'>
            <p>- Professional Evaluation of your property</p>
            <p>- Checking on all your documents</p>
            <p>
              - We’ll shoot great pictures and create a convincing Exposé for
              your property
            </p>
            <p>
              - We also take over the whole communication with interested
              parties, answer all possible questions and do also personal
              viewings as well as the negotiation of the price
            </p>
            <p>
              - Easy Sale of your property: We’re happy to take the workload
              from you
            </p>
            <p>
              - You’ll always have a direct contact and profit from our real
              estate network
            </p>
            <p>
              - Our motto: A successfull Sale with satisfaction of each party
              invovled
            </p>
            <Button
              href='/en/contact'
              className='btn-round dashboard-button'
              color='info'
              size='lg'>
              Contact Us
            </Button>
            <br/> <br/>
            </div>
            <ListGroup>
            <ListGroupItem>
            <h4 className='text-center'>
              CHECK THE VALUE OF YOUR PROPERTY YOURSELF:
            </h4>

            <div
              id='maklaro-slider-widget'
              data-partner-id='DARNAImmobilien'
              data-language='DE'
              data-type='evaluation'
              data-primary-color='#df16a9'
              data-lead-flow-code='DARNA'
              data-max-fullscreen-width='540'
              data-hide-fullscreen-on-start='1'>
              {' '}
            </div>
            </ListGroupItem>
            </ListGroup>
          </Container>
          </Container>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default SellingPage
