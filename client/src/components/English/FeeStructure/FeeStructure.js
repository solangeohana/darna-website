import React from 'react'

import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

import MyNavbar from "components/English/Homepage/MyNavbar"
import MyFooter from "components/English/Homepage/MyFooter"
import NavbarFixed from "./NavbarFixed"

function FeeStructure() {
    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <NavbarFixed />
            <div className="wrapper">
                <div className="section">
                <div className="section section-team text-center">
                        <Container>
                            <h4 className="title">FEE STRUCTURE</h4>
                            <Container>
                            <img src="/images/fee.jpg" height="250px"/>
                        </Container>
                            <div className="team">
                                <Row>
                                    <Col md="4">
                                        <div className="team-player">

                                            <h4 className="title">Sales Service</h4>
                                            <p className="content">
                                            6 % of Sales Price
                                            plus 16% VAT
                                            <br/>
                                            (6,96 % incl. VAT)
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="team-player">
                                            <h4 className="title">Residential Rental Service</h4>
                                            <p className="content">
                                            2 x Net Cold Rent
                                            <br/>
                                            plus 16% VAT
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="team-player">
                                            <h4 className="title">Commercial Rental Service</h4>
                                            <p className="content">
                                            3 x Net Cold Rent
                                            <br/>
                                            plus 16% VAT
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                
                            </div>
                        </Container>
                        
                    </div>
                </div>
                <MyFooter />
            </div>

        </>
    )
}

export default FeeStructure
