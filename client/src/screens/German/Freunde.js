import React, { useEffect } from 'react'
import FooterDe from 'components/German/FooterDe'
import NavbarFixedDE from 'components/German/NavbarFixedDE'
import {
  ListGroup,
  ListGroupItem,
  Container,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap'

const Freunde = () => {
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
      <div
        className='section text-left'
        style={{
          minHeight: '900px',
        }}>
        <Container>
          <h1 className='section'>DARNAs Freunde</h1>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                <p>
                  <a
                    href='https://www.linkedin.com/in/solange-ohana/'
                    className='btn-link btn-warning'>
                    Solange Ohana, Web Entwicklung
                  </a>
                </p>
              </ListGroupItemHeading>
              <ListGroupItemText>
                <br /> Gefällt Ihnen unsere Website? <br />
                Möchten Sie eine schöne Plattform um Ihr Unternehmen zu
                repräsentieren? Voll personalisiert und anpassbar, keine Vorlagen.
                Ihrer Fantasie
                sind keine Grenzen gesetzt! <br />
                Sie finden Solange auf{' '}
                <a
                  href='https://www.linkedin.com/in/solange-ohana/'
                  className='btn-link btn-warning'>
                  LinkedIn
                </a>{' '}
                oder schreiben ihr eine Mail an{' '}
                <a
                  href='mailto:solangeohana@gmail.com'
                  className='btn-link btn-warning'>
                  solangeohana@gmail.com
                </a>
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
          <ListGroup className='section'>
            <ListGroupItem>
              <ListGroupItemHeading>
                <img
                  src='/images/AFP.png'
                  alt='AFP Photography'
                  height='150px'
                  width='auto'></img>
              </ListGroupItemHeading>
              <ListGroupItemText>
                Sie fragen sich, woher die schönen Bilder von DARNA kommen? Es
                ist die faszinierende Arbeit unserer lieben Freundin, der
                großartigen
                <a
                  href='https://www.andreaferrophoto.com/'
                  className='btn-link btn-warning'>
                  Fotografin Andrea Ferro,
                </a>{' '}
                die sich für alles begeistert, was mit Architektur, Design und
                Momenten des Geschichtenerzählens zu tun hat.
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>

          <ListGroup className='section'>
            <ListGroupItem>
              <ListGroupItemHeading>
                <img
                  src='/images/IMMS.png'
                  alt='IMMS'
                  height='150px'
                  width='auto'></img>
              </ListGroupItemHeading>
              <ListGroupItemText>
                <a
                  href='https://imms-immobilien.de/'
                  className='btn-link btn-warning'>
                  IMMS
                </a>{' '}
                ist DARNAs Immobilienpartner und zusammen vermieten und
                verkaufen wir die schönsten Objekte in Deutschland. Ein solides
                Unternehmen, welches den Komfort des Kunden an erste Stelle setzt.
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                <img
                  src='/images/Sandra.png'
                  alt='sandra coaching'
                  height='180px'
                  width='auto'></img>
              </ListGroupItemHeading>
              <ListGroupItemText>
                <a
                  href='https://www.approachyourcoach.com/'
                  className='btn-link btn-warning'>
                  Sandra - Approach Your Coach
                </a>
                <br />
                Lassen Sie uns über unsere eigene Entwicklung sprechen und
                sehen, wo Sie derzeit stehen und wo Sie sich verbessern können.
                Sprechen Sie mit unserem life coach Sandra und setzen Sie
                Ihre Ziele gemeinsam mit einem Fachmann um, der Ihnen gerne bei der
                Gestaltung Ihrer Erfolgsgeschichte hilft!
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                <img
                  src='/images/careship.png'
                  alt='careship'
                  height='80px'
                  width='auto'></img>
              </ListGroupItemHeading>

              <ListGroupItemText>
                Zusammen mit{' '}
                <a
                  href='https://www.careship.de/willkommen2'
                  className='btn-link btn-warning'>
                  Careship
                </a>{' '}
                bist du weniger allein! Careship soll älteren Menschen helfen,
                indem es ihre Lebensqualität verbessert. Sie bieten individuelle
                Pakete an, um alle Dienstleistungen zu kombinieren, die Sie
                wirklich benötigen, ohne zu viel zu bezahlen.
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </Container>
      </div>
      <FooterDe />
    </>
  )
}

export default Freunde
