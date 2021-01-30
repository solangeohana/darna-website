import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap'

const NavbarDe = () => {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent')
  const [collapseOpen, setCollapseOpen] = useState(false)
  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor('')
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor('navbar-transparent')
      }
    }
    window.addEventListener('scroll', updateNavbarColor)
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor)
    }
  })
  return (
    <>
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setCollapseOpen(false)
          }}
        />
      ) : null}
      <Navbar className={'fixed-top ' + navbarColor} color='info' expand='md'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand
              className='section-navbar-logo'
              to='/de'
              tag={Link}
              id='navbar-brand'>
              <img
                src='/images/navbar-logo-black.png'
                alt='logo darna'
                height='60px'></img>
            </NavbarBrand>
            <button
              className='navbar-toggler navbar-toggler'
              onClick={() => {
                document.documentElement.classList.toggle('nav-open')
                setCollapseOpen(!collapseOpen)
              }}
              aria-expanded={collapseOpen}
              type='button'>
              <span className='navbar-toggler-bar top-bar'></span>
              <span className='navbar-toggler-bar middle-bar'></span>
              <span className='navbar-toggler-bar bottom-bar'></span>
            </button>
          </div>
          <Collapse
            className='justify-content-end'
            isOpen={collapseOpen}
            navbar>
            <Nav navbar>
              <NavItem className='active'>
                <NavLink to='/en' tag={Link}>
                  <i className='now-ui-icons objects_globe'></i>
                  <p>En</p>
                </NavLink>
              </NavItem>

              <NavItem className='nav-link'>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    data-toggle='dropdown'
                    id='navbarDropdown'
                    tag='a'
                    onClick={(e) => e.preventDefault()}>
                    Immobilien
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby='navbarDropdown'>
                    <DropdownItem href='/de/mieten'>MIETEN</DropdownItem>
                    <DropdownItem href='/de/kaufen'>KAUFEN</DropdownItem>
                    <DropdownItem href='/de/verkaufen'>VERKAUFEN</DropdownItem>
                    <DropdownItem href='/de/gewerbe'>GEWERBE</DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem href='/de/preisliste'>
                      Preisliste
                    </DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem href='/de/immobilie-bewerten'>
                      Immobilie Bewerten
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>

              <NavItem>
                <NavLink href='/de/hausverwaltungen'>
                Eigentümer & Hausverwaltungen
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='/de/umzugstipps'>Umzugstipps</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='/de/uber-uns'>Uber Uns</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='/de/kontakt'>Kontakt</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarDe
