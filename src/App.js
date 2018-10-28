import React, { Component } from 'react';
import { css } from 'react-emotion';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import TalkList from './components/TalkList';
import TalkDetails from './components/TalkDetails';
import TalkStore from './components/TalkStore';
import { config } from './config'

const appHeading = css`
  width: 95%;
  margin: auto
`;

class App extends Component {
  render() {
    return (
      <Router basename={'/cbt'}>
        <div className="App">
          <h1 className={appHeading}>{config.appName}</h1>
          <TalkStore>
            <Route exact path="/" component={TalkList} />
            <Route path="/details/:id" component={TalkDetails} />
          </TalkStore>
        </div>
      </Router>
    );
  }
}

export default App;
