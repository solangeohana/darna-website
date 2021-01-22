import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const ImportantTerms = () => {
  const backgroundImage = 'url(' + require('assets/img/book.jpg') + ')'

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
          title='Important Terms To Know When Apartment Hunting in Berlin'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            As a non-German speaker moving to Berlin, navigating the rental
            market can be an extremely daunting experience. With
            convoluted-looking terms such as renovierungsbedürftig and
            Wohnberechtigungsschein, apartment hunting can quickly become
            devolve into scratching your head and sighing with frustration. And
            while Google Translate can be a useful tool for translating
            apartment listings, it’s quite limited when it comes to translating
            some of the more technical German rental terms. Enlisting a
            German-speaking friend to help you scour through applications is an
            option, but time-consuming. In an effort to make your experience an
            easier, faster and less painful one, we’ve put together a list of
            useful and important terms to know when apartment hunting in Berlin.
          </p>
          <p><strong>Housing</strong></p>
          <p>- Wohnung - Flat or apartment</p>
          <p>- Dachgeschoss or DG  - Loft apartment</p>
          <p>- Wohngemeinschaft or WG - Flat sharing or commune</p>
          <p>- Mehrfamilienhaus or MFH - Several flats within one building</p>
          <p>- Möblierte Wohnung - Furnished apartment</p>
          <p>- Zur Miete - For rent</p>
          <p>- Zum Kauf - For sale</p>
          <p>- Wohnung Tauschen - Flat or apartment swap or trade</p>
          <p>- Altbau - An apartment building constructed before the Second World War. They’re quite desirable although difficult to find.</p>
          <p>- Neubau - A newly constructed building.</p>
          <p><strong>Apartment Layout</strong></p>
          <p>- Zimmer or Zi. - A room, usually a bedroom.</p>
          <p>- Qm or m2 - Square meters</p>
          <p>- Schlafzimmer - Bedroom</p>
          <p>- Badezimmer - Bathroom</p>
          <p>- Kuche - Kitchen</p>
          <p>- Wohnzimmer - Living room</p>
          <p>- Flur - Hallway</p>
          <p>- Wohnfläche - Living area; the total size of the space that you’re renting.</p>
          <p>- Nutzfläche - Usable space</p>
          <p><strong>Rent &  Utilities</strong></p>
          <p>- Miete - Rent</p>
          <p>- Jährlich - Yearly</p>
          <p>- Monatlich - Monthly</p>
          <p>- Jahresmiete - Annual rent</p>
          <p>- Mietpreis - Rental price </p>
          <p>- Kaution - Deposit</p>
          <p>- Provision - Commission</p>
          <p>- Kaltmiete - Cold rental; the rental price without additional costs</p>
          <p>- Warmmiete - Warm rental; the rental price with additional costs</p>
          <p>- Nebenkosten - Additional costs; this usually means water, utilities, trash collection, etc</p>
          <p>- Nachmieter - Someone searching for a new tenant to replace them when they leave</p>
          <p>- Hauptmieter - The main renter</p>
          <p>- Mieter - A renter</p>
          <p>- Vermieter - The landlord</p>
          <p>- Zuzüglich - Excluding</p>
          <p>- Inklusive - Including</p>
          <p><strong>Features</strong></p>
          <p>- Einbauküche - Fully-equipped kitchen</p>
          <p>- Tiefgarage - Underground garage</p>
          <p>- Parkett -  Hardwood floors</p>
          <p>- Laminat - Laminate floors</p>
          <p>- Spülmaschine - Dishwasher</p>
          <p>- Waschmaschine - Washing machine</p>
          <p>- Möbliert - Fully furnished</p>
          <p>- Aufzug - Elevator</p>
          <p>- Balkon - Balcony</p>
          <p>- Terrasse -Terrace</p>
          <p>- Kabelanschluss - Cable connection for TV & Internet</p>
          <p>- Offener Kamin - Fireplace</p>
          <p>- Fahrradraum - Bicycle storage room</p>
          <p>- Abstellraum - Storage room</p>
          <p>- Badwanne  - Bathtub</p>
          <p>- Dusche - Shower</p>
          <p>- Helles - Light</p>
          <p>- Sonniges - Sunny</p>
          <p><strong>Location</strong></p>
          <p>- Erdgeschoss - Ground floor</p>
          <p>- 2nd Obergeschoss - Second floor</p>
          <p>- 1. Etage - First floor</p>
          <p>- 2. Stock - Second floor</p>
          <p>- Untergeschoss - Basement floor</p>
          <p>- Postleitzahl - Postal code</p>
          <p>- Seitenstrasse - Side street</p>
          <p>- Universitätsnähe - Close to a university</p>
          <p>- Kiez - Neighborhood</p>
          <p>- Vorderhaus - Front building</p>
          <p>- Hinterhaus - Back building</p>
          <p>- Seitenflügel - Side wing</p>
          <p>- Verkehrsanbindung - With access to public transportation</p>
          <p>- Zentrum - City center</p>
          <p><strong>Miscellaneous </strong></p>
          <p>- Nichtraucher - Non-smoker</p>
          <p>- Wohnberechtigungsschein - State-subsidized housing which can only be rented to those with a special permit.</p>
          <p>- Tierhaltung - Allowed to have pets</p>
          <p>- Ab sofort - Available immediately</p>
          <p>- GEZ - A licensing fee per flat that all tenants in Germany have to pay each month.</p>
          <p>- Anmeldung - The process of registering your address, essential for getting an apartment in Berlin.</p>
          <p>- Makler - Real estate agent</p>
          <br/>
          <p><small>Photo by Danylo Suprun</small></p>

          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default ImportantTerms
