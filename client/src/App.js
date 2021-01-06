import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

//English screens :
import HomePageScreen from "./screens/English/HomePageScreen";
import BuyingScreen from "./screens/English/BuyingScreen"
import RentingScreen from "./screens/English/RentingScreen"
import SellingScreen from "./screens/English/SellingScreen"
import FeeStructureScreen from "./screens/English/FeeStructureScreen"
//German screens : 
import HomePageScreenDE from "./screens/German/HomePageScreenDE";
import BuyingScreenDE from "./screens/German/BuyingScreenDE"

class App extends Component {


    render() {
        return (

            <Switch>
                <Route
                    exact path="/en"
                    render={(props) => <HomePageScreen {...props} />}
                />
                <Route
                    path="/en/buy"
                    render={(props) => <BuyingScreen {...props} />}
                />
                <Route
                    exact path="/en/rent"
                    render={(props) => <RentingScreen {...props} />}
                />
                 <Route
                    exact path="/en/sell"
                    render={(props) => <SellingScreen {...props} />}
                />
                <Route
                    exact path="/en/fee-structure"
                    render={(props) => <FeeStructureScreen {...props} />}
                />
                <Route
                    exact path="/de"
                    render={(props) => <HomePageScreenDE {...props} />}
                />
                <Route
                    path="/de/kaufen"
                    render={(props) => <BuyingScreenDE {...props} />}
                />
                <Redirect from="/" to="/en" />

            </Switch>

        )
    }
}

export default App
