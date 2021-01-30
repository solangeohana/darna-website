import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col, Button, Container } from 'reactstrap'

// core components
import NavbarDe from 'components/German/NavbarDe'
import FooterDe from 'components/German/FooterDe'
import ImmoHeaderDe from 'components/German/ImmoHeaderDe'
import CommercialObjectDE from 'components/German/CommercialObjectDE'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { listCommercials } from 'actions/commercialActions'

const CommercialScreenDE = () => {
  const backgroundImage = 'url(' + require('assets/img/commercial.jpg') + ')'
  const dispatch = useDispatch()

  const commercialList = useSelector((state) => state.commercialList)
  const { loading, error, commercials } = commercialList

  useEffect(() => {
    dispatch(listCommercials())
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
        <ImmoHeaderDe title='GEWERBE OBJEKTE' imageUrl={backgroundImage} />
        <div className='section container'>
          <div className='button-container'>
            <a href='/de/kontakt'>
              <Button
                className='btn-round'
                color='info'
                type='button'
                size='lg'>
                Kontaktiere Uns
              </Button>
            </a>
          </div>
          <br /> <br /> <br />
          <p className='content text-center'>
            Sie suchen ein Gewerbe-Objekt zur Miete? Schauen Sie sich unsere
            neuesten Angebote an!
          </p>
        </div>
        <div>
          <h3 className='title'>DARNA's neueste Angebote</h3> <br /> <br />
          {loading ? (
            <Loader />
          ) : error ? (
            <Message color='danger'>{error}</Message>
          ) : (
            <Container>
              <Row>
                {commercials.map((commercial) => (
                  <Col key={commercial._id} md={4}>
                    <CommercialObjectDE commercial={commercial} />
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

export default CommercialScreenDE
