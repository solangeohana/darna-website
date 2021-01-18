/*eslint-disable*/
import React from 'react'

import {
  NavItem,
  NavLink,
  Nav,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  UncontrolledButtonDropdown,
} from 'reactstrap'

const MyFooter = () => {
  return (
    <>
      <footer className='footer footer-default' data-background-color='black'>
        <Container>
          <div className='text-center elements'>
            <Button className='btn-round' color='info' outline href='/en/blog'>
              BLOG
            </Button>
            <Button
              className='btn-round'
              color='info'
              outline
              href='/en/friends'>
              FRIENDS
            </Button>
            <UncontrolledButtonDropdown>
              <DropdownToggle caret>LEGAL</DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/de/impressum'>Impressum</DropdownItem>
                <DropdownItem href='/de/datenschutz'>Datenschutz</DropdownItem>
                <DropdownItem href='/de/vertrag'>
                  Allgemeine Vertrag und Nutzungsbedigungen
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div className='text-center elements' style={{ marginLeft: '2rem' }}>
            <div>DARNA Immobilien GmbH </div>
            <div>
              <i className='now-ui-icons location_pin'></i> Motzstraße 9, 10777
              Berlin Germany
            </div>
            <div>
              <i className='fas fa-phone'></i> +49 30 28664417
            </div>
          </div>

          <div className='text-center elements'>
            <Button
              className='btn-icon btn-round'
              color='info'
              href='https://www.facebook.com/TheQueerRealEstateAgency/'>
              <i className='fab fa-facebook-square'></i>
            </Button>
            <Button
              className='btn-icon btn-round'
              color='info'
              href='https://www.instagram.com/darnaimmobilien/'>
              <i className='fab fa-instagram'></i>
            </Button>
            <Button
              className='btn-icon btn-round'
              color='info'
              href='mailto:contact@darna-immobilien.com'>
              <i className='now-ui-icons ui-1_email-85'></i>
            </Button>
            <Button
              className='btn-icon btn-round'
              color='info'
              href='https://www.paypal.me/darnaimmobilien'>
              <i className='fab fa-paypal'></i>
            </Button>
          </div>

          <div className='text-center elements'>
            © {new Date().getFullYear()} DARNA Immobilien GmbH 
          </div>
          <div className='text-center elements text-muted'>
         <small> Coded by{' '}
            <a className = 'text-muted' href='https://www.linkedin.com/in/solange-ohana' target='_blank'>
              Solange Ohana
            </a>
            </small>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default MyFooter

