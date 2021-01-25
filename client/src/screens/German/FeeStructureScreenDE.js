import React, { useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap'

import NavbarFixedDE from 'components/German/NavbarFixedDE'
import FooterDe from 'components/German/FooterDe'

const FeeStructureScreenDE = () => {
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
      <NavbarFixedDE />
      <div className='section text-center'>
        <Container>
          <h4 className='title'>PREISLISTE</h4>
          <Container>
            <img src='/images/fee.jpg' alt='Piggy Bank' height='250px' />
          </Container>
          <div className='team'>
            <Row>
              <Col md='4'>
                <div className='team-player'>
                  <h4 className='title'>Kauf Service</h4>
                  <img src='/images/fee.png' alt='rainbow' height='25px'></img>
                  <p className='content'>
                    <br />
                    2,94 % vom Verkaufspreis zzgl. 19% MwSt.
                    <br />
                    (3,5 % inkl. MwSt.) für jeweils Käufer und Verkäufer
                  </p>
                </div>
              </Col>
              <Col md='4'>
                <div className='team-player'>
                  <h4 className='title'>Wohnungs-Vermietung</h4>
                  <img src='/images/fee.png' alt='rainbow' height='25px'></img>
                  <p className='content'>
                    <br />
                    2 x Nettokaltmiete zzgl. 19% MwSt.
                    <br />
                    (2,38 x Nettokaltmiete)
                  </p>
                </div>
              </Col>
              <Col md='4'>
                <div className='team-player'>
                  <h4 className='title'>Gewerbe-Vermietung</h4>
                  <img src='/images/fee.png' alt='rainbow' height='25px'></img>
                  <p className='content'>
                    <br />
                    3 x Nettokaltmiete zzgl. 19% MwSt.
                    <br />
                    (3,57 x Nettokaltmiete)
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <FooterDe />
    </>
  )
}

export default FeeStructureScreenDE
