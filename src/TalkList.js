import React, { Component } from 'react';
import * as axios from 'axios';
import { css } from 'react-emotion';

import TalkListItem from './TalkListItem';
import { config } from './config';

const TalkListTable = css`
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

class TalkList extends Component {
  state = { TalkList: [] }

  componentDidMount() {
    axios.get(config.apiUrl)
      .then(response => {
        this.setState({ TalkList: response.data })
      });
  }

  render() {
    var TalkList = this.state.TalkList.map(function (Talk) {
      return <TalkListItem key={Talk.id} Talk={Talk} />;
    })

    return <table className={TalkListTable}>
    <tbody>
      <tr className={tableHeader}><th className={title}>Title</th><th className={speaker}>Speaker</th><th className={date}>Created</th></tr>
      
      {TalkList}
    </tbody></table>;
  }
}

export default TalkList;
