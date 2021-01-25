import React, { useEffect } from 'react'
import NavbarFixedDE from 'components/German/NavbarFixedDE'
import FooterDe from 'components/German/FooterDe'

const ImmobilieBewerten = () => {
  useEffect(() => {
    const addScript = () => {

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://slider.maklaro.com/src.latest.js'
      document.body.appendChild(script)
    }
    addScript()
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
      <div className='wrapper'>
        <div className='section container'>
          <div className='container section'>
            <div
              id='maklaro-slider-widget'
              data-partner-id='DARNAImmobilien'
              data-language='DE'
              data-type='evaluation'
              data-primary-color='#df16a9'
              data-lead-flow-code='DARNA'
              data-max-fullscreen-width='540'
              data-hide-fullscreen-on-start='1'>
              {' '}
            </div>
          </div>
        </div>
      </div>
      <FooterDe />
    </>
  )
}

export default ImmobilieBewerten
