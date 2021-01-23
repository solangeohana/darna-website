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

const Friends = () => {
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
        className='section text-left'
        style={{
          minHeight: '900px',
        }}>
        <Container>
          <h1 className='section'>DARNA's Friends</h1>
          <ListGroup className='section'>
            <ListGroupItem>
              <ListGroupItemHeading>
                <img
                  src='/images/careship.png'
                  alt='careship'
                  height='80px'
                  width='auto'></img>
              </ListGroupItemHeading>

              <ListGroupItemText>
                Together with{' '}
                <a
                  href='https://www.careship.de/willkommen2'
                  className='btn-link btn-warning'>
                  Careship
                </a>{' '}
                you’re less alone! Careship aims to help elderly people by
                improving their quality of life. They offer individual packages
                to combine all the services you really need without overpaying.
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                <p>
                  <a
                    href='https://www.linkedin.com/in/solange-ohana/'
                    className='btn-link btn-warning'>
                    Solange Ohana, Web Development
                  </a>
                </p>
              </ListGroupItemHeading>
              <ListGroupItemText>
                <br /> Do you like our website ? <br />
                Want a beautiful platform to represent your business ? Fully
                customizable, no templates. Your imagination is the limit !{' '}
                <br /> You can find Solange on{' '}
                <a
                  href='https://www.linkedin.com/in/solange-ohana/'
                  className='btn-link btn-warning'>
                  LinkedIn
                </a>{' '}
                or email her at{' '}
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
                are DARNA’s Real Estate Partners and together we rent out and
                sell the most beautiful objects in Germany. A solid corporation
                that has the customer’s comfort on top of anything.
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
                Let’s talk about our self development and see where do you
                currently stand and where can you improve. Talk to our life
                coach Sandra and set your goals together with a professional who
                is happy to help you shape your success story!
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
                You wonder where do the beautiful pictures of DARNA come from?
                It’s the fascinating work of our dear friend, the great
                <a
                  href='https://www.andreaferrophoto.com/'
                  className='btn-link btn-warning'>
                  Photographer Andrea Ferro,
                </a>{' '}
                who is passionate about everything that has to do with
                architecture, design and story telling moments.
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </Container>
      </div>
      <MyFooter />
    </>
  )
}

export default Friends
