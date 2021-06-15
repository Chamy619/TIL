import React, { Component, useState } from 'react';

interface Props {}

interface State {
  username: string;
  message: string;
  [key: string]: string;
}

class EventPractice extends Component<Props, State> {
  state = {
    username: '',
    message: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({ username: '', message: '' });
  };

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

function FunctionalEventPractice() {
  const [form, setForm] = useState<State>({
    username: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(nextForm);
  };

  const handleClick = () => {
    alert(form.message);
    setForm({
      username: '',
      message: '',
    });
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="사용자명"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="아무거나 입력하세요."
        name="message"
        value={form.message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
}

export default FunctionalEventPractice;
