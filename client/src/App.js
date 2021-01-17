import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
//   Redirect,
} from 'react-router-dom'

// styles for this kit
import 'assets/css/bootstrap.min.css'
import 'assets/scss/now-ui-kit.scss?v=1.4.0'
import 'assets/demo/demo.css?v=1.4.0'
import 'assets/demo/nucleo-icons-page-styles.css?v=1.4.0'

//English screens :
import HomePageScreen from './screens/English/HomePageScreen'
import BuyingScreen from './screens/English/BuyingScreen'
import RentingDetailsScreen from './screens/English/RentingDetailsScreen'
import RentingScreen from './screens/English/RentingScreen'
import SellingScreen from './screens/English/SellingScreen'
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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path='/en'
            render={(props) => <HomePageScreen {...props} />}
          />
          <Route
            path='/en/buy'
            render={(props) => <BuyingScreen {...props} />}
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
            path='/admin/login'
            render={(props) => <LoginScreen {...props} />}
          />
          <Route
            path='/admin/dashboard'
            render={(props) => <DashboardScreen {...props} />}
          />
          <Route
            exact
            path='/admin/rent'
            render={(props) => <RentingListScreen {...props} />}
          />
          <Route
            path='/admin/rent/:id'
            render={(props) => <RentingEditScreen {...props} />}
          />
          {/* <Redirect from='/' to='/en' /> */}
        </Switch>
      </Router>
    )
  }
}

export default App
