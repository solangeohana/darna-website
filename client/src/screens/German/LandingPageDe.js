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
import NavbarDe from "../../components/German/NavbarDe";
import HeaderDe from "../../components/German/HeaderDe";
import FooterDe from "../../components/German/FooterDe";

function LandingPageDe() {
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
      <NavbarDe/>
      <div className="wrapper">
        <HeaderDe/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Wer Sind Wir ? </h2>
                <p className="content">
                Wir sind eine Community- und LGBTIQ+ orientierte Organisation, die auf allen erdenklichen Wegen unsere Queer Community unterstützt!                <br/>
                Die Unterstützung durch DARNA ist vielfältig. Ob wir euch ein sicheres Zuhause vermitteln, wo ihr unbehelligt ihr selbst sein könnt, oder einen sichere und liebevolle Arbeitsatmosphäre sucht, wo ihr viele andere talentierte queere Menschen kennenlernt, euch vernetzt und miteinander arbeitet. Wir finden gemeinsam den Weg, der euch dahin führt, euch selbst zu akzeptieren, wie ihr seid, und das Beste aus euch herauszuholen.                
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
                  <br/><br/>
                  <h3>
                    Unsere Mission 
                  </h3>
                  <p className="content">
                  DARNA wurde 2019 als erste queere Immobilienagentur in Deutschland gegründet und begann zunächst schwerpunktmäßig, der Queer Community Unterkünfte und sichere Arbeitsräume zu vermitteln, wo niemand um seiner selbst willen diskriminiert wird.                  </p>
                  <p>
                  Heute ist DARNA gewachsen und zu dem Professional Queer Hub Deutschlands geworden. Wir fördern inzwischen auch neue Start-Ups und Unternehmen und helfen ihnen dabei, sich in einer sicheren und liebevollen Umgebung zu entwickeln.                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Unsere Team</h2>
            <img src="/images/group-photo.jpeg" height="500px"/>

          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Abonnieren</h2>
            <p className="content">Melden Sie sich mit Ihrer E-Mail-Adresse an, um Neuigkeiten und Updates zu erhalten</p>
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
                    Absenden 
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterDe />
      </div>
    </>
  );
}

export default LandingPageDe;
