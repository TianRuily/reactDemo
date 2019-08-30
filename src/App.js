import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
import Routers from './routes'

import './App.css';
import './theme/index.less';
const browserHistory = createBrowserHistory()


export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Routers />
      </Router>
    );
  }
}