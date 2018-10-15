import * as React from 'react';

const Mp3Details = ({ match }) => {
  return (
    <div>Full details will show here  for mp3 id : {match.params.id}</div>
  );
};

export default Mp3Details;

