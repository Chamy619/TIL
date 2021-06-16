# DOM 특정 요소에 접근

DOM에서 특정 요소에 접근할 때는 주로 `id` 를 사용합니다. CRA로 만든 우리의 리액트 프로젝트에도 index.html 파일을 살펴보면 아래의 구조로 되어 있는 것을 볼 수 있습니다. 

```html
<!-- ... -->
<div id="root"></div>
<!-- ... -->
```

그리고 위의 id가 root인 div 내부에 우리가 만든 컴포넌트를 react-dom을 사용해 넣습니다.

```react
import ReactDOM from 'react-dom';
import App from './App';

// ...

ReactDOM.render(<App />, document.getElementById('root'));
```

DOM에서 id가 root인 엘리먼트를 가져오기 위해 `document.getElementById` 를 사용했습니다.



# ref

리액트에서는 물론 id를 사용한 접근을 사용할 수 있지만, ref를 사용해 접근하는 것을 권장합니다. id를 사용할 경우, 해당 id 이름이 유일해야 원하는 곳에 접근할 수 있는데, 유일한 이름을 짓는 것이 쉬운 일은 아닙니다. ref는 컴포넌트 내부에서만 작동하기 때문에 유일한 이름을 짓는 고민을 하지 않아도 됩니다.



# ref를 언제 사용해야 하나?

ref는 꼭 DOM을 직접적으로 건드려야 할 때 사용해야 합니다. state나 props로 해결할 수 없는 문제가 있을 때 ref를 사용하면 됩니다.

ref를 사용해야 하는 상황은 아래와 같습니다.

* 특정 input에 포커스 주기
* 스크롤 박스 조작하기
* Canvas 요소에 그림 그리기



# ref 사용법

함수형 컴포넌트에서는 useRef 훅을 사용할 수 있지만, 이번 장에서는 클래스형 컴포넌트에서 ref 사용법을 다룹니다. 클래스형 컴포넌트에서 ref를 사용하는 방법은 크게 두 가지 방법이 있습니다.

1. 콜백 함수를 사용해 설정

   ```react
   /...
   <input ref={ref => {this.input = ref}} />
   ```

   위의 방법으로 사용하면, 컴포넌트에서 `this.input` 으로 input 요소에 접근할 수 있습니다. ref의 이름은 this.input이 아닌 this.reference 와 같이 원하는 이름을 지을 수 있습니다.

2. craetRef 사용해 설정

   ```react
   import React, { Component } from 'react';
   
   
   class RefSample extends Component {
       input = React.createRef();
   
   	handleFocus = () => {
           this.input.current.focus();
       }
       
       render() {
           return (
           	<div>
                   <input ref={this.input} />
               </div>
           )
       }
   }
   ```

   createRef를 사용해 ref를 사용할 경우, `this.input.current` 처럼 current를 주어야 해당 요소에 접근할 수 있습니다.



# 컴포넌트에 ref를 사용할 수 있을까?

이전에 ref는 컴포넌트 내에서 동작한다는 말을 기억하시나요? ref는 DOM 요소 뿐 아니라 컴포넌트에도 사용할 수 있습니다.

```jsx
<MyComponent ref={ref => {this.myComponent=ref}}/>
```

DOM 요소에 사용하는 방법과 같습니다. 컴포넌트에서 사용한 ref는  `this.myComponent.handleCliock` 처럼컴포넌트 내부의 메서드 및 멤버 변수에도 접근할 수 있습니다. 

