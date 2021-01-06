import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import MyNavbar from "./MyNavbar";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <MyNavbar />
      <div className="wrapper">
        <MyHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <p className="content">
                  We are a community-driven LGBTQ+ focused organization that takes all possible paths to empower our queer community!
                <br />
                Empowerment at DARNA has various faces.  Whether it is supporting you with a safe home, where you can feel secure in being fully yourself, or providing you with a safe and loving workspace, where you are able to meet, connect and collaborate with many other talented queers and allies - we will find the perfect way to help you embrace yourself and grow the gem in you.
                </p>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landing-1.jpg") + ")",
                    }}
                  >
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/darna-22.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landing-2.jpg") + ")",
                    }}
                  ></div>
                  <br /><br />
                  <h3>
                    Our Mission
                  </h3>
                  <p className="content">
                    Established in 2019, DARNA started as the first Queer Real Estate Agency in Germany with emphasis on providing the queer community with safe accommodations and secure workspaces where no one would discriminate against you for being you.
                  </p>
                  <p>
                    Today, DARNA has grown up and became The Professional Queer Hub of Germany.  DARNA’s mission has expanded to nurture new start-ups and businesses, and help them develop personally and professionally under one safe and loving space.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Our Team</h2>
            <img src="/images/group-photo.jpeg" height="500px"/>

          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Subscribe</h2>
            <p className="content">Sign up with your email address to receive news and updates</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <MyFooter />
      </div>
    </>
  );
}

export default LandingPage;
