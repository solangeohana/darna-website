import React, { Component } from 'react'
import { BrowserRouter as Router,
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

//German screens :
import HomePageScreenDE from './screens/German/HomePageScreenDE'
import BuyingScreenDE from './screens/German/BuyingScreenDE'
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
          path='/de'
          render={(props) => <HomePageScreenDE {...props} />}
        />
        <Route
          path='/de/kaufen'
          render={(props) => <BuyingScreenDE {...props} />}
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
