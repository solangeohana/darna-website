import React, { useEffect, createRef } from 'react'

// reactstrap components
import { Button, Container } from 'reactstrap'

// core components

const LandingPageHeader = () => {
  let pageHeader = createRef()

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)'
      }
      window.addEventListener('scroll', updateScroll)
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll)
      }
    }
  })
  return (
    <>
      <div className='page-header page-header-small'>
        <div
          className='page-header-image'
          style={{
            backgroundImage: 'url(' + require('assets/img/bg-home.jpeg') + ')',
          }}
          ref={pageHeader}></div>
        <div className='content-center'>
          <Container>
            <h4 className='title'>THE QUEER REAL ESTATE AGENCY</h4>
            <div className='text-center'>
              <a href='en/buy'>
                <Button
                  className='btn-round'
                  color='info'
                  type='button'
                  size='lg'>
                  BUY
                </Button>
              </a>
              <a href='en/sell'>
                <Button
                  className='btn-round'
                  color='info'
                  type='button'
                  size='lg'>
                  SELL
                </Button>
              </a>
              <a href='en/rent'>
                <Button
                  className='btn-round'
                  color='info'
                  type='button'
                  size='lg'>
                  RENT
                </Button>
              </a>
              <a href='en/commercial'>
                <Button
                  className='btn-round'
                  color='info'
                  type='button'
                  size='lg'>
                  COMMERCIAL
                </Button>
              </a>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default LandingPageHeader
