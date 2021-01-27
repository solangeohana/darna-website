import React, { useEffect } from 'react'
import NavbarFixedDE from 'components/German/NavbarFixedDE'
import FooterDe from 'components/German/FooterDe'
import { Link } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  Container,
  CardTitle,
  Col,
  Row,
} from 'reactstrap'

const Hausverwaltung = () => {
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
      <div className='section'>
        <Container className='section'>
          <h3 className='text-center'>
            DARNA‘s Services für Eigentümer & Hausverwaltungen
          </h3>
          <br /> <br />
          <Row>
            <Col md={6}>
              <Card outline className='text-center'>
                <Link to={`/de/hausverwaltung/verkauf`}>
                  <CardTitle className='title'>
                    Zusammenarbeit beim VERKAUF
                  </CardTitle>
                </Link>
                <Link to={`/de/hausverwaltungen/verkauf`}>
                  <CardImg
                    className='coverPhoto-card'
                    src='/images/sell1.png'
                    variant='bottom'
                  />
                </Link>
                <CardBody>
                  <p className='text-left'>
                    Sie kennen Eigentümer oder überlegen selbst, ob Sie ihr
                    Objekt verkaufen möchten? DARNA ist für Sie da! Ein Team von
                    Immobilienexperten arbeitet an der Vermarktung und am
                    Verkauf Ihres Objekts
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card outline className='text-center'>
                <Link to={`/de/hausverwaltung/vermietung`}>
                  <CardTitle className='title'>
                    Zusammenarbeit bei der VERMIETUNG
                  </CardTitle>
                </Link>
                <Link to={`/de/hausverwaltungen/vermietung`}>
                  <CardImg
                    className='coverPhoto-card'
                    src='/images/sell2.png'
                    variant='top'
                  />
                </Link>
                <CardBody>
                  <p className='text-left'>
                    Die Wohnung steht bereits leer, wird noch renoviert oder
                    wird sogar noch vom Mieter bewohnt? Kein Problem — DARNA
                    findet den passenden Nachmieter! DARNA arbeitet schnell,
                    professionell und dennoch persönlich.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterDe />
    </>
  )
}

export default Hausverwaltung
