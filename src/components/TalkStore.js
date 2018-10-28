import * as React from 'react';

export const TalkContext = React.createContext();

class TalkStore extends React.Component {
    state = {
      talkList: [],
      startIndex: 0,
      endIndex: 10
    };

    updateTalkList = (talkList) => {
        this.setState({talkList})
    }

    loadPage = (startIndex, endIndex) => {
        this.setState({
            startIndex: startIndex,
            endIndex: endIndex
        });
    }

    render() {
      return (
        <TalkContext.Provider value={{
            list: this.state.talkList,
            startIndex: this.state.startIndex,
            endIndex: this.state.endIndex,
            updateList: this.updateTalkList,
            loadPage: this.loadPage
            }}>
          {this.props.children}
        </TalkContext.Provider>
      );
    }
  }

  export default TalkStore;
