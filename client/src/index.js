import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

ReactDOM.render(
  <Provider store = {store}>
  <Router>
    <App />
  </Router>,
  </Provider>,
  document.getElementById('root')
);
