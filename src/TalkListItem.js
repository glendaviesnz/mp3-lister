import * as React from 'react';
import { css } from 'react-emotion';
import { Link } from "react-router-dom";

const talkListItem = css`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 8px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  padding: 8px;
  &:hover {
    background-color: grey;
  }

  @media (min-width: 46em) {
    grid-template-columns: 2fr 1fr 1fr;
    border: 0px;
    border-radius: 0px;
    padding: 4px;
    grid-gap: 4px;
  }
`;
const title = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 46em) {
    grid-column: 1/3;
    font-weight: 600;
  }
`;

const speaker = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const talkLink = css`
    text-decoration: none;
    color: black;
`;
const date = css`
    text-align: right;
`;


const TalkListItem = ({ Talk }) => {
  // console.log(Talk);
  return (
    <Link to={`/details/${Talk.id}`} className={talkLink}>
    <div className={talkListItem}>
      <div className={title}>{Talk.title}</div>
      <div className={speaker}>{Talk.speaker}</div>
      <div className={date}>{formatDate(Talk.date_entered)}</div>
    </div>
    </Link>
  );
};

export default TalkListItem;

function formatDate(date) {

  const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dateParts = date.split('-');

  return `${shortMonths[dateParts[1] - 1]} ${dateParts[0]}`;
}