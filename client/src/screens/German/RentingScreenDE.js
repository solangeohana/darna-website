import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// reactstrap components

import { Row, Col, Button, Container } from 'reactstrap'

// core components
import NavbarDe from 'components/German/NavbarDe'
import FooterDe from 'components/German/FooterDe'
import ImmoHeaderDe from 'components/German/ImmoHeaderDe'
import RentingObjectDE from 'components/German/RentingObjectDE'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { listRentings } from 'actions/rentingActions'

const RentingScreenDE = () => {
  const backgroundImage = 'url(' + require('assets/img/rent.jpg') + ')'
  const dispatch = useDispatch()

  const rentingList = useSelector((state) => state.rentingList)
  const { loading, error, rentings } = rentingList

  useEffect(() => {
    dispatch(listRentings())
    document.body.classList.add('profile-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('profile-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [dispatch])

  return (
    <>
      <NavbarDe />
      <div className='wrapper'>
        <ImmoHeaderDe title='MIETEN' imageUrl={backgroundImage} />
        <div className='section container'>
          <div className='button-container'>
            <a href='/en/contact'>
              <Button
                className='btn-round'
                color='info'
                type='button'
                size='lg'>
                Kontaktiere Uns
              </Button>
            </a>
          </div>
          <p className='content'>
            Du suchst eine Wohnung oder ein Haus zur Miete? Dir fehlen Zeit oder
            Energie, dich um Suche, Bewerbungen, Unterlagen und
            Besichtigungstermine usw. zu kümmern?
          </p>
          <p className='content'>
            Dann überlass’ uns die Arbeit und wir kümmern uns um alles für dich!
          </p>
          <p className='content'>
            Unser Team von Maklern erledigt die Arbeit gerne und verhilft Dir im
            Handumdrehen zur gewünschten Immobilie.
          </p>
          <p className='content text-justify'>
            Nimm einfach <a href='/de/kontakt'>Kontakt</a> mit uns auf und wir
            finden dir dein neues Zuhause.
          </p>
        </div>
        <div>
          <h3 className='title'>Neuesten Angebote</h3>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message color='danger'>{error}</Message>
          ) : (
            <Container>
              <Row>
                {rentings.map((renting) => (
                  <Col key={renting._id} md={4}>
                    <RentingObjectDE renting={renting} />
                  </Col>
                ))}
              </Row>
            </Container>
          )}
        </div>
        <FooterDe />
      </div>
    </>
  )
}

export default RentingScreenDE
