import React, { Component } from 'react';
import './ValidationSample.css';

interface Props {}

interface State {
  password: string;
  clicked: boolean;
  validated: boolean;
}

class ValidationSample extends Component<Props, State> {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  input: HTMLInputElement | null = null;

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      password: event.target.value,
      clicked: false,
    });
  };

  handleClick = () => {
    const validated = this.state.password === '1111' ? true : false;
    this.setState({
      ...this.state,
      clicked: true,
      validated,
    });
    this.input?.focus();
  };

  render() {
    return (
      <div>
        <input
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
          ref={(ref: HTMLInputElement) => {
            this.input = ref;
          }}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
