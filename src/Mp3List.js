import React, { Component } from 'react';
import * as axios from 'axios';

import Mp3ListItem from './Mp3ListItem';
import { config } from './config';

class Mp3List extends Component {
  state = { mp3List: [] }
  
  componentDidMount() {
    axios.get(config.apiUrl)
    .then(response => {
      this.setState({ mp3List: response.data })
    });
  }

  render() {
    var mp3List = this.state.mp3List.map(function(mp3){
      return <Mp3ListItem key={mp3.id} mp3={mp3} />;
    })
    
    return  <ul>{ mp3List }</ul>;
  }
}

export default Mp3List;
