import React, { useState, useEffect } from 'react';
import * as axios from 'axios';
import { css } from 'react-emotion';

import TalkListItem from './TalkListItem';
import TalkListHeader from './TalkListHeader';
import MobilePager from './MobilePager';
import DesktopPager from './DesktopPager';
import Loading from './Loading';
import { config } from '../config';

const list = css`
  max-width: 1200px;
  padding: 24px;
  margin: auto;
`;

const TalkList = () => {

  const [talkList, setTalkList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const loadPage = (startIndex, endIndex) => {
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }

  useEffect(() => {
    axios.get(config.apiUrl)
      .then(response => {
        setTalkList(response.data);
      });
  });

  const talkListSlice = talkList
    .slice(startIndex, endIndex)
    .map(function (talk) {
      return <TalkListItem key={talk.id} Talk={talk} />;
    });

  const totalTalks = talkList.length;
  if (talkList.length === 0) {
    return <Loading />
  }
  return (<div>
    <ul className={list}>
      <TalkListHeader />
      {talkListSlice}
    </ul>
    <DesktopPager
      total={totalTalks}
      startIndex={startIndex}
      endIndex={endIndex}
      loadPage={loadPage} ></DesktopPager>

    <MobilePager
      total={totalTalks}
      endIndex={endIndex}
      loadPage={loadPage} ></MobilePager>
  </div>)
}

export default TalkList;
