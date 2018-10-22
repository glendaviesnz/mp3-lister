import * as React from 'react';
import { css } from 'react-emotion';

const mobilePager = css`
  text-align: right;
  padding: 24px;
  @media (min-width: 46em) {
    display: none
  }
`;

const MobilePager = ({ loadNextPage, endIndex }) => {

    const handleLoadMore = () => {
        loadNextPage(0, endIndex + 10)
    }

    return (
      <div onClick={handleLoadMore} className={mobilePager}>
            Load more
      </div>
    );
};

export default MobilePager;