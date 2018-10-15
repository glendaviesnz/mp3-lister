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


const Mp3ListItem = ({mp3}) => {
    console.log(mp3);
    return (
    <tr>
      <td className={title}><Link to={`/details/${mp3.id}`}>{ mp3.title }</Link></td>
      <td className={speaker}>{ mp3.speaker }</td>
      <td className={date}>{ formatDate(mp3.date_entered ) }</td>
    </tr>
  );
};

export default Mp3ListItem;

function formatDate(date)  {

    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dateParts = date.split('-');

    return `${shortMonths[dateParts[1] - 1]} ${dateParts[0]}`;
}