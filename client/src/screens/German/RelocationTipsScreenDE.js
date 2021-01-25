import React, { useEffect } from 'react'
import NavbarFixedDE from 'components/German/NavbarFixedDE'
import FooterDe from 'components/German/FooterDe'
import {
  ListGroup,
  ListGroupItem,
  Container,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Row,
  Col,
} from 'reactstrap'

const RelocationTipsScreenDE = () => {
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
        className='section text-center'
        style={{
          minHeight: '900px',
        }}>
        <Container>
          <ListGroup className='section'>
            <ListGroupItem>
              <ListGroupItemHeading>
                <a href='https://partnerprogramm.immowelt.de/go.cgi?pid=160&wmid=80&cpid=1&prid=1&subid=&target=schufa_page'>
                  <img
                    src='/images/schufa-logo.png'
                    alt='schufa'
                    height='60px'></img>
                </a>
              </ListGroupItemHeading>
              <ListGroupItemText>
                Eines der wichtigsten Dokumente, das jeder Vermieter während der
                Wohnungssuche anfordern wird, ist eine aktuelle
                Kreditauskunftsbescheinigung oder eine Schufa Bonitätsauskunft.
                <br />
                <br />
                <Button
                  className='btn-round'
                  color='default'
                  size='lg'
                  href='https://partnerprogramm.immowelt.de/go.cgi?pid=160&wmid=80&cpid=1&prid=1&subid=&target=schufa_page'>
                  Holen Sie sich Ihre SCHUFA-Auskunft
                </Button>
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem>
              <h5 className='title'>WAHL DER DIENSTLEISTER</h5>
              <ListGroupItemText>
                Haben Sie Ihren Stromversorger ausgewählt? Welche Art von
                Dienstleister suchen Sie für Ihre neue Immobilie? Sie können
                sich bei der Auswahl Ihres nächsten Strom-, Gas- oder
                Internet-DSL-Anbieters über unsere verschiedenen Dienstleister
                informieren und den besten Anbieter für SIE auswählen!
              </ListGroupItemText>
              <Row>
                <Col md={4}>
                  <img
                    src='/images/check24-1.png'
                    alt='check24'
                    height='180px'
                    width='auto'
                  />
                </Col>
                <Col md={4}>
                  <img
                    src='/images/check24-2.png'
                    alt='check24-2'
                    height='180px'
                    width='auto'
                  />
                </Col>
                <Col md={4}>
                  <img
                    src='/images/check24-3.png'
                    alt='check24-3'
                    height='180px'
                    width='auto'
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Button
                    href='https://www.awin1.com/cread.php?awinmid=9364&awinaffid=753739&clickref=pref1&ued=https%3A%2F%2Fwww.check24.net%2Fstromanbieter-wechseln%2F'
                    className='btn-round buttons-ad'
                    size='sm'
                    color='primary'>
                    Besuchen
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    href='https://www.awin1.com/cread.php?awinmid=9364&awinaffid=753739&clickref=&ued=https%3A%2F%2Fwww.check24.net%2Fgasanbieter-wechseln%2F'
                    className='btn-round buttons-ad'
                    size='sm'
                    color='primary'>
                    Besuchen
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    href='https://www.awin1.com/cread.php?awinmid=9364&awinaffid=753739&clickref=&ued=https%3A%2F%2Fwww.check24.de%2Fdsl%2F'
                    className='btn-round buttons-ad'
                    size='sm'
                    color='primary'>
                    Besuchen
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>

          <ListGroup className='section'>
            <ListGroupItem>
              <h5 className='title'> MIETKAUTION </h5>
              <ListGroupItemText>
                Es gibt viele Möglichkeiten, wie man seine Kaution für die
                Immobilie bezahlen kann, die man mieten möchte. Wenn Sie es
                vorziehen, Ihre Geldliquidität hoch zu halten, empfehlen wir
                Ihnen, die Deutsche Kautionkasse zu beantragen, die sich um Ihre
                Kaution kümmert, die für Ihren Vermieter oder Ihre Vermieterin
                gezahlt wird.
              </ListGroupItemText>
              <img
                src='/images/mietkaution.png'
                alt='mietkaution'
                height='200px'
                width='auto'></img>
              <Button
                href='https://www.awin1.com/cread.php?s=2052056&v=10963&q=323863&r=753739'
                className='btn-round buttons-ad'
                size='sm'
                color='danger'>
                Besuchen
              </Button>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem>
              <h5 className='title'>LIEBE DEIN ZUHAUSE MIT HOME24</h5>
              <ListGroupItemText>
                Jedes Zuhause braucht schöne Möbel sowie persönliche und
                individuelle Accessoires. Füllen Sie Ihr Zuhause mit
                wundervollen Möbeln und Accessoires aus einem unserer
                Lieblingsmöbelgeschäfte - Home24.
              </ListGroupItemText>
              <img
                src='/images/home-24.png'
                alt='home24'
                height='80px'
                width='auto'></img>
              <Button
                href='https://www.awin1.com/cread.php?s=2052056&v=10963&q=323863&r=753739'
                className='btn-round buttons-ad'
                size='sm'
                color='default'>
                Besuchen
              </Button>
            </ListGroupItem>
          </ListGroup>
          <br />
          <br />
          <br />
          <h4>In unserem Blog finden Sie ausführliche Tipps!</h4>
          <Button color='warning' href='/en/blog'>
            BLOG
          </Button>
        </Container>
      </div>
      <FooterDe />
    </>
  )
}

export default RelocationTipsScreenDE
