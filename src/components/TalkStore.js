import React, { useState } from 'react';

export const TalkContext = React.createContext();

const TalkStore = ({children}) => {
  const [talkList, setTalkList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const updateTalkList = (talkList) => {
    setTalkList(talkList);
  }

  const loadPage = (startIndex, endIndex) => {
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }

  return (
    <TalkContext.Provider value={{
      list: talkList,
      startIndex: startIndex,
      endIndex: endIndex,
      updateList: updateTalkList,
      loadPage: loadPage
    }}>
      {children}
    </TalkContext.Provider>
  );

}

export default TalkStore;
