import * as React from 'react';

const Mp3ListItem = ({mp3}) => {
    return (
    <li>
      { mp3.title } - { mp3.speaker }
    </li>
  );
};

export default Mp3ListItem ;