import React, { Component } from 'react';
import { css } from 'react-emotion';

import './App.css';
import Mp3List from './Mp3List';
import { config } from './config'

const appHeading = css`
  width: 95%;
  margin: auto
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className={appHeading}>{config.appName}</h1>
        <Mp3List />
      </div>
    );
  }
}

export default App;
