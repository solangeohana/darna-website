import React, { useEffect } from 'react'
import FooterDe from 'components/German/FooterDe'
import NavbarFixedDE from 'components/German/NavbarFixedDE'

const Impressum = () => {
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
      <div className='section container text-left'>
        <h3 className='section'>Impressum</h3>
        <p>
          <strong className='title'>DARNA Immobilien GmbH</strong>
        </p>
        <p>Motzstraße 9, 10777 Berlin Deutschland</p>
        <p>Telefon: +49 (0)30 28664417</p>
        <p>E-Mail: contact@darna-immobilien.com</p>
        <p>www.darna-immobilien.com</p>
        <p>
          <strong className='title'>Vertreten durch: Sharif Altwal</strong>
        </p>
        <h4> Registereintrag:</h4>
        <p>
          Eingetragen im Handelsregister. Registergericht: Amtsgericht
          Berlin-Charlottenburg.
        </p>
        <p>Registernummer: HRB 2037 17 B</p>
        <p>USt-IdNr.: DE322299525</p>
        <h4>Aufsichtsbehörde:</h4>
        <p>
          Berufsaufsichtsbehörde: Bezirksamt Schöneberg von Berlin,
          John-F.-Kennedy-Platz 1, 10825 Berlin.
        </p>
        <p>Bezirksamt Berlin Charlottenburg Wilmersdorf von Berlin.</p>
        <p>Zulassung nach § 34c GewO beim Wirtschafts-/Bezirksamt Berlin</p>
        <h6>Charlottenburg-Wilmersdorf am 06.02.2019</h6>
      </div>
      <FooterDe />
    </>
  )
}

export default Impressum
