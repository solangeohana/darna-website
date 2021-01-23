import React, { useEffect } from 'react'
import NavbarFixed from 'components/English/NavbarFixed'
import MyFooter from 'components/English/MyFooter'
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

const RelocationTipsScreen = () => {
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
                One of the most important documents which every landlord will
                request during the apartment hunt is a recent credit report
                certificate, or in German: a Schufa Bonitätsauskunft.
                <br />
                <br />
                <Button
                  className='btn-round'
                  color='default'
                  size='lg'
                  href='https://partnerprogramm.immowelt.de/go.cgi?pid=160&wmid=80&cpid=1&prid=1&subid=&target=schufa_page'>
                  Get Your Schufa Now
                </Button>
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem>
              <h5 className='title'>CHOICE OF SERVICE PROVIDERS</h5>
              <ListGroupItemText>
                Have you chosen your electricity provider? What kind of service
                provider are you looking for, for your new property? You can
                check out our various service providers when it comes to
                choosing your next Electricity Provider, Gas Provider, or
                Internet DSL Provider and pick the best provider for YOU!
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
                    Visit
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    href='https://www.awin1.com/cread.php?awinmid=9364&awinaffid=753739&clickref=&ued=https%3A%2F%2Fwww.check24.net%2Fgasanbieter-wechseln%2F'
                    className='btn-round buttons-ad'
                    size='sm'
                    color='primary'>
                    Visit
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    href='https://www.awin1.com/cread.php?awinmid=9364&awinaffid=753739&clickref=&ued=https%3A%2F%2Fwww.check24.de%2Fdsl%2F'
                    className='btn-round buttons-ad'
                    size='sm'
                    color='primary'>
                    Visit
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>

          <ListGroup className='section'>
            <ListGroupItem>
              <h5 className='title'> MIETKAUTION </h5>
              <ListGroupItemText>
                There are many possibilities of how one can pay their deposit
                for the property they intend to rent. Should you prefer to keep
                your money liquidity high, then we advise you to apply for the
                Deutsche Kautionkasse, which would take care of your deposit
                that would be paid for your landlord or landlady.
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
                Visit
              </Button>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem>
              <h5 className='title'> LOVE YOUR HOME WITH HOME24</h5>
              <ListGroupItemText>
                Every HOME needs beautiful furniture as well as personal and
                individual accessories. Fill your home with some wonderful
                furniture and accessories from one of our favorite furniture
                stores - Home24.
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
                Visit
              </Button>
            </ListGroupItem>
          </ListGroup>
          <br/><br/><br/>
          <h4>Head over to our blog for in depth tips !</h4>
          <Button color='warning' href='/en/blog'>
            BLOG
          </Button>
        </Container>
      </div>
      <MyFooter />
    </>
  )
}

export default RelocationTipsScreen
