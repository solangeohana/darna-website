import React, { useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap'

import MyFooter from 'components/English/MyFooter'
import NavbarFixed from 'components/English/NavbarFixed'

const FeeStructure = () => {
  useEffect(() => {
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
          <div className='section section-signup text-center'>
            <Container>
              <h4 className='title'>FEE STRUCTURE</h4>
              <Container>
                <img src='/images/fee.jpg' alt='Piggy Bank' height='250px' />
              </Container>
              <div className='team'>
                <Row>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>Sales Service</h4>
                      <p className='content'>
                        6 % of Sales Price plus 16% VAT
                        <br />
                        (6,96 % incl. VAT)
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>Residential Rental Service</h4>
                      <p className='content'>
                        2 x Net Cold Rent
                        <br />
                        plus 16% VAT
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>Commercial Rental Service</h4>
                      <p className='content'>
                        3 x Net Cold Rent
                        <br />
                        plus 16% VAT
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        <MyFooter />
    </>
  )
}

export default FeeStructure
