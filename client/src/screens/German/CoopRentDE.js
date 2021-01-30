import React, { useEffect } from 'react'
import { Button, Container } from 'reactstrap'

// core components
import NavbarFixedDE from 'components/German/NavbarFixedDE'
import FooterDe from 'components/German/FooterDe'

const CoopRentDE = () => {
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
      <div className='wrapper section'>
        <div className='section'>
          <Container className='col-md-6'>
            <h3 className='title text-center'>
              So hilft Ihnen DARNA bei der Vermietung
            </h3>
            <br/> <br/>
            <div className='dashboard-items'>
              <p>
                Die Wohnung steht bereits leer, wird noch renoviert oder wird
                sogar noch vom Mieter bewohnt? <br /> Kein Problem — DARNA
                findet den passenden Nachmieter! DARNA arbeitet schnell,
                professionell und dennoch persönlich. Keine Standard Abfertigung
                sondern ein persönlicher, transparenter und kompetenter Service
                führt zu einer Zufriedenheit bei allen Beteiligten:
                Hausverwaltungen, Eigentümern und Mietern!
              </p>
              <h5 className='title'>
                Vorteile für Hausverwaltungen & Eigentümer:
              </h5>
              <p>- Kein Leerstand</p>
              <p>- Ausschließlich persönliche Besichtigungstermine</p>
              <p>- Wir übernehmen Ihre Arbeit gerne:</p>
              <p>
                1) Wir vermieten die Wohnung innerhalb unseres Netzwerks und
                öffentlich.
              </p>
              <p>
                2) DARNA führt Besichtigungen durch & sammelt alle
                Bewerbungsunterlagen .
              </p>
              <p>
                3) Sie erhalten ein Mieterportfolio mit einer Empfehlung und
                können selbst entscheiden, ob dies der passende Mieter für Sie
                ist.
              </p>
              <h5>Wer sind DARNA’s Kunden?</h5>
              <p>
                Zuverlässige & wertschätzende Mieter. Wir kennen jeden unserer
                Kunden persönlich und wissen, wer optimal in die Wohnung passt.
              </p>
              <h5 className='title'>Wir haben nur eine Bedingung:</h5>
              <p>Wir akzeptieren keinerlei Diskriminierung.</p>
              <br/> <br/>
              <Button
                href='/de/kontakt'
                className='btn-round dashboard-button'
                color='info'
                size='lg'>
                Kontaktiere Uns
              </Button>
            </div>
          </Container>
        </div>
      </div>
      <FooterDe />
    </>
  )
}

export default CoopRentDE
