import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import LandingPage from './views/LandingPage/TeamSection.jsx'
import LoginPage from './views/LoginPage/'
import ProfilePage from './views/ProfilePage/'

var his = createBrowserHistory();

ReactDOM.render(
  <Router history={his}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
