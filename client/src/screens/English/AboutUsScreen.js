import React, { useEffect } from 'react'
import { Container } from 'reactstrap'

// core components
import NavbarFixed from 'components/English/NavbarFixed'
import MyFooter from 'components/English/MyFooter'
import ImagesCarousel from 'components/ImagesCarousel'

const ruPaul = [
  '/images/rupaul1.jpg',
  '/images/rupaul2.png',
  '/images/rupaul3.jpg',
  '/images/rupaul4.jpg',
]
const ellen = [
  '/images/ellen1.jpg',
  '/images/ellen2.jpg',
  '/images/ellen3.jpg',
  '/images/ellen4.jpg',
  '/images/ellen5.jpg',
]
const elton = [
  '/images/elton1.jpg',
  '/images/elton2.jpg',
  '/images/elton3.jpg',
  '/images/elton4.jpg',
  '/images/elton5.jpg',
  '/images/elton6.jpeg',
  '/images/elton7.jpg',
  '/images/elton8.jpg',
]
const bowie = ['/images/bowie.jpg', '/images/bowie2.jpg']
const gianni = ['/images/gianni.jpg', '/images/gianni2.jpg']
const restroom = ['/images/jungle.jpg']

const AboutUsScreen = () => {
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
      <div className='wrapper'>
        <div className='section'>
          <Container>
            <h4 className='section text-center'>
              <br /> <br />
              Let us explore DARNA and the stories behind our beautiful rooms.
              We named our rooms after LGBTQ+ Icons that have inspired us and
              fill those rooms with their spirit
            </h4>
            <h5 className='title text-center'>RuPaul - The Sassy Room</h5>
            <ImagesCarousel items={ruPaul} />
            <br /> <br />
            <h5 className='title text-center'>
              Ellen DeGeneres - The Coming Out Room
            </h5>
            <ImagesCarousel items={ellen} />
            <br /> <br />
            <h5 className='title text-center'>
              Elton John - The King & The Queen
            </h5>
            <ImagesCarousel items={elton} />
            <br /> <br />
            <h5 className='title text-center'>
            Team Room 'David Bowie'
            </h5>
            <ImagesCarousel items={bowie} />
            <br /> <br />
            <h5 className='title text-center'>
            Meeting Room 'Gianni Versace'
            </h5>
            <ImagesCarousel items={gianni} />
            <br /> <br />
            <h5 className='title text-center'>
            And who wouldn't want to explore our Jungle Restroom?
            </h5>
            <ImagesCarousel items={restroom} />
          </Container>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default AboutUsScreen
