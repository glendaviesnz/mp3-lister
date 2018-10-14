import * as React from 'react';
import { css } from 'react-emotion';

const title = css`
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const speaker = css`
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const date = css`
  width: 20%;
`;


const Mp3ListItem = ({mp3}) => {
    console.log(mp3);
    return (
    <tr>
      <td className={title}>{ mp3.title }</td>
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