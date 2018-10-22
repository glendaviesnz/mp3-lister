import * as React from 'react'; import { css } from 'react-emotion';

// const desktopPager = css`
//   text-align: right;
//   padding: 24px;

// `;

const pagingBar = css`
  display: flex;
  @media (max-width: 46em) {
    display: none
  }
`;
const jumpTo = css`
  padding: 0 8px;
`;

const previousLink = css`
  margin-left: auto;
`;
const nextLink = css`
  width: 65px;
`;

const DesktopPager = ({ loadPage, startIndex, endIndex, total }) => {

    const handleLoadNext= () => {
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
    const next = endIndex + 10 <= total &&  <div onClick={handleLoadNext}>Next</div>
    const previous = endIndex > 10 &&  <div onClick={handleLoadPrevious}>Previous</div>
    return (
        <div className={pagingBar}>
            <div> Showing {startIndex + 1} to {endIndex} of {total} </div>
            <div className={previousLink}>{previous}</div>
            <div onClick={handleJumpTo(0)} className={jumpTo}>1</div>
            <div onClick={handleJumpTo(1)} className={jumpTo}>2</div>
            <div onClick={handleJumpTo(2)} className={jumpTo}>3</div>
            <div onClick={handleJumpTo(3)} className={jumpTo}>4</div>
            <div onClick={handleJumpTo(4)} className={jumpTo}>5</div>
            <div onClick={handleJumpTo(5)} className={jumpTo}>6</div>
            <div onClick={handleJumpTo(6)} className={jumpTo}>7</div>
            <div onClick={handleJumpTo(7)} className={jumpTo}>8</div>
            <div onClick={handleJumpTo(8)} className={jumpTo}>9</div>
            <div onClick={handleJumpTo(9)} className={jumpTo}>10</div>
            <div className={nextLink}>{next}</div> 
        </div>
    );
};

export default DesktopPager;