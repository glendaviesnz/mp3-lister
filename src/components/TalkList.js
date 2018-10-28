import React from 'react';
import { css } from 'react-emotion';

import TalkListItem from './TalkListItem';
import TalkListHeader from './TalkListHeader';
import MobilePager from './MobilePager';
import DesktopPager from './DesktopPager';
import ListLoader from './ListLoader';
import { TalkContext } from './TalkStore';
import { config } from '../config';

const listWrapper = css`
  max-width: 1200px;
  padding: 24px;
  margin: auto;
`;

const talkList = ({ list, loadPage, startIndex, endIndex }) => (
  <div>
    <ul className={listWrapper}>
      <TalkListHeader />
      {list.slice(startIndex, endIndex)
        .map((talk) => (
          <TalkListItem key={talk.id} talk={talk} />
        ))}
    </ul>
    <DesktopPager
      total={list.length}
      startIndex={startIndex}
      endIndex={endIndex}
      loadPage={loadPage} ></DesktopPager>

    <MobilePager
      total={list.length}
      endIndex={endIndex}
      loadPage={loadPage} ></MobilePager>
  </div>
)

const TalkList = () => (
  <TalkContext.Consumer>
    {talkState => (
      <ListLoader listState={talkState} path={config.latestTalks} render={talkList} />
    )}
  </TalkContext.Consumer>
);

export default TalkList;
