import React from 'react';
import { css } from 'react-emotion';

import TalkListItem from './TalkListItem';
import TalkListHeader from './TalkListHeader';
import MobilePager from './MobilePager';
import DesktopPager from './DesktopPager';
import DataLoader from './DataLoader';

const list = css`
  max-width: 1200px;
  padding: 24px;
  margin: auto;
`;

const TalkList = () => {

  const apiPath = '/studies/list?params={%22where%22:{%22approved%22:2},%22orderBy%22:%22date_entered%22,%22order%22:%22DESC%22,%22offset%22:0,%22count%22:100}';

  return (<DataLoader path={apiPath} render={({data, loadPage, startIndex, endIndex}) => (<div>
    <ul className={list}>
      <TalkListHeader />
      {data.slice(startIndex, endIndex)
    .map( (talk) => (
      <TalkListItem key={talk.id} talk={talk} />
    ))}
    </ul>
    <DesktopPager
      total={100}
      startIndex={startIndex}
      endIndex={endIndex}
      loadPage={loadPage} ></DesktopPager>

    <MobilePager
      total={100}
      endIndex={endIndex}
      loadPage={loadPage} ></MobilePager>
  </div>)} />)
}

export default TalkList;
