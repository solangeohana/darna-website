import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

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
  Button,
} from 'reactstrap'

const NavbarAdmin = () => {
  const dispatch = useDispatch()
  const [collapseOpen, setCollapseOpen] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

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
      <Navbar className='fixed-top' color='primary' expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand
              className='section-navbar-logo'
              to='/admin/dashboard'
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
            {userInfo && userInfo.isAdmin && (
              <Nav navbar>
                <NavItem>
                  <NavLink href='/en'>
                    <i className='now-ui-icons tech_laptop'></i>
                    Back to the website
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
                      <i className='now-ui-icons business_bank'></i>
                      Real Estate
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby='navbarDropdown'>
                      <DropdownItem href='/admin/rent'>RENT</DropdownItem>
                      <DropdownItem href='/admin/buy'>BUY</DropdownItem>
                      <DropdownItem href='/admin/sell'>SELL</DropdownItem>
                      <DropdownItem href='/admin/commercial'>
                        COMMERCIAL
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>

                <NavItem>
                  <NavLink href='/admin/messages'>
                    <i className='now-ui-icons ui-1_email-85'></i>
                    Messages
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href='/admin/users'>
                    <i className='now-ui-icons users_single-02'></i>
                    Users
                  </NavLink>
                </NavItem>
                <Button
                  color='default'
                  className='nav-link'
                  onClick={logoutHandler}>
                  Logout
                  <i className='now-ui-icons sport_user-run'></i>
                </Button>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarAdmin
