import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const PropertyValue = () => {
  const backgroundImage = 'url(' + require('assets/img/landing-2.jpg') + ')'

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
      <MyNavbar />
      <div className='wrapper'>
        <BlogHeader
          title='Selling Your Property: 5 Common Questions'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            Deutsche Bank said in a report that “we expect that, during the
            coming years, house prices will continue to rise in all metropolitan
            areas covered” while the Central Real Estate Committee (ZIA) warned
            that the construction of new housing is being "totally neglected.”
            Property value will continue to increase; however, property use
            leads to wear and tear. Renovation and refurbishment are
            inescapable. Renovating certain areas in the house or on the
            property can have a positive effect on the market value of the
            property. DARNA presents you with the seven best ideas that will pay
            off when the property is sold.
          </p>
          <p>
            <strong className='title'>1- Beautify the facade</strong>
          </p>
          <p>
            - A new paint job is the easiest and most common way to improve
            property value.
          </p>
          <p>- New plaster or materials can make a big difference.</p>
          <p>
            - If it is an entire building, consider improving its outside look.
          </p>
          <p>
            <strong className='title'>
              2- If there’s a garden, landscape it
            </strong>
          </p>
          <p>- A well kept garden promotes well being.</p>
          <p>
            - Gardens are known to elicit positive emotions and help owners
            relax.
          </p>
          <p>
            <strong className='title'>3- Energy-efficient renovation</strong>
          </p>
          <p>
            - Heating is often not up to modern standards. Maybe the house is
            poorly insulated and heat is pulled through the windows.
          </p>
          <p>- This should be done for the entire building when possible.</p>
          <p>
            <strong className='title'>4- Make more space</strong>
          </p>
          <p>
            - Every additional square meter of living space increases the market
            value of your property.
          </p>
          <p>
            - For example, American-style kitchens, also known as “open concept
            kitchens” can be incorporated into the living room while the old
            kitchen itself can be converted into a study or walk-in closet. It
            also carries a benefit for social life and introduces a unity not
            only to the spatial arrangement but into the lives of the owners as
            well.
          </p>
          <p>
            - Knocking down non-load-bearing walls and opening the floor plan
            can add more space.
          </p>
          <p>
            <strong className='title'>5- Install security measures</strong>
          </p>
          <p>
            - Many owners don’t know that security renovations can be supported
            by the State in the form of KfW grants.
          </p>
          <p>
            - Security measures include burglar-resistant front doors, windows,
            and motion detectors among other things.
          </p>
          <p>
            <strong className='title'>
              6- Make your property as handicap accessible as possible
            </strong>
          </p>
          <p>- Another measure to be done that the State supports.</p>
          <p>
            - Accessibility includes widened doors, barrier-free access,
            floor-to-ceiling showers, or changing the layout of the room.
          </p>
          <p>
            - One in five Germans is over 65 years old, but only 2% of
            apartments are suited for old age.
          </p>
          <p>
            <strong className='title'>
              7- Improving upon a parking garage or private parking space
            </strong>
          </p>
          <p>
            - Many prospective buyers find a garage or private space an
            important criterion, if you happen to already have one.
          </p>
          <p>- Many insurers also offer discounts to garage owners.</p>
          <p>
            - One of the quickest ways to improve upon a parking space is by
            adding electrical outlets and lighting.
          </p>
          <p>
            - For the more environmentally minded, one can add a recharge
            station for electric vehicles.
          </p>
          <p>
            {' '}
            <br />
            Here at DARNA, we have seen and done it all. Join us for one of our
            Raise Your Property Value workshops or contact us today for a free
            virtual consultation.
          </p>
          <br /> <br />
          <h6>***Deutsch***</h6>
          <br /> <br />
          <h3>7 Möglichkeiten Ihren Immobilienwert zu verbessern</h3>
          <p>
            Die Deutsche Bank sagte in einem Bericht, dass "wir erwarten, dass
            die Immobilienpreise in den kommenden Jahren in allen abgedeckten
            Ballungsräumen weiter steigen werden", während das Zentraler
            Immobilien Ausschuss e.V. (ZIA) warnte, dass der Bau neuer Wohnungen
            "völlig vernachlässigt wird”. Der Immobilienwert wird weiter
            steigen, die Nutzung von Immobilien führt jedoch zu Verschleiß.
            Renovierung ist unvermeidlich. Die Renovierung bestimmter Bereiche
            im Haus oder auf dem Grundstück kann sich positiv auf den Marktwert
            des Grundstücks auswirken. DARNA präsentiert Ihnen die 7 besten
            Ideen, die sich beim Verkauf der Immobilie auszahlen.
          </p>
          <p>
            <strong className='title'>1- Verschönern Sie die Fassade</strong>
          </p>
          <p>
            - Ein neuer Anstrich ist der einfachste Weg, um den Immobilienwert
            zu verbessern.
          </p>
          <p>
            - Neuer Putz oder neue Materialien können einen großen Unterschied
            machen.
          </p>
          <p>
            - Wenn es sich um ein ganzes Gebäude handelt, sollten Sie das äußere
            Erscheinungsbild verbessern.
          </p>
          <p>
            <strong className='title'>
              2- Wenn es einen Garten gibt, gestalten Sie ihn
            </strong>
          </p>
          <p>- Ein gepflegter Garten fördert das Wohlbefinden.</p>
          <p>
            - Gärten rufen positive Emotionen hervor und helfen den Eigentümern
            sich zu entspannen.
          </p>
          <p>
            <strong className='title'>3- Energieeffiziente Renovierung</strong>
          </p>
          <p>
            - Die Heizung entspricht oft nicht den modernen Standards.
            Vielleicht ist das Haus schlecht isoliert und Wärme kann durch die
            Fenster entweichen.
          </p>
          <p>
            - Dies sollte nach Möglichkeit für das gesamte Gebäude erfolgen.
          </p>
          <p>
            <strong className='title'>4- Schaffen Sie Platz</strong>
          </p>
          <p>
            - Jeder weitere Quadratmeter Wohnfläche erhöht den Marktwert Ihrer
            Immobilie.
          </p>
          <p>
            - Beispielsweise können Küchen im amerikanischen Stil, auch als
            „offene Konzeptküchen“ bezeichnet, in das Wohnzimmer integriert
            werden, während die alte Küche selbst in ein Arbeitszimmer oder
            einen begehbaren Kleiderschrank umgewandelt werden kann. Dies kann
            nicht nur die räumliche Anordnung, sondern auch das soziale Leben
            der Eigentümer verbessern.
          </p>
          <p>
            - Das Abreißen nicht tragender Wände und das Öffnen des Grundrisses
            können mehr Platz schaffen.
          </p>
          <p>
            <strong className='title'>
              5- Installieren Sie Sicherheitsmaßnahmen
            </strong>
          </p>
          <p>
            - Viele Eigentümer wissen nicht, dass Sicherheitsrenovierungen vom
            Staat in Form von KfW-Zuschüssen unterstützt werden können.
          </p>
          <p>
            - Zu den Sicherheitsmaßnahmen zählen unter anderem einbruchhemmende
            Haustüren, Fenster und Bewegungsmelder.
          </p>
          <p>
            <strong className='title'>
              6- Machen Sie Ihre Immobilie so behindertengerecht wie möglich.
            </strong>
          </p>
          <p>- Eine weitere Maßnahme, die der Staat unterstützt.</p>
          <p>
            - Dies umfasst erweiterte Türen, barrierefreien Zugang, raumhohe
            Duschen oder Änderungen der Raumaufteilung.
          </p>
          <p>
            - Jeder fünfte Deutsche ist über 65 Jahre alt, aber nur 2% der
            Wohnungen sind altersgerecht.
          </p>
          <p>
            <strong className='title'>
              7- Verbesserung eines Parkhauses oder eines privaten Parkplatzes
            </strong>
          </p>
          <p>
            - Viele potenzielle Käufer finden eine Garage oder einen privaten
            Parkplatz ein wichtiges Kriterium, falls Sie dies bereits haben.
          </p>
          <p>- Viele Versicherer bieten Garagenbesitzern auch Rabatte an.</p>
          <p>
            - Eine der schnellsten Möglichkeiten, einen Parkplatz zu verbessern,
            ist das Hinzufügen von Steckdosen und Beleuchtung.
          </p>
          <p>
            - Für Umweltbewusste kann man eine Ladestation für Elektrofahrzeuge
            hinzufügen.
          </p>
          <p>
            {' '}
            <br />
            Hier bei DARNA haben wir alles gesehen und getan. Nehmen Sie an
            einem unserer Raise Your Property Value-Workshops teil oder
            kontaktieren Sie uns noch heute für eine kostenlose virtuelle
            Beratung.
          </p>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default PropertyValue
