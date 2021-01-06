import React from 'react'

// reactstrap components

import {
  Button,
  Container,
} from 'reactstrap'

// core components
import MyNavbar from '../../components/English/MyNavbar'
import MyFooter from '../../components/English/MyFooter'
import BuyingPageHeader from '../../components/English/BuyingPageHeader'

function BuyingPage() {
  // const [pills, setPills] = React.useState('2')
  React.useEffect(() => {
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
        <BuyingPageHeader />
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
            <h5 className='description'>
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
            </h5>
            <h4 className='content'>
              Get in <a href='/en/contact'>touch</a> for our newest listings!
            </h4>
          </Container>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default BuyingPage
