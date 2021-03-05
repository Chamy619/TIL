# 합성 (Composition) vs 상속 (Inheritance)

> React는 강력한 합성 모델을 가지고 있으며, 상속 대신 합성을 사용해 컴포넌트 간에 코드를 재사용하는 것이 좋습니다.

이번 섹션에서 React를 처음 접한 개발자들이 종종 상속으로 인해 부딪히는 몇 가지 문제점과 합성을 사용해 이를 해결하는 방법을 살펴볼 것이다.

<hr>

## 컴포넌트에서 다른 컴포넌트를 담기

Sidebar나 Dialog를 생각해보자. 우리는 이 안에 어떤 자식 엘리먼트가 들어와야할지 모든 것을 예상할 수 없다.

이러한 컴포넌트에는 children prop을 사용해 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋다.

화면에 출력할 내용을 prop으로 받는 것이다.

아래 코드를 보자.

```javascript
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}
```

<br>

일단 선언은 이렇게 하고, children을 어떻게 전달하는지 아래 코드로 보자.

```javascript
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

ReactDOM.render(<WelcomeDialog />, document.getElementById("root"));
```

<br>

WelcomeDialog 컴포넌트에서 FancyBorder 컴포넌트를 사용할 때, children prop은 태그 사이에 넣어서 전달한다. 4-6번 줄의 내용이 children prop으로 전달돼 아래와 같이 화면에 출력되는 것을 볼 수 있을 것이다.

<br>

<img src="./images/childrenProps.JPG" alt="children prop" />

<br>

여기서 prop으로 컴포넌트를 전달할 수도 있구나! 라는 것을 눈치 채면 천재다 ㅎㅎ.

아래 코드와 같이 childeren으로 보내지 않고 특정 이름으로 prop을 전달할 수도 있다.

```javascript
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function App(props) {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
```

<br>

쉽게 이해할 것이라 믿는데 주의할 점은 prop으로 컴포넌트를 넘길 때는 \'{}'를 사용해 넘긴다는 것이다.

컴포넌트도 JSX 문법으로 작성되기 때문에 중괄호를 사용한다.

**React에서 prop으로 전달할 수 있는 것에는 제한이 없다.**

<hr>

## 특수화

이번엔 "특수한 경우"의 컴포넌트에 대해 생각해보자. 예를 들어, 이전에 만들었던 WelcomeDialog는 Dialog의 특수한 경우라고 할 수 있다.

React에서는 더 "구체적인" 컴포넌트가 "일반적인(추상적인)" 컴포넌트를 렌더링하고, props를 통해 내용을 구성한다.

<hr>

## 그렇다면 상속은?

> Facebook에서는 수천 개의 React 컴포넌트를 사용하지만, 컴포넌트를 상속 계층 구조로 작성을 권장할만한 사례를 아직 찾기 못했습니다.

"Code Complete 2"를 지금 읽고 있는 중에 있는데 이 책에서도 상속에 대해 이렇게 말한 기억이 있다. 상속은 편리한 기능을 제공하지만, 무분별한 사용은 코드를 알아보기 힘들게 만들고, 데이터 흐름을 파악하기 힘들 수 있다.

상속을 꼭 사용해야 하는 특수한 상황이 아니라면, React에서는 상속보다 합성을 사용해보자!
