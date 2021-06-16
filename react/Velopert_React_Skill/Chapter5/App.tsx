import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  scrollBox: ScrollBox | null = null;
  render() {
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button
          onClick={() => {
            this.scrollBox?.ScrollToBottom();
          }}
        >
          아래로
        </button>
      </div>
    );
  }
}

export default App;
