import React from "react";

// reactstrap components

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

// core components
import MyNavbar from "../../components/English/MyNavbar"
import MyFooter from "../../components/English/MyFooter"
import RentingPageHeader from "../../components/English/RentingPageHeader"

function RentingPage() {
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
      <MyNavbar />
      <div className="wrapper">
        <RentingPageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <a href="/en/contact">
              <Button className="btn-round" color="info" type="button" size="lg">
                Contact Us 
              </Button>
            </a>
            </div>
            <h5 className="description">
            Looking for an apartment or a house to rent? 
            <br/><br/>
            Don’t have enough time and energy to apply for those properties and go through all the documentation approval process, viewings, etc..? 
            <br/><br/>
            Let us take all this hustle away and do that for you! Our team of real estate agents will do all that work happily for you and support you with your desired property in no time!

            </h5>
            <h4 className = "content">Get in {" "}
              <a href="/en/contact">
                touch
              </a>{" "} with us so we can find you a new home.
            </h4>
          </Container>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default RentingPage;
