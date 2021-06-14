import React, { Component } from 'react';

interface Props {
  name: string;
  favoriteNumber: number;
}

class MyComponent extends Component<Props> {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요 제 이름은 {name} 입니다. <br />
        children 값은 {children} 입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

export default MyComponent;
