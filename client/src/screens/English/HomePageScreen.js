import React from 'react'

// reactstrap components
import { Button } from 'reactstrap'

// core components
import MyNavbar from 'components/English/MyNavbar'
import MyHeader from 'components/English/MyHeader'
import MyFooter from 'components/English/MyFooter'

const LandingPage = () => {
  React.useEffect(() => {
    document.body.classList.add('landing-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('landing-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <MyNavbar />
      <div className='wrapper'> 
        <MyHeader />
        <div className=' section container text-center'>
          <h3 className=''>DARNA’S FAMILY</h3>
          <img
            className='image-container'
            src='/images/team-photo.jpeg'
            alt='Team'
            height='auto'
          />
          <h5>Sharif, Alex, Vaclav, Patrick, Cathrin & Madonna</h5>
          <br /> <br />
          <h3>DARNA - THE QUEER REAL ESTATE AGENCY</h3>
          <p className='content'>
            DARNA is about more than just finding you the perfect property, it’s
            about finding you a home.
            <br />
            Established in Germany in 2019, DARNA Immobilien is the first of its
            kind - a queer real estate agency that specializes in selling and
            renting out commercial and residential properties in Germany and
            within the EU.
            <br /> <br />
            We connect queer property-seekers with empathetic and understanding
            landlords. With DARNA you don’t have to worry about finding
            acceptance as gay, bisexual, transgender or however you identify
            yourself; anyone who works together with DARNA joins the zero
            tolerance attitude towards all kind of discrimination, especially
            discrimination at home.
            <br /> <br />
            Sensing a lack of connection within society, DARNA seeks to create
            dynamic communities of queer buyers, renters, and sellers. In a
            world in which same-sex marriage is being legalized at an ever
            increasing rate, we saw a need and opportunity to create spaces
            where queer and like-minded individuals could come together safely,
            without judgement, and find a home.
            <br /> <br />
            Although DARNA’s mission is centered around serving the queer
            community, we are also 100% hetero-friendly, and welcoming to people
            of all backgrounds and sexual orientations.
          </p>
          <div className='send-button'>
            <Button
              className='btn-round'
              color='info'
              href='/en/contact'
              size='lg'>
              Get In Touch With Us !
            </Button>
          </div>
        </div>
        <MyFooter/>
      </div>
    </>
  )
}

export default LandingPage
