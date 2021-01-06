import React from "react";
import { Link } from "react-router-dom";
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
    Container
} from "reactstrap";

function NavbarFixed() {
    
    return (
        <>
           
            <Navbar className={"fixed-top "} color="info" expand="lg">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand className="section-navbar-logo" to="/en" tag={Link} id="navbar-brand" >
                            <img src="/images/png-logo.png" alt="logo darna" height="90px"></img>
                        </NavbarBrand>
                        
                    </div>
                    <Collapse
                        className="justify-content-end"
                        navbar
                    >
                        <Nav navbar>
                            <NavItem className="active">
                                <NavLink
                                    to="/de" tag={Link}
                                >
                                <i className="now-ui-icons objects_globe"></i>
                                <p>De</p>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                            <NavLink>
                            <UncontrolledDropdown>
                                <DropdownToggle
                                    caret
                                    data-toggle="dropdown"
                                    href="/real-estate"
                                    id="navbarDropdown"
                                    tag="a"
                                    onClick={(e) => e.preventDefault()}>
                                     Real Estate

                                </DropdownToggle>
                                <DropdownMenu aria-labelledby="navbarDropdown">
                                    <DropdownItem href="/en/rent">
                                        RENT
                                    </DropdownItem>
                                    <DropdownItem href="/en/buy">
                                        BUY
                                    </DropdownItem>
                                    <DropdownItem href="/en/sell">
                                        SELL
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem href="en/fee-structure" >
                                        Fee structure
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem href="/relocation-tips" onClick={(e) => e.preventDefault()}>
                                        Relocation Tips
                                    </DropdownItem>
                                    </DropdownMenu>
                            </UncontrolledDropdown>
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/explore">
                                    House Managements & Landlords
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/tips">
                                    Relocation Tips
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/about">
                                    About Us
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/contact">
                                    Contact
                            </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarFixed;
