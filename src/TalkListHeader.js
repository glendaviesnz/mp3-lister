import * as React from 'react';
import { css } from 'react-emotion';

const talkListHeader = css`
  display: none;
  grid-gap: 2px;
  margin-bottom: 8px;

  @media (min-width: 46em) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding: 4px;
    grid-gap: 4px;
  }
`;
const title = css`
  font-weight: 600;
`;

const speaker = css`
  font-weight: 600;
`;


const date = css`
  font-weight: 600;
  text-align: right;
`;


const TalkListHeader = () => {
  return (
    <div className={talkListHeader}>
      <div className={title}>Title</div>
      <div className={speaker}>Speaker</div>
      <div className={date}>Date Created</div>
    </div>
  );
};

export default TalkListHeader;
