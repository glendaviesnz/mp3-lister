import * as React from 'react';

export const TalkContext = React.createContext();

class TalkStore extends React.Component {
    state = {
      talkList: []
    };

    updateTalkList = (talkList) => {
        this.setState({talkList})
    }

    render() {
      return (
        <TalkContext.Provider value={{
            talkList: this.state.talkList,
            updateTalkList: this.updateTalkList
            }}>
          {this.props.children}
        </TalkContext.Provider>
      );
    }
  }

  export default TalkStore;
  