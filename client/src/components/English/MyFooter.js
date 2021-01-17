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
} from 'reactstrap'

function MyFooter() {
  return (
    <footer data-background-color='black'>
      <div className='footer-contact'>
        <Nav>
          <NavItem>
            <NavLink href='/tips'>BLOG</NavLink>
          </NavItem>

          <NavItem className='nav-link'>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle='dropdown'
                tag='a'
                onClick={(e) => e.preventDefault()}>
                LEGAL
              </DropdownToggle>
              <DropdownMenu aria-labelledby='navbarDropdown'>
                <DropdownItem href='/en/rent'>Impressum</DropdownItem>
                <DropdownItem href='/en/buy'>Datenschutz</DropdownItem>
                <DropdownItem href='/en/sell'>
                  Allgemeine Vertrag und Nutzungsbedigungen
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>

          <NavItem>
            <NavLink href='/contact'>FRIENDS</NavLink>
          </NavItem>
        </Nav>
      </div>

      <div className='footer-contact'>
        <div className='footer-contact-element'>Darna Immobilien GmbH </div>
        <div className='footer-contact-element'>
          <i className='now-ui-icons location_pin'></i> Motzstraße 9, 10777
          Berlin Germany
        </div>
        <div className='footer-contact-element'>
          <i className='fas fa-phone'></i> +44 30 28664417
        </div>
      </div>

      <div className='footer-sections'>
        <div className='text-center'>
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
      </div>
      <div className='footer-sections text-center'>
        © {new Date().getFullYear()} Darna Immobilien GmbH -- Coded by{' '}
        <a href='https://www.linkedin.com/in/solange-ohana' target='_blank'>
          Solange Ohana
        </a>
      </div>
    </footer>
  )
}

export default MyFooter
