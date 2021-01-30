import React, { useEffect } from 'react'
import FooterDe from 'components/German/FooterDe'
import NavbarFixedDE from 'components/German/NavbarFixedDE'

const Vertrags = () => {
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
        className='section container text-left'
        style={{
          minHeight: '900px',
        }}>
        <h3 className='section'>
          ALLGEMEINE VERTRAGS - UND NUTZUNGSBEDINGUNGEN
        </h3>
       <strong> <a href='/files/AGB_DARNA.pdf'>
          <i className='far fa-file-pdf'></i> AGB_DARNA.pdf
        </a></strong>
      </div>
      <FooterDe />
    </>
  )
}

export default Vertrags
