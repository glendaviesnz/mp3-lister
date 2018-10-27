import * as React from 'react';

const TalkDetails = ({ match }) => {
  return (
    <div>Full details will show here  for Talk id : {match.params.id}</div>
  );
};

export default TalkDetails;

