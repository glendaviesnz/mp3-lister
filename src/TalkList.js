import React, { Component } from 'react';
import * as axios from 'axios';
import { css } from 'react-emotion';

import TalkListItem from './TalkListItem';
import { config } from './config';

const list = css`
  max-width: 1200px;
  padding: 24px;
  margin: auto
`;

class TalkList extends Component {
  state = { talkList: [] }

  componentDidMount() {
    axios.get(config.apiUrl)
      .then(response => {
        this.setState({ talkList: response.data })
      });
  }

  render() {
    var talkList = this.state.talkList.map(function (talk) {
      return <TalkListItem key={talk.id} Talk={talk} />;
    })

    return <ul className={list}>
      {talkList}
    </ul>
  }
}

export default TalkList;
