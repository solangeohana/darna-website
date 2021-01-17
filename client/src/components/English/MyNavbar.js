import React from 'react'
import {  useSelector } from 'react-redux'
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

const MyNavbar = () => {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent')
  const [collapseOpen, setCollapseOpen] = React.useState(false)


  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  React.useEffect(() => {
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
      <Navbar className={'fixed-top ' + navbarColor} color='info' expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand
              className='section-navbar-logo'
              to='/en'
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
              {userInfo && userInfo.isAdmin && (
                <NavItem>
                  <NavLink to='/admin/dashboard' tag={Link}>
                    {/* <i className='now-ui-icons users_single-02'></i> */}
                    <i className='fas fa-key'></i>{' '}
                  </NavLink>
                </NavItem>
              )}
              <NavItem className='active'>
                <NavLink to='/de' tag={Link}>
                  <i className='now-ui-icons objects_globe'></i>
                  <p>De</p>
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
                    Real Estate
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby='navbarDropdown'>
                    <DropdownItem href='/en/rent'>RENT</DropdownItem>
                    <DropdownItem href='/en/buy'>BUY</DropdownItem>
                    <DropdownItem href='/en/sell'>SELL</DropdownItem>
                    <DropdownItem href='/en/commercial'>
                      COMMERCIAL
                    </DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem href='/en/fee-structure'>
                      Fee structure
                    </DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem
                      href='/relocation-tips'
                      onClick={(e) => e.preventDefault()}>
                      Relocation Tips
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>

              <NavItem>
                <NavLink href='/en/house-management'>House Managements & Landlords</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='/en/tips'>Relocation Tips</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='/en/about'>About Us</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='/en/contact'>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
