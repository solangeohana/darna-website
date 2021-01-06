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
    Container,
} from "reactstrap";

function NavbarDe() {
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
                        <NavbarBrand className="section-navbar-logo" to="/de" tag={Link} id="navbar-brand" >
                            <img src="/images/png-logo.png" alt="logo darna" height="90px"></img>
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
                                    to="/en" tag={Link}
                                >
                                <i className="now-ui-icons objects_globe"></i>
                                <p>En</p>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                            <NavLink onClick={(e) => e.preventDefault()}>
                            <UncontrolledDropdown>
                                <DropdownToggle
                                    caret
                                    data-toggle="dropdown"
                                    href="/real-estate"
                                    id="navbarDropdown"
                                    tag="a"
                                    onClick={(e) => e.preventDefault()}>
                                     Immobilien

                                </DropdownToggle>
                                <DropdownMenu aria-labelledby="navbarDropdown">
                                    <DropdownItem href="de/mieten" onClick={(e) => e.preventDefault()}>
                                        Mieten
                                    </DropdownItem>
                                    <DropdownItem href="/de/kaufen" onClick={(e) => e.preventDefault()}>
                                        kaufen
                                    </DropdownItem>
                                    <DropdownItem href="/de/verkaufen" onClick={(e) => e.preventDefault()}>
                                        verkaufen
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem href="/de/preisliste" onClick={(e) => e.preventDefault()}>
                                        Preisliste
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem href="/de/umzugstipps" onClick={(e) => e.preventDefault()}>
                                        Umzugstipps
                                    </DropdownItem>
                                    </DropdownMenu>
                            </UncontrolledDropdown>
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/de/tips">
                                    Hausvervaltungen & Eigentümer
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/de/tips">
                                    Umzugstipps
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="de/uber-uns">
                                    Uber Uns
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="de/kontakt">
                                    Kontakt
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarDe;
