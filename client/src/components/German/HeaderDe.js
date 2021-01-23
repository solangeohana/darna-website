import React, { useEffect, createRef } from 'react'

// reactstrap components
import { Button, Container } from 'reactstrap'

// core components

const HeaderDe = () => {
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
            <h4 className='title'>DIE QUEERE IMMOBILIENAGENTUR</h4>
            <div className='text-center'>
              <a href='/de/kaufen'>
                <Button
                  className='btn-round'
                  color='info'
                  type='button'
                  size='lg'>
                  KAUFEN
                </Button>
              </a>
              <a href='/de/verkaufen'>
                <Button
                  className='btn-round'
                  color='info'
                  type='button'
                  size='lg'>
                  VERKAUFEN
                </Button>
              </a>
              <a href='/de/mieten'>
                <Button
                  className='btn-round'
                  color='info'
                  type='button'
                  size='lg'>
                  MIETEN
                </Button>
              </a>
              <a href='/de/gewerbe'>
                <Button
                  className='btn-round'
                  color='info'
                  type='button'
                  size='lg'>
                  GEWERBE
                </Button>
              </a>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default HeaderDe
