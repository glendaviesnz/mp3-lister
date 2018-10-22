import React, { Component } from 'react';
import * as axios from 'axios';
import { css } from 'react-emotion';

import TalkListItem from './TalkListItem';
import TalkListHeader from './TalkListHeader';
import MobilePager from './MobilePager';
import DesktopPager from './DesktopPager';
import { config } from './config';

const list = css`
  max-width: 1200px;
  padding: 24px;
  margin: auto;
`;

class TalkList extends Component {
  state = {
    talkList: [],
    startIndex: 0,
    endIndex: 10
  }
  loadMore = e => {
    console.log(e);
    this.setState({
      startIndex: 0,
      endIndex: e
    }
    );
  }
  loadPage = (startIndex, endIndex) => {
    this.setState({
      startIndex,
      endIndex
    });
  }
  componentDidMount() {
    axios.get(config.apiUrl)
      .then(response => {
        this.setState({ talkList: response.data })
      });
  }

  render() {
    const talkList = this.state.talkList
      .slice(this.state.startIndex, this.state.endIndex)
      .map(function (talk) {
        return <TalkListItem key={talk.id} Talk={talk} />;
      })

    const totalTalks = this.state.talkList.length;

    return <div>
      <ul className={list}>
        <TalkListHeader />
        {talkList}
      </ul>
      <DesktopPager
        total={totalTalks}
        startIndex={this.state.startIndex}
        endIndex={this.state.endIndex}
        loadPage={this.loadPage} ></DesktopPager>

      <MobilePager
        total={totalTalks}
        endIndex={this.state.endIndex}
        loadPage={this.loadPage} ></MobilePager>
    </div>
  }
}

export default TalkList;
