import React, { useEffect } from 'react'
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap'

// core components
import NavbarFixedDE from 'components/German/NavbarFixedDE'
import FooterDe from 'components/German/FooterDe'
import PhotoshootCarousel from 'components/English/PhotoshootCarousel'

const CoopSellDE = () => {
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
      <NavbarFixedDE />
      <div className='wrapper section'>
        <div className='section'>
          <Container className='col-md-6'>
            <h3 className='title text-center'>
              So hilft Ihnen DARNA beim Verkauf
            </h3>
            <img
              src='/images/buy.png'
              className='coverPhoto-card'
              alt='verkaufen'></img>
            <div className='dashboard-items'>
              <p>- Professionelle Bewertung des Objekts </p>
              <p>- Prüfung aller Unterlagen für den Verkauf</p>
              <p>
                - Erstellung großartiger Fotos & Erstellung eines überzeugenden
                Exposés
              </p>
              <p>
                - Wir übernehmen den kompletten Kontakt mit Interessenten,
                beantworten alle Fragen, führen persönliche Besichtigungen durch
                und übernehmen die Kaufpreisverhandlung für Sie
              </p>
              <p>
                - Entspannter Verkauf: Wir übernehmen alle Aufgaben mit viel
                Freude
              </p>
              <p>
                - Sie haben einen direkten Ansprechpartner und profitieren von
                unserem Immobiliennetzwerk
              </p>
              <p>
                - Unsere Devise: Ein erfolgreicher Verkauf durch Zufriedenheit
                aller Beteiligten
              </p>
              <Button
                href='/de/kontakt'
                className='btn-round dashboard-button'
                color='info'
                size='lg'>
                Kontaktiere Uns
              </Button>
            </div>
            <PhotoshootCarousel title='Beispiel eines professionellen Fotoshootings' />
            <ListGroup>
              <ListGroupItem>
                <h4 className='text-center'>
                  SCHAUEN SIE ERST EINMAL SELBST, WELCHEN WERT IHRE IMMOBILIE
                  HAT:
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
              </ListGroupItem>
            </ListGroup>
          </Container>
        </div>
      </div>
      <FooterDe />
    </>
  )
}

export default CoopSellDE
