import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

interface Props {}
interface State {
  color: string;
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component<Props, State> {
  state = { color: '#000000' };

  handleClick = () => {
    this.setState({ color: getRandomColor() });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
