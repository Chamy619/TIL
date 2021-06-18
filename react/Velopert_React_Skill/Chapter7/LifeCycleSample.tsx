import { Component } from 'react';

interface Props {
  color: string;
}

interface State {
  number: number;
  color: string | null;
}

class LifeCycleSample extends Component<Props, State> {
  state = {
    number: 0,
    color: null,
  };

  myRef: HTMLHeadingElement | null = null;

  constructor(props: Props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    console.log(prevProps.color);
    if (prevProps.color !== this.props.color) {
      return this.myRef?.style.color;
    }
    return null;
  }

  componentDidUpdate(
    prevProps: Props,
    prevState: State,
    snapshot: string | null
  ) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1
          style={style}
          ref={(ref) => {
            this.myRef = ref;
          }}
        >
          {this.state.number}
        </h1>
        <p>coclor: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
