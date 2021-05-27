import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch } from "react-router-dom";
import LandingPage from './views/LandingPage/TeamSection.jsx'
import { createBrowserHistory } from "history";

var his = createBrowserHistory();
ReactDOM.render(
  <Router history={his}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
    </Switch>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
