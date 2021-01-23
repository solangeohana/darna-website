import React, { useEffect } from 'react'
import FooterDe from 'components/German/FooterDe'
import NavbarFixedDE from 'components/German/NavbarFixedDE'

const Vertrags = () => {
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
        <h3 className='section'>
          ALLGEMEINE VERTRAGS - UND NUTZUNGSBEDINGUNGEN
        </h3>
        <p>
          <strong>GELTUNGSBEREICH</strong>
        </p>
        <p>
          Diese Vertrags- und Nutzungsbedingungen regeln die Nutzung des
          Online-Angebots der Darna Immobilien GmbH, Windscheidstraße 6, 10627
          Berlin (im Folgenden: Makler) auf www.darna-immobilien.com (im
          Folgenden: Website) und das Vertragsverhältnis zwischen dem Makler und
          seinen Kunden.
        </p>
        <p>
          <strong>INHALT, URHEBERRECHTE</strong>
        </p>
        <p>
          1- Die Angebote auf der Website und in den Exposés beruhen auf den
          Angaben und Informationen des Eigentümers oder sonstiger Dritter und
          werden vom Makler nicht überprüft. Die Angebote sind freibleibend und
          unverbindlich.
        </p>
        <p>
          2- Sämtliche Rechte an den Inhalten der Website und der Exposés
          liegen, sofern dies nicht anders gekennzeichnet, beim Makler. Dem
          Kunden ist die Vervielfältigung, Verbreitung und/oder Veröffentlichung
          von urheberrechtlich geschützten Inhalten außerhalb der gesetzlichen
          Schranken der §§ 44a ff UrhG untersagt. Dieses Verbot gilt unabhängig
          davon, in welcher Form die Vervielfältigungs-, Verbreitungs- und/oder
          Veröffentlichungshandlung erfolgt und bezieht sich ausdrücklich auch
          auf die Einbeziehung urheberrechtlich geschützter Inhalte zum
          unmittelbaren Abruf (sog. embedded content).
        </p>
        <p>
          <strong>PROVISION</strong>
        </p>
        <p>
          1- Für den Nachweis der Gelegenheit zum Abschluss eines Kauf- oder
          Mietvertrags oder für die Vermittlung eines solchen Vertrags,
          verpflichtet sich der Kunde zur Zahlung einer Provision an den Makler.
          Bei Kaufverträgen beträgt die Provision 7,14% des Verkaufspreises, bei
          Mietverträgen die 2,38-fache Nettokaltmiete (jew. inkl. gesetzl.
          MwSt.). Als Verkaufspreis ist der jeweils vereinbarte Kaufpreis zzgl.
          des Wertes ggf. kaufpreismindernd übernommener Lasten (z.B. dingliches
          Wohnrecht) zu verstehen. Im Übrigen ergibt sich die Provision aus dem
          vom Makler zur Verfügung gestellten übersandten Exposé.
        </p>
        <p>
          2- Handelt es sich bei dem Kunden um einen Wohnungssuchenden, dem die
          Gelegenheit zum Abschluss von Mietverträgen über Wohnräume vermittelt
          oder nachgewiesen wurde, besteht in Abweichung von Absatz 1 keine
          Verpflichtung des Kunden zur Zahlung einer Provision, es sei denn, der
          Makler holt ausschließlich wegen des Vermittlungsvertrages mit dem
          Kunden vom Vermieter oder von einem anderen Berechtigten den Auftrag
          ein, die Wohnung anzubieten.
        </p>
        <p>
          3- Die Provision wird mit Abschluss des Kauf- bzw. Hauptvertrags
          fällig, ohne dass es einer gesonderten Rechnungsstellung bedarf.
        </p>
        <p>
          <strong>WEITERGABEVERBOT</strong>
        </p>
        <p>
          1- Der Kunde verpflichtet sich, keine ihm durch den Makler
          übermittelten Angebote, Informationen oder Exposés ohne vorherige
          schriftliche Zustimmung des Maklers zu verwerten oder dritten Personen
          mitzuteilen bzw. zukommen zu lassen.
        </p>
        <p>
          2- Für jeden Fall der schuldhaften Zuwiderhandlung gegen die
          Verpflichtung gemäß § 4 (1) dieser Allgemeinen Vertrags- und
          Nutzungsbedingungen zahlt der Kunde im Falle des Abschlusses eines
          Kauf- oder Hauptvertrags an den Makler eine Vertragsstrafe in Höhe der
          entgangenen Provision nach § 3 (1) dieser Allgemeinen Vertrags- und
          Nutzungsbedingungen, sofern daraufhin ein Kauf- oder Hauptvertrag
          zwischen dem Dritten und dem Eigentümer ohne Beteiligung des Maklers
          zustande kommt. Für die Berechnung der Provision gilt § 3 (1) dieser
          Allgemeinen Vertrags- und Nutzungsbedingungen entsprechend.
        </p>
        <p>
          3- Das vorstehende Weitergabeverbot gilt auch über die Beendigung des
          Vertragsverhältnisses hinaus.
        </p>
        <p>
          <strong>KUNDENDATEN</strong>
        </p>
        <p>
          Der Kunde sichert zu, dass die von ihm angegebenen Daten zutreffend
          und vollständig sind.
        </p>
        <p>
          <strong>DOPPELTÄTIGKEIT</strong>
        </p>
        <p>
          Der Makler ist berechtigt, sowohl für den Eigentümer als auch für den
          Kunden tätig zu werden.
        </p>
        <p>
          <strong>HAFTUNG</strong>
        </p>
        <p>
          1- Der Makler haftet nicht für die Richtigkeit und Vollständigkeit der
          auf der Website oder im Exposé aufgeführten Angebote. Soweit auf der
          Website und/oder in den Exposés als solche gekennzeichnete
          Drittinhalte (Videos oder Bilder) eingebunden sind, übernimmt der
          Makler keine Verantwortung für die Richtig- und/oder Rechtmäßigkeit
          dieser Inhalte. Hiervon losgelöst, haftet der Makler für die
          sorgfältige und fachgerechte Erbringung seiner vertraglichen
          Leistungen sowie deren Mangelfreiheit.
        </p>
        <p>
          2- Unbeschränkte Haftung: Der Makler haftet für Vorsatz und grobe
          Fahrlässigkeit. Für leichte Fahrlässigkeit haftet der Makler bei
          Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit
          von Personen.
        </p>
        <p>
          3- Haftungsbeschränkung: Der Makler haftet bei leichter Fahrlässigkeit
          im Übrigen nur
        </p>
        <p>
          - BEI DER VERLETZUNG EINER WESENTLICHEN VERTRAGSPFLICHT, DEREN
          ERFÜLLUNG DIE ORDNUNGSGEMÄSSE DURCHFÜHRUNG DES VERTRAGES ÜBERHAUPT
          ERST ERMÖGLICHT UND AUF DEREN EINHALTUNG DER KUNDE REGELMÄSSIG
          VERTRAUEN DARF (KARDINALPFLICHT), U
        </p>
        <p>
          - DER HÖHE NACH BESCHRÄNKT AUF DIE BEI VERTRAGSSCHLUSS VORHERSEHBAREN
          UND VERTRAGSTYPISCHEN SCHÄDEN.
        </p>
        <p>
          4- Diese Haftungsbeschränkung gilt auch zugunsten der
          Erfüllungsgehilfen des Maklers.
        </p>
        <p>
          <strong>SCHLUSSBESTIMMUNGEN</strong>
        </p>
        <p>
          1- Sollten diese Vertrags- und Nutzungsbedingungen unwirksame
          Regelungen enthalten, bleibt die Wirksamkeit der Bedingungen im
          Übrigen unberührt.
        </p>
        <p>
          2- Auf die vorliegenden Bedingungen ist ausschließlich deutsches Recht
          unter Ausschluss des UN-Kaufrechts anwendbar.
        </p>
        <p>
          3- Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts
          oder öffentlich-rechtliches Sondervermögen, so ist Berlin
          Gerichtsstand für alle sich aus diesem oder im Zusammenhang mit diesen
          Bedingungen ergebenden Streitigkeiten.
        </p>
      </div>
      <FooterDe />
    </>
  )
}

export default Vertrags
