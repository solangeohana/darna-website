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
import NavbarDe from "../HomePageDe/NavbarDe"
import FooterDe from "../HomePageDe/FooterDe"
import BuyingPageHeaderDe from "./BuyingPageHeaderDe"

function BuyingPageDe() {
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
      <NavbarDe />
      <div className="wrapper">
        <BuyingPageHeaderDe />
        <div className="section">
          <Container>
            <div className="button-container">
              <a href="/de/kontakt">
              <Button className="btn-round" color="info" type="button" size="lg">
                Kontaktiere Uns 
              </Button>
            </a>
            </div>
            <h5 className="description">
            Es ist immer der richtige Moment, eine Immobilie zu kaufen… 
            <br/><br/>
            So wie die Quadratmeterpreise im Augenblick steigen, können wir sagen, dass deine Investition in eine Immobilie auf jeden Fall eine kluge Entscheidung ist. Wir helfen dir gerne bei der Suche nach dem geeigneten Objekt, in der richtigen Gegend und zum richtigen Preis.
            <br/><br/>
            Bevor wir damit anfangen, finden wir heraus, wonach genau Du suchst: Die Art der Immobilie, den Zweck deiner Investition, dein Budget usw. - Sobald wir diese Informationen haben, bieten wir dir eine Immobilie an, die deinen Suchkriterien entspricht. Dank unserer umfangreichen Kontakte zu Maklern und Hausverwaltungen der Umgebung haben wir Zugriff auf Angebote, bevor sie online zu haben sind.
            </h5>
            <h5 className = "content"> {" "}
              <a href="/de/kontakt">
                Kontaktiere 
              </a>{" "} uns für die neuesten Angebote!
            </h5>
          </Container>
        </div>
        <FooterDe />
      </div>
    </>
  )
}

export default BuyingPageDe;
