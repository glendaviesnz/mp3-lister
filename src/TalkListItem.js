import * as React from 'react';
import { css } from 'react-emotion';
import { Link } from "react-router-dom";

const title = css`
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px;
`;

const speaker = css`
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px;
`;

const date = css`
  width: 20%;
  padding: 4px;
`;


const TalkListItem = ({Talk}) => {
    console.log(Talk);
    return (
    <tr>
      <td className={title}><Link to={`/details/${Talk.id}`}>{ Talk.title }</Link></td>
      <td className={speaker}>{ Talk.speaker }</td>
      <td className={date}>{ formatDate(Talk.date_entered ) }</td>
    </tr>
  );
};

export default TalkListItem;

function formatDate(date)  {

    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dateParts = date.split('-');

    return `${shortMonths[dateParts[1] - 1]} ${dateParts[0]}`;
}