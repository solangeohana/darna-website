import React, { useEffect } from 'react'
import { Button, Container } from 'reactstrap'

// core components
import NavbarFixed from 'components/English/NavbarFixed'
import MyFooter from 'components/English/MyFooter'
import PhotoshootCarousel from 'components/English/PhotoshootCarousel'

const CoopSell = () => {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://slider.maklaro.com/src.latest.js'
      document.body.appendChild(script)
    }
    addScript()
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <NavbarFixed />
      <div className='wrapper section'>
        <div className='section'>
          <Container className='col-md-6 '>
            <h3 className='title'>How you profit from DARNA’s Services</h3>
            <img src='/images/buy.png' className='coverPhoto-card' alt='buying'></img>
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
              className='btn-round'
              color='info'
              size='lg'>
              Contact Us
            </Button>
            <br />
            <PhotoshootCarousel title='Example of a professional photoshoot' />
            
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
          </Container>
        </div>

        <MyFooter />
      </div>
    </>
  )
}

export default CoopSell
