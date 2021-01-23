import React, { useEffect } from 'react'

import FooterDe from 'components/German/FooterDe'
import NavbarFixedDE from 'components/German/NavbarFixedDE'

const Datenschutz = () => {
  useEffect(() => {
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <NavbarFixedDE />
      <div className='section container text-left'>
        <h3 className='section'>Datenschutz</h3>
        <p>
          <strong className='title'>
            1. Name und Kontaktdaten des für die Verarbeitung Verantwortlichen
          </strong>
        </p>
        <p>
          Diese Datenschutz-Information gilt für die Datenverarbeitung durch:
        </p>
        <p>Darna Immobilien GmbH</p>
        <p>Motzstraße 9, 10777 Berlin Deutschland</p>
        <p>Telefon: +49 (0)30 28664417</p>
        <p>E-Mail: contact@darna-immobilien.com</p>
        <p>www.darna-immobilien.com</p>
        <p>
          <strong className='title'>
            2. Erhebung und Speicherung personenbezogener Daten sowie Art und
            Zweck von deren Verwendung
          </strong>
        </p>
        <p>
          <strong className='title'>2. a) Beim Besuch der Website</strong>
        </p>
        <p>
          Beim Aufrufen unserer Website www.darna-immobilien.com werden durch
          den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch
          Informationen an den Server unserer Website gesendet. Diese
          Informationen werden temporär in einem sog.
        </p>
        <p>
          Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr
          Zutun erfasst und bis zur automatisierten Löschung gespeichert:
        </p>
        <p>- IP-ADRESSE DES ANFRAGENDEN RECHNERS</p>
        <p>- DATUM UND UHRZEIT DES ZUGRIFFS</p>
        <p>- NAME UND URL DER ABGERUFENEN DATEI</p>
        <p>- WEBSITE, VON DER AUS DER ZUGRIFF ERFOLGT (REFERRER-URL)</p>
        <p>
          - VERWENDETER BROWSER UND GGF. DAS BETRIEBSSYSTEM IHRES RECHNERS SOWIE
          DER NAME IHRES ACCESS-PROVIDERS
        </p>
        <br />
        <p>
          Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
        </p>
        <p>
          - GEWÄHRLEISTUNG EINES REIBUNGSLOSEN VERBINDUNGSAUFBAUS DER WEBSITE
        </p>
        <p>- GEWÄHRLEISTUNG EINER KOMFORTABLEN NUTZUNG UNSERER WEBSITE</p>
        <p>- AUSWERTUNG DER SYSTEMSICHERHEIT UND -STABILITÄT SOWIE</p>
        <p>- ZU WEITEREN ADMINISTRATIVEN ZWECKEN</p>
        <p>
          Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1
          lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben
          aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir
          die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu
          ziehen.
        </p>
        <p>
          <strong className='title'>
            2. b) Bei Nutzung unseres Kontaktformulars
          </strong>
        </p>
        <p>
          Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns
          über ein auf der Website bereitgestelltes Formular Kontakt
          aufzunehmen. Dabei ist die Angabe Ihres Namens sowie einer gültigen
          E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage
          stammt und um diese beantworten zu können. Weitere Angaben können
          freiwillig getätigt werden.
        </p>
        <p>
          Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt
          nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig
          erteilten Einwilligung.
        </p>
        <p>
          Die für die Benutzung des Kontaktformulars von uns erhobenen
          personenbezogenen Daten werden nach Erledigung der von Ihnen
          gestellten Anfrage automatisch gelöscht.
        </p>
        <p>
          Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke
          zur Wahrung unserer berechtigten Interessen sowie der Dritter nach
          Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich.
        </p>
        <p>
          Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren
          Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer
          gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer
          Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann
          jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website
          nutzen können.
        </p>
        <p>
          <strong className='title'>3. Analyse-Tools</strong>
        </p>
        <p>
          Die im Folgenden aufgeführten und von uns eingesetzten
          Tracking-Maßnahmen werden auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f
          DSGVO durchgeführt. Mit den zum Einsatz kommenden Tracking-Maßnahmen
          wollen wir eine bedarfsgerechte Gestaltung und die fortlaufende
          Optimierung unserer Webseite sicherstellen. Zum anderen setzen wir die
          Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu
          erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie
          auszuwerten. Diese Interessen sind als berechtigt im Sinne der
          vorgenannten Vorschrift anzusehen.
        </p>
        <p>
          Die jeweiligen Datenverarbeitungszwecke und Datenkategorien sind aus
          den entsprechenden Tracking-Tools zu entnehmen.
        </p>
        <p>
          <strong>Google Analytics</strong>
        </p>
        <p>
          Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden
          Optimierung unserer Seiten nutzen wir Google Analytics, ein
          Webanalysedienst der Google Inc. (1600 Amphitheatre Parkway, Mountain
          View, CA 94043, USA; im Folgenden „Google“). In diesem Zusammenhang
          werden pseudonymisierte Nutzungsprofile erstellt und Cookies (siehe
          unter Ziff. 4) verwendet. Die durch den Cookie erzeugten Informationen
          über Ihre Benutzung dieser Website wie :
        </p>
        <p>- BROWSER-TYP/-VERSION</p>
        <p>- VERWENDETES BETRIEBSSYSTEM</p>
        <p>- REFERRER-URL (DIE ZUVOR BESUCHTE SEITE)</p>
        <p>- HOSTNAME DES ZUGREIFENDEN RECHNERS (IP-ADRESSE)</p>
        <p>- UHRZEIT DER SERVERANFRAGE</p>
        <p>
          werden an einen Server von Google in den USA übertragen und dort
          gespeichert. Die Informationen werden verwendet, um die Nutzung der
          Website auszuwerten, um Reports über die Websiteaktivitäten
          zusammenzustellen und um weitere mit der Websitenutzung und der
          Internetnutzung verbundene Dienstleistungen zu Zwecken der
          Marktforschung und bedarfsgerechten Gestaltung dieser Internetseiten
          zu erbringen. Auch werden diese Informationen gegebenenfalls an Dritte
          übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit
          Dritte diese Daten im Auftrag verarbeiten. Es wird in keinem Fall Ihre
          IP-Adresse mit anderen Daten von Google zusammengeführt. Die
          IP-Adressen werden anonymisiert, so dass eine Zuordnung nicht möglich
          ist (IP-Masking).
        </p>
        <p>
          Sie können die Installation der Cookies durch eine entsprechende
          Einstellung der Browser-Software verhindern; wir weisen jedoch darauf
          hin, dass in diesem Fall gegebenenfalls nicht sämtliche Funktionen
          dieser Website vollumfänglich genutzt werden können.
        </p>
        <p>
          Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten
          und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
          IP-Adresse) sowie die Verarbeitung dieser Daten durch Google
          verhindern, indem Sie ein Browser-Add-on herunterladen und
          installieren{' '}
          <a href='https://tools.google.com/dlpage/gaoptout?hl=de'>
            https://tools.google.com/dlpage/gaoptout?hl=de
          </a>
          .
        </p>
        <p>
          Alternativ zum Browser-Add-on, insbesondere bei Browsern auf mobilen
          Endgeräten, können Sie die Erfassung durch Google Analytics zudem
          verhindern, indem Sie auf folgenden Link klicken. Es wird ein
          Opt-out-Cookie gesetzt, das die zukünftige Erfassung Ihrer Daten beim
          Besuch dieser Website verhindert. Der Opt-out-Cookie gilt nur in
          diesem Browser und nur für unsere Website und wird auf Ihrem Gerät
          abgelegt. Löschen Sie die Cookies in diesem Browser, müssen Sie das
          Opt-out-Cookie erneut setzen.
        </p>
        <p>
          Weitere Informationen zum Datenschutz im Zusammenhang mit Google
          Analytics finden Sie etwa in der Google Analytics-Hilfe
          (https://support.google.com/analytics/answer/6004245?hl=de).
        </p>
        <p>
          <strong className='title'>4. Betroffenenrechte</strong>
        </p>
        <p>Sie haben das Recht:</p>
        <p>
          {' '}
          - gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
          personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft
          über die Verarbeitungszwecke, die Kategorie der personenbezogenen
          Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten
          offengelegt wurden oder werden, die geplante Speicherdauer, das
          Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der
          Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts,
          die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden,
          sowie über das Bestehen einer automatisierten Entscheidungsfindung
          einschließlich Profiling und ggf. aussagekräftigen Informationen zu
          deren Einzelheiten verlangen;
        </p>
        <p>
          - gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
          Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten
          zu verlangen;
        </p>
        <p>
          {' '}
          - gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
          personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung
          zur Ausübung des Rechts auf freie Meinungsäußerung und Information,
          zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des
          öffentlichen Interesses oder zur Geltendmachung, Ausübung oder
          Verteidigung von Rechtsansprüchen erforderlich ist;
        </p>
        <p>
          {' '}
          - gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten
          von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber
          deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie
          jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von
          Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch
          gegen die Verarbeitung eingelegt haben;
        </p>
        <p>
          {' '}
          - gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
          bereitgestellt haben, in einem strukturierten, gängigen und
          maschinenlesbaren Format zu erhalten oder die Übermittlung an einen
          anderen Verantwortlichen zu verlangen;
        </p>
        <p>
          {' '}
          - gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung
          jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir
          die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die
          Zukunft nicht mehr fortführen dürfen und
        </p>
        <p>
          {' '}
          - gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.
          In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres
          üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres
          Unternehmenssitzes wenden.
        </p>
        <p>
          <strong className='title'>5. Widerspruchsrecht</strong>
        </p>
        <p>
          Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten
          Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden,
          haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
          Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür
          Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder
          sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall
          haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer
          besonderen Situation von uns umgesetzt wird.
        </p>
        <p>
          Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch
          machen, genügt eine E-Mail an pr@darna-immobilien.com.
        </p>
        <p>
          <strong className='title'>
            6. Aktualität und Änderung dieser Datenschutzerklärung Diese
            Datenschutzerklärung ist aktuell gültig und hat den Stand April
            2019.
          </strong>
        </p>
        <p>
          Durch die Weiterentwicklung unserer Website und Angebote darüber oder
          aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben
          kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die
          jeweils aktuelle Datenschutzerklärung kann jederzeit hier von Ihnen
          abgerufen und ausgedruckt werden.
        </p>
      </div>

      <FooterDe />
    </>
  )
}

export default Datenschutz
