import React, { createRef, useEffect } from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components

const ImmoHeaderDe = ({ title, imageUrl }) => {
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
      <div className='page-header clear-filter page-header-small'>
        <div
          className='page-header-image'
          style={{
            backgroundImage: imageUrl
          }}
          ref={pageHeader}></div>
        <div className='content-center'>
          <Container>
            <h2 className='title'>{title}</h2>
          </Container>
        </div>
      </div>
    </>
  )
}

export default ImmoHeaderDe
