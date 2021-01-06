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

function MyNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand className="section-navbar-logo" to="/en" tag={Link} id="navbar-brand" >
                            <img src="/images/navbar-logo.png" alt="logo darna" height="90px"></img>
                        </NavbarBrand>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
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

export default MyNavbar;
