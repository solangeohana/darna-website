import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit

import MyLandingPage from "./screens/English/MyLandingPage";
import BuyingPage from "./screens/English/BuyingPage"
import LandingPageDe from "./screens/German/LandingPageDe";
import BuyingPageDe from "./screens/German/BuyingPageDe"
import RentingPage from "./screens/English/RentingPage"
import SellingPage from "./screens/English/SellingPage"
import FeeStructure from "./screens/English/FeeStructure"

class App extends Component {


    render() {
        return (

            <Switch>
                <Route
                    exact path="/en"
                    render={(props) => <MyLandingPage {...props} />}
                />
                <Route
                    path="/en/buy"
                    render={(props) => <BuyingPage {...props} />}
                />
                <Route
                    exact path="/en/rent"
                    render={(props) => <RentingPage {...props} />}
                />
                 <Route
                    exact path="/en/sell"
                    render={(props) => <SellingPage {...props} />}
                />
                <Route
                    exact path="/en/fee-structure"
                    render={(props) => <FeeStructure {...props} />}
                />
                <Route
                    exact path="/de"
                    render={(props) => <LandingPageDe {...props} />}
                />
                <Route
                    path="/de/kaufen"
                    render={(props) => <BuyingPageDe {...props} />}
                />
                <Redirect from="/" to="/en" />

            </Switch>

        )
    }
}

export default App
