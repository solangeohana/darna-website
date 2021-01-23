import React, { useEffect } from 'react'

// reactstrap components
import { Button } from 'reactstrap'

// core components
import FooterDe from 'components/German/FooterDe'
import HeaderDe from 'components/German/HeaderDe'
import NavbarDe from 'components/German/NavbarDe'

const LandingPageDE = () => {
  useEffect(() => {
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
      <NavbarDe />
      <div className='wrapper'>
        <HeaderDe />
        <div className=' section container text-center'>
          <h3 className=''>DARNA’S FAMILIE</h3>
          <img
            className='image-container'
            src='/images/team-photo.jpeg'
            alt='Team'
            height='auto'
          />
          <h5>Sharif, Alex, Vaclav, Patrick, Cathrin & Madonna</h5>
          <br /> <br />
          <h3>DARNA - DIE QUEERE IMMOBILIENAGENTUR</h3>
          <p className='content'>
            Bei DARNA geht es nicht nur darum, für euch die perfekte Immobilie
            zu finden, sondern ein Zuhause.
            <br />
            2019 gegründet war DARNA die erste Firma ihrer Art - Eine Queere
            Immobilienagentur, spezialisiert auf den Verkauf und die Vermietung
            gewerblicher und privater Immobilien in Deutschland und der EU.
            <br /> <br />
            Wir stellen den Kontakt zwischen queeren Immobilien-Interessenten
            und empathischen und verständnisvollen Eigentümern her. Bei DARNA
            müsst ihr euch keine Sorgen um eure Akzeptanz machen. Ob ihr schwul,
            lesbisch, bisexuell, transgender seid oder wie auch immer ihr euch
            selbst zu identifizieren wünscht; Jeder, der mit DARNA
            zusammenarbeitet, hat eine Null-Toleranz-Haltung gegenüber jeglicher
            Art von Diskriminierung, insbesondere der Diskriminierung zu Hause.
            <br /> <br />
            Wir haben den Mangel an Vernetzung in unserer heutigen Gesellschaft
            festgestellt. Daher versucht DARNA eine dynamische Gemeinschaft aus
            queeren Käufern und Verkäufern, Mietern und Vermietern zu schaffen.
            In einer Welt, in der zunehmend die gleichgeschlechtliche Ehen
            legalisiert wird, sahen wir den Bedarf und die Chance, Räume zu
            schaffen, wo queere und gleichgesinnte Menschen sicher und
            unbefangen zusammenkommen und ein Zuhause finden können.
            <br /> <br />
            Obwohl sich der Auftrag von DARNA um den Dienst für die Queer
            Community dreht, sind wir natürlich 100% hetero-freundlich und
            heißen alle Menschen jeder Schichten und jeglicher sexueller
            Orientierung herzlich willkommen!
          </p>
          <div className='send-button'>
            <Button
              className='btn-round'
              color='info'
              href='/en/contact'
              size='lg'>
              KONTAKTIERE UNS
            </Button>
          </div>
        </div>
        <FooterDe />
      </div>
    </>
  )
}

export default LandingPageDE
