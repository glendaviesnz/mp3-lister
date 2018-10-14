import React, { Component } from 'react';
import * as axios from 'axios';
import { css } from 'react-emotion';

import Mp3ListItem from './Mp3ListItem';
import { config } from './config';

const mp3ListTable = css`
  width: 95%;
  table-layout: fixed;
  margin: auto
`;

const tableHeader = css`
  text-align: left;
`;

const title = css`
  width: 60%;
  padding: 4px;
`;

const speaker = css`
  width: 20%;
  padding: 4px;
`;

const date = css`
  width: 20%;
  padding: 4px;
`;

class Mp3List extends Component {
  state = { mp3List: [] }

  componentDidMount() {
    axios.get(config.apiUrl)
      .then(response => {
        this.setState({ mp3List: response.data })
      });
  }

  render() {
    var mp3List = this.state.mp3List.map(function (mp3) {
      return <Mp3ListItem key={mp3.id} mp3={mp3} />;
    })

    return <table className={mp3ListTable}>
    <tbody>
      <tr className={tableHeader}><th className={title}>Title</th><th className={speaker}>Speaker</th><th className={date}>Created</th></tr>
      
      {mp3List}
    </tbody></table>;
  }
}

export default Mp3List;
