import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col, Button, Container } from 'reactstrap'

// core components
import NavbarDe from 'components/German/NavbarDe'
import FooterDe from 'components/German/FooterDe'
import ImmoHeaderDe from 'components/German/ImmoHeaderDe'
import BuyingObjectDE from 'components/German/BuyingObjectDE'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { listBuyings } from 'actions/buyingActions'

const BuyingPageDe = () => {
  const backgroundImage = 'url(' + require('assets/img/buying-header.jpg') + ')'
  const dispatch = useDispatch()

  const buyingList = useSelector((state) => state.buyingList)
  const { loading, error, buyings } = buyingList

  useEffect(() => {
    dispatch(listBuyings())
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
        <ImmoHeaderDe title='KAUFEN' imageUrl={backgroundImage} />
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
          <p className='content text-justify'>
            Es ist immer der richtige Moment, eine Immobilie zu kaufen…
            <br />
            <br />
            So wie die Quadratmeterpreise im Augenblick steigen, können wir
            sagen, dass deine Investition in eine Immobilie auf jeden Fall eine
            kluge Entscheidung ist. Wir helfen dir gerne bei der Suche nach dem
            geeigneten Objekt, in der richtigen Gegend und zum richtigen Preis.
            <br />
            <br />
            Bevor wir damit anfangen, finden wir heraus, wonach genau Du suchst:
            Die Art der Immobilie, den Zweck deiner Investition, dein Budget
            usw. - Sobald wir diese Informationen haben, bieten wir dir eine
            Immobilie an, die deinen Suchkriterien entspricht. Dank unserer
            umfangreichen Kontakte zu Maklern und Hausverwaltungen der Umgebung
            haben wir Zugriff auf Angebote, bevor sie online zu haben sind.
          </p>
          <p className='content text-justify'>
            {' '}
            <a href='/de/kontakt'>Kontaktiere</a> uns für die neuesten Angebote!
          </p>
        </div>
        <div>
          <h3 className='title'>Neueste Einträge</h3>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message color='danger'>{error}</Message>
          ) : (
            <Container>
              <Row>
                {buyings.map((buying) => (
                  <Col key={buying._id} md={4}>
                    <BuyingObjectDE buying={buying} />
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

export default BuyingPageDe
