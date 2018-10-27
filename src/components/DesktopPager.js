import * as React from 'react';
import { css } from 'react-emotion';
import { range } from 'lodash';

const pagingBar = css`
  display: flex;
  @media (max-width: 46em) {
    display: none
  }
`;

const jumpTo = css`
  padding: 0 8px;
  cursor: pointer;
  &:hover {
      background-color: grey;
  }
`;

const currentPage = css`
  ${jumpTo}
  font-weight: 600;
  color: blue;
`;

const previousLink = css`
  margin-left: auto;
`;

const nextLink = css`
  width: 65px;
`;

const DesktopPager = ({ loadPage, startIndex, endIndex, total }) => {

    const handleLoadNext = () => {
        if (startIndex === 0 && endIndex > 10) {
            startIndex = endIndex - 10;
        }
        loadPage(startIndex + 10, endIndex + 10)
    }

    const handleLoadPrevious = () => {
        if (startIndex === 0 && endIndex > 10) {
            startIndex = endIndex - 10;
        }
        loadPage(startIndex - 10, endIndex - 10)
    }
    const handleJumpTo = (page) => () => {
        loadPage(page * 10, page * 10 + 10)
    }

    const next = endIndex + 10 <= total && <div onClick={handleLoadNext}>Next</div>
    const previous = endIndex > 10 && <div onClick={handleLoadPrevious}>Previous</div>
    const jumpToLinks = range(0, total/10).map((num) => {
        const style = (endIndex / 10 === num + 1) ? currentPage : jumpTo;
        return <div onClick={handleJumpTo(num)} className={style} key={num}>{num + 1}</div>;
    })

    return (
        <div className={pagingBar}>
            <div> Showing {startIndex + 1} to {endIndex} of {total} </div>
            <div className={previousLink}>{previous}</div>

            {jumpToLinks}
 
            <div className={nextLink}>{next}</div> 
        </div>
    );
};

export default DesktopPager;
