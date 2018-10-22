import * as React from 'react';import { css } from 'react-emotion';

const desktopPager = css`
  text-align: right;
  padding: 24px;
  @media (max-width: 46em) {
    display: none
  }
`;

const DesktopPager = ({ loadNextPage, startIndex, endIndex, total }) => {

    const handleLoadMore = () => {
        if (startIndex === 0 && endIndex > 10) {
            startIndex = endIndex - 10;
        }
        loadNextPage(startIndex + 10, endIndex + 10)
    }

    return (
      <div onClick={handleLoadMore} className={desktopPager}>
            Load next page
      </div>
    );
};

export default DesktopPager;