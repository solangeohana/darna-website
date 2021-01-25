import React, { useEffect } from 'react'

// reactstrap components

import { Button, Container, Row, Col } from 'reactstrap'

// core components
import NavbarDe from 'components/German/NavbarDe'
import FooterDe from 'components/German/FooterDe'
import ImmoHeaderDe from 'components/German/ImmoHeaderDe'
import PhotoshootCarousel from 'components/English/PhotoshootCarousel'

const SellingScreenDE = () => {
  const backgroundImage = 'url(' + require('assets/img/sell.jpg') + ')'
  useEffect(() => {
    document.body.classList.add('profile-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('profile-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <NavbarDe />
      <div className='wrapper'>
        <ImmoHeaderDe title='VERKAUFEN' imageUrl={backgroundImage} />
        <div className='section'>
          <Container>
            <div className='button-container'>
              <Button
                className='btn-round'
                href='/de/kontakt'
                color='info'
                type='button'
                size='lg'>
                Kontaktiere Uns
              </Button>
            </div>
            <br /> <br />
            <h3 className='text-center'>
              Du möchtest deine Immobilie verkaufen? Lass uns Dir zeigen, wie
              wir das machen.
            </h3>
            <div className='separator separator-primary'></div>
            <div className='section-story-overview'>
              <Row>
                <Col md='6'>
                  <div
                    className='image-container'
                    style={{
                      backgroundImage:
                        'url(' + require('assets/img/buy.png') + ')',
                    }}></div>
                </Col>

                <Col md='5'>
                  <br />
                  <p className='content'>
                    Der Immobilienverkauf ist ein sensibles und ernstzunehmendes
                    Thema. Wenn Du also an einen Verkauf denkst, benötigst Du
                    einen vertrauenswürdigen Partner, der mit hervorragender
                    Marktkenntnis, Know-How und Leidenschaft arbeitet und dein
                    Objekt optimal vermarktet.
                  </p>
                  <p>
                    All das, sowie transparenten und fairen Service vereinigen
                    sich bei dem Team von DARNA, um den besten Verkaufspreis für
                    Dich zu erzielen.
                  </p>
                  <p>Wie wir das Ganze schaffen, zeigen wir Dir hier:</p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className='section section-team text-center'>
            <Container>
              <div className='team'>
                <Row>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>1. Kostenlose Wertermittlung</h4>
                      <p className='content'>
                        Wir ermitteln den aktuellen Wert deiner Immobilie -
                        unverbindlich und schnell. Im Anschluss senden wir Dir
                        eine persönlich angefertigte Werteinschätzung über den
                        Verkaufspreis nach aktueller Marktlage zu.
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>
                        2. Zielsetzung & Auftragserteilung
                      </h4>
                      <p className='content'>
                        Wir besprechen unsere Werteinschätzung und der Vertrag
                        wird unterschrieben. Anschließend bereiten wir die
                        Vermarktung mit Hilfe eines Fotografen vor, um deine
                        Immobilie ideal im Exposé wiederzugeben.
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>
                        3. Vertriebsbeginn & Vermarktung
                      </h4>
                      <p className='content'>
                        Wir prüfen unseren Kundenstamm und versenden das Exposé
                        an alle Interessenten. Eine Platzierung auf
                        verschiedensten Immobilienportalen sowie unserer
                        Webseite folgt. Jede Immobilie erhält eine eigenst
                        angefertigte Vermarktungsstrategie um den bestmöglichen
                        Verkauf zu garantieren. Dabei halten wir Dich immer auf
                        dem aktuellen Stand!
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>4. Objekt - Reservierung</h4>
                      <p className='content'>
                        Nach den Besichtigungen kommt es früher oder später zu
                        einer Objekt-Reservierung des zukünftigen Käufers. Wir
                        stellen die Vermarktung ein und die nächsten Schritte
                        zum Kaufvertrag werden eingeleitet.
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>5. Kaufvertrag</h4>
                      <p className='content'>
                        Der Notar des Käufers wird den Kaufvertrag vorbereiten
                        und an alle Parteien verschicken, um Änderungswünsche
                        anzunehmen. Die offenen Fragen werden geklärt und der
                        Notartermin wird organisiert.
                      </p>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>6. Beurkundung</h4>
                      <p className='content'>
                        Der Verkauf wird vom Notar beurkundet und ein Termin für
                        die Schlüsselübergabe wird festgelegt. Einige Wochen
                        später erfolgt die Übergabe mit unserer Hilfe und der
                        Prozess ist abgeschlossen.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <Container>
              <PhotoshootCarousel title='Beispiel professioneller Fotos:' />
            </Container>
          </div>
          <Container className='offset-md-3'>
            <h4>Unsere Leistungen für Verkäufer im Überblick:</h4>
            <p>- Individuelle Immobilienbewertung mit Marktanalyse</p>
            <p>
              - Erstellen eines aussagekräftigen Exposés mit professionellem
              Fotografen
            </p>
            <p>- Erstellen von Inseraten auf Immobilienportalen und Website</p>
            <p>- Schnelle und transparente Kommunikation</p>
            <p>- Diskrete Vermittlung möglich</p>
            <p>- Bonitätsprüfung der Interessenten</p>
            <p>- Beratung nach dem Verkauf</p>
            <p>- Durchführung privater Besichtigungstermine</p>
            <p>- Vorbereitung und Koordinierung des Notartermins</p>
            <br /> <br />
            <h6>
              Dir gefällt, wie wir arbeiten? Dann lass’ uns dein Eigentum
              gemeinsam verkaufen!
            </h6>
            <Button
              className='btn-round'
              href='/de/kontakt'
              color='info'
              type='button'
              size='lg'>
              Kontakt
            </Button>
          </Container>
        </div>
        <FooterDe />
      </div>
    </>
  )
}

export default SellingScreenDE
