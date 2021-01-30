import React, { useEffect } from 'react'
import { Button, Container } from 'reactstrap'

// core components
import NavbarFixed from 'components/English/NavbarFixed'
import MyFooter from 'components/English/MyFooter'

const CoopRent = () => {
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
      <div className='wrapper section'>
        <div className='section'>
          <Container className='col-md-6'>
            <h3 className='title'>
              How you profit from DARNA’s Services for renting
            </h3>
            <div className='dashboard-items section'>
              <p>
                The apartment is empty already, is being renovated or even still
                inhabited by the current tenant? No worries — DARNA finds you
                the perfect tenant! <br /> DARNA's team is fast, professional
                yet very personal. No ordinary standard service, we base our
                work and a personal, transparent and experienced service that
                leads to satisfaction of each party involved: House managements,
                landlords and tenants!
              </p>
              <h5 className='title'>
                Advantages for house managements and landlords:
              </h5>
              <p>- No Vacancy</p>
              <p>- Only personal viewings</p>
              <p>- We’re happy to take over your work:</p>
              <p>
                1) We rent out the property within our network and in public
              </p>
              <p>
                2) DARNA is doing viewings and collects all the relevant
                documents of the applicants
              </p>
              <p>
                3) You’ll receive a tenant portfolio with a recommendation from
                our side and you’re still able to choose if that’s the tenant
                that could fit
              </p>
              <h5>Who are DARNA’s clients?</h5>
              <p>
                Trustworthy and appreciating tenants. We know each client
                personally and know exactly, who would fit into the apartment.
              </p>
              <h5 className='title'>We have only one condition:</h5>
              <p>
                We have a zero-tolerance policy against all types of
                discrimination at DARNA.
              </p>
              <br /> <br />
              <Button
                href='/en/contact'
                className='btn-round dashboard-button'
                color='info'
                size='lg'>
                Contact Us
              </Button>
            </div>
          </Container>
        </div>
      </div>
      <MyFooter />
    </>
  )
}

export default CoopRent
