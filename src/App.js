import React, { Component } from 'react';
import { css } from 'react-emotion';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Mp3List from './Mp3List';
import Mp3Details from './Mp3Details';
import { config } from './config'

const appHeading = css`
  width: 95%;
  margin: auto
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className={appHeading}>{config.appName}</h1>
          <Route exact path="/" component={Mp3List} />
          <Route path="/details/:id" component={Mp3Details} />
        </div>
      </Router>
    );
  }
}

export default App;
