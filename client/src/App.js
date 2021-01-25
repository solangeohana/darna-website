import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  //  Redirect
} from 'react-router-dom'

// styles for this kit
import 'assets/css/bootstrap.min.css'
import 'assets/scss/now-ui-kit.scss?v=1.4.0'
import 'assets/demo/demo.css?v=1.4.0'
import 'assets/demo/nucleo-icons-page-styles.css?v=1.4.0'

//English screens :
import HomePageScreen from './screens/English/HomePageScreen'
import SellingScreen from './screens/English/SellingScreen'
import RentingScreen from './screens/English/RentingScreen'
import RentingDetailsScreen from './screens/English/RentingDetailsScreen'
import BuyingScreen from './screens/English/BuyingScreen'
import BuyingDetailsScreen from './screens/English/BuyingDetailsScreen'
import CommercialScreen from './screens/English/CommercialScreen'
import CommercialDetailsScreen from './screens/English/CommercialDetailsScreen'
import FeeStructureScreen from './screens/English/FeeStructureScreen'
import AboutUsScreen from './screens/English/AboutUsScreen'
import RelocationTipsScreen from './screens/English/RelocationTipsScreen'
import ContactScreen from './screens/English/ContactScreen'
import Friends from './screens/English/Friends'

//German screens :
import HomePageScreenDE from './screens/German/HomePageScreenDE'
import BuyingScreenDE from './screens/German/BuyingScreenDE'
import BuyingDetailsScreenDE from './screens/German/BuyingDetailsScreenDE'
import RentingScreenDE from './screens/German/RentingScreenDE'
import RentingDetailsScreenDE from './screens/German/RentingDetailsScreenDE'
import CommercialScreenDE from './screens/German/CommercialScreenDE'
import CommercialDetailsScreenDE from './screens/German/CommercialDetailsScreenDE'
import SellingScreenDE from './screens/German/SellingScreenDE'
import ImmobilieBewerten from './screens/German/ImmobilieBewerten'
import UberUnsScreen from './screens/German/UberUnsScreen'
import FeeStructureScreenDE from './screens/German/FeeStructureScreenDE'
import RelocationTipsScreenDE from './screens/German/RelocationTipsScreenDE'
import Freunde from './screens/German/Freunde'
import Kontakt from './screens/German/Kontakt'

//Blog
import BlogScreen from './screens/English/Blog/BlogScreen'
import SellingProperty from './screens/English/Blog/SellingProperty'
import PropertyValue from './screens/English/Blog/PropertyValue'
import LGBTRessources from './screens/English/Blog/LGBTRessources'
import ImportantTerms from './screens/English/Blog/ImportantTerms'
import Anmeldung from './screens/English/Blog/Anmeldung'
import Schufa from './screens/English/Blog/Schufa'
import Documents from './screens/English/Blog/Documents'
import Costs from './screens/English/Blog/Costs'
import QueerInBerlin from './screens/English/Blog/QueerInBerlin'
import SeeAndFeel from './screens/English/Blog/SeeAndFeel'
import SevenThings from './screens/English/Blog/SevenThings'
import GayAreas from './screens/English/Blog/GayAreas'

//Legal
import Impressum from './screens/German/legal/Impressum'
import Datenschutz from './screens/German/legal/Datenschutz'
import Vertrags from './screens/German/legal/Vertrags'

//ADMIN
import LoginScreen from './screens/Admin/LoginScreen'
import DashboardScreen from './screens/Admin/DashboardScreen'
import RentingListScreen from './screens/Admin/RentingListScreen'
import RentingEditScreen from './screens/Admin/RentingEditScreen'
import BuyingListScreen from './screens/Admin/BuyingListScreen'
import BuyingEditScreen from './screens/Admin/BuyingEditScreen'
import CommercialListScreen from './screens/Admin/CommercialListScreen'
import CommercialEditScreen from './screens/Admin/CommercialEditScreen'

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Redirect from='/' to='/en' /> */}

        <Route
          exact
          path='/en'
          render={(props) => <HomePageScreen {...props} />}
        />
        <Route
          exact
          path='/en/buy'
          render={(props) => <BuyingScreen {...props} />}
        />
        <Route
          path='/en/buy/:id'
          render={(props) => <BuyingDetailsScreen {...props} />}
        />
        <Route
          exact
          path='/en/rent'
          render={(props) => <RentingScreen {...props} />}
        />
        <Route
          path='/en/rent/:id'
          render={(props) => <RentingDetailsScreen {...props} />}
        />
        <Route
          exact
          path='/en/sell'
          render={(props) => <SellingScreen {...props} />}
        />
        <Route
          exact
          path='/en/commercial'
          render={(props) => <CommercialScreen {...props} />}
        />
        <Route
          path='/en/commercial/:id'
          render={(props) => <CommercialDetailsScreen {...props} />}
        />
        <Route
          exact
          path='/en/fee-structure'
          render={(props) => <FeeStructureScreen {...props} />}
        />
        <Route
          exact
          path='/en/about'
          render={(props) => <AboutUsScreen {...props} />}
        />
        <Route
          exact
          path='/en/relocation-tips'
          render={(props) => <RelocationTipsScreen {...props} />}
        />
        <Route
          exact
          path='/en/contact'
          render={(props) => <ContactScreen {...props} />}
        />
        <Route
          exact
          path='/en/friends'
          render={(props) => <Friends {...props} />}
        />
        <Route
          exact
          path='/en/blog'
          render={(props) => <BlogScreen {...props} />}
        />
        <Route
          exact
          path='/en/blog/selling-your-property-common-questions'
          render={(props) => <SellingProperty {...props} />}
        />
        <Route
          exact
          path='/en/blog/7-ways-to-improve-your-property-value'
          render={(props) => <PropertyValue {...props} />}
        />
        <Route
          exact
          path='/en/blog/important-resources'
          render={(props) => <LGBTRessources {...props} />}
        />
        <Route
          exact
          path='/en/blog/important-terms-to-know'
          render={(props) => <ImportantTerms {...props} />}
        />
        <Route
          exact
          path='/en/blog/how-to-get-your-anmeldung'
          render={(props) => <Anmeldung {...props} />}
        />
        <Route
          exact
          path='/en/blog/what-is-a-schufa'
          render={(props) => <Schufa {...props} />}
        />
        <Route
          exact
          path='/en/blog/documents-needed-to-rent'
          render={(props) => <Documents {...props} />}
        />
        <Route
          exact
          path='/en/blog/cost-of-renting-berlin'
          render={(props) => <Costs {...props} />}
        />
        <Route
          exact
          path='/en/blog/queer-in-berlin'
          render={(props) => <QueerInBerlin {...props} />}
        />
        <Route
          exact
          path='/en/blog/things-you-can-only-see-and-feel-in-berlin'
          render={(props) => <SeeAndFeel {...props} />}
        />
        <Route
          exact
          path='/en/blog/7-things-you-should-know-before-moving-to-berlin'
          render={(props) => <SevenThings {...props} />}
        />
        <Route
          exact
          path='/en/blog/the-best-gay-residential-areas-in-berlin'
          render={(props) => <GayAreas {...props} />}
        />
        <Route
          exact
          path='/de'
          render={(props) => <HomePageScreenDE {...props} />}
        />
         <Route
          exact
          path='/de/immobilie-bewerten'
          render={(props) => <ImmobilieBewerten {...props} />}
        />
        <Route
          exact
          path='/de/preisliste'
          render={(props) => <FeeStructureScreenDE {...props} />}
        />
        <Route
          exact
          path='/de/umzugstipps'
          render={(props) => <RelocationTipsScreenDE {...props} />}
        />
        <Route
          exact
          path='/de/freunde'
          render={(props) => <Freunde {...props} />}
        />
        <Route
          exact
          path='/de/kontakt'
          render={(props) => <Kontakt {...props} />}
        />
        <Route
          exact
          path='/de/verkaufen'
          render={(props) => <SellingScreenDE {...props} />}
        />
        <Route
          exact
          path='/de/kaufen'
          render={(props) => <BuyingScreenDE {...props} />}
        />
        <Route
          path='/de/kaufen/:id'
          render={(props) => <BuyingDetailsScreenDE {...props} />}
        />
        <Route
          exact
          path='/de/mieten'
          render={(props) => <RentingScreenDE {...props} />}
        />
        <Route
          path='/de/mieten/:id'
          render={(props) => <RentingDetailsScreenDE {...props} />}
        />
        <Route
          exact
          path='/de/gewerbe'
          render={(props) => <CommercialScreenDE {...props} />}
        />
        <Route
          path='/de/gewerbe/:id'
          render={(props) => <CommercialDetailsScreenDE {...props} />}
        />
        <Route
          exact
          path='/de/uber-uns'
          render={(props) => <UberUnsScreen {...props} />}
        />
        <Route
          exact
          path='/de/impressum'
          render={(props) => <Impressum {...props} />}
        />
        <Route
          exact
          path='/de/datenschutz'
          render={(props) => <Datenschutz {...props} />}
        />
        <Route
          exact
          path='/de/vertrag'
          render={(props) => <Vertrags {...props} />}
        />

        <Route
          path='/en/admin/login'
          render={(props) => <LoginScreen {...props} />}
        />
        <Route
          path='/en/admin/dashboard'
          render={(props) => <DashboardScreen {...props} />}
        />
        <Route
          exact
          path='/en/admin/rent'
          render={(props) => <RentingListScreen {...props} />}
        />
        <Route
          path='/en/admin/rent/:id'
          render={(props) => <RentingEditScreen {...props} />}
        />
        <Route
          exact
          path='/en/admin/buy'
          render={(props) => <BuyingListScreen {...props} />}
        />
        <Route
          path='/en/admin/buy/:id'
          render={(props) => <BuyingEditScreen {...props} />}
        />
        <Route
          exact
          path='/en/admin/commercial'
          render={(props) => <CommercialListScreen {...props} />}
        />
        <Route
          path='/en/admin/commercial/:id'
          render={(props) => <CommercialEditScreen {...props} />}
        />
      </Router>
    )
  }
}

export default App
