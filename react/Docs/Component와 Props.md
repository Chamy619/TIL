# Component and Props

**React에서는 컴포넌트를 사용해 UI를 재사용 가능한 개별적인 조각으로 나눈다.**

컴포넌트는 JS에서 함수와 유사하다. 실제로 컴포넌트를 만들 때 함수형과 클래스형을 사용해 만든다.

컴포넌트는 "props"라고 하는 입력을 받아 화면에 표시할 엘리먼트를 반환한다.

## 함수 컴포넌트와 클래스 컴포넌트

컴포넌트를 정의하는 가장 간단한 방법은 JS 함수를 작성하는 것이다.

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

<br>
Welcome 함수는 props를 받아 엘리먼트를 반환한다. JS의 함수이기 때문에 "함수 컴포넌트"라고 부른다.

<br>
ES6 이후 버전에서는 class를 지원하기 때문에 class 형으로도 컴포넌트를 만들 수 있다.

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

<br>
class로 컴포넌트를 만들 때는 React.Component를 상속해서 만든다. 함수형 컴포넌트와 클래스형 컴포넌트는 React 관점에서 동일하다.

클래스형 컴포넌트에서는 추가적으로 state를 사용할 수 있어서 주로 class 형으로 사용해왔으나, hook이라는 기능을 새로 발표하면서 현재는 함수형을 주로 사용하는 추세인 것 같다.

## 컴포넌트 렌더링

지금까지 우리는 엘리먼트를 DOM 태그로 나타냈다.

```
const element = <h1>Hello, world</h1>;
```

<br>
컴포넌트를 사용하면 조금 더 간단하게 복잡한 엘리먼트를 나타낼 수 있다.

```
const element = <Welcome name = 'Chamy' />;
```

<br>
element는 우리가 위에서 정의했던 Welcome 컴포넌트의 리턴 값을 가지게 된다.

컴포넌트를 최정적으로 루트 DOM으로 전달하려면 다음 코드처럼 사용하면 된다.

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name="Chamy" />

ReactDOM.render(element, document.getElementById('root'));
```

<br>
위의 코드에서 일어나는 일들은 다음과 같다.

1. ReactDom.render()이 호출된다.
2. React는 {name: 'Chamy'}의 props를 Welcome 컴포넌트로 전달한다.
3. Welcome 컴포넌트는 \<h1>Hello, Chamy</h1> 엘리먼트를 반환한다.
4. React DOM은 DOM을 업데이트한다.

## 컴포넌트 합성

컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있다.

다르게 말하자면 컴포넌트를 정의할 때 다른 컴포넌트를 내부에 넣을 수 있다.

전체 화면을 보여주는 컴포넌트 내부에 버튼 컴포넌트, 스크롤 컴포넌트, 본문 컴포넌트를 넣을 수 있는 것과 같다.

아래 코드를 보면 좀 더 쉽게 이해할 수 있을 것이다.

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Chamy" />
      <Welcome name="Bang" />
      <Welcome name="Ting" />
    </div>
  );
}

ReactDOM.render(App(), document.getElementById('root'));
```

<br>
App 컴포넌트 내에 Welcome 컴포넌트 3개를 넣었다. 이 코드를 실행하면 3명을 환영하는 메시지를 볼 수 있다.

<img src="./images/component1.JPG" />

## 컴포넌트 추출

복잡한 컴포넌트를 여러 개의 컴포넌트로 쪼개는 작업이다. 나같은 초심자에게는 쪼개는 것이 조금 두렵게 느껴졌는데 이번 기회에 이를 극복해서 좋은 추상화를 가진 코드를 작성하는 개발자가 되고 싶다.

일단 아래 코드는 쪼개기 전의 코드다.

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

<br>
보자마자 한숨부터 나온다. 어떻게 이 코드를 쪼갤 수 있을까?

Comment 컴포넌트는 author, text, date를 props로 받아 SNS의 코멘트를 나타낸다.

이 컴포넌트는 구성요소들이 중첩 구조로 이루어져 있어서 변경하기도 어렵고, 재사용하기도 힘들다. 그래서 우리는 이 컴포넌트에서 몇가지 컴포넌트로 추출해야 한다.

첫째로 Avatar를 먼저 추출해야겠다.

```
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

<br>
Avatar 컴포넌트는 위의 img 태그를 가진 부분을 컴포넌트로 나타낸 것이다.

Avatar 컴포넌트를 생성하여 얻을 수 있는 장점은 우리는 Comment 컴포넌트 내부가 아니라 다른 곳에서도 사진을 넣고 싶으면 Avatar 컴포넌트를 사용할 수 있다.

author라는 이름 대신 좀더 포괄적인 user로 변경했다.

Avatar 컴포넌트를 처음의 코드에 적용시키면 아래와 같이 변경된다.

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user=props.author />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

<br>
이전 코드보다 3% 정도 단순해졌지만 그래도 큰 발전이다.

여기서 나는 UserInfo를 추출하고 싶어졌다. Avatar 컴포넌트와 같이 props의 author를 사용하기 때문이다.

```
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

<br>
UserInfo를 컴포넌트로 분리하면 위의 코드 처럼 분리 할 수 있다. 나도 하면서 실수를 했는데, 주의해야 할 점은 컴포넌트는 반드시 하나의 엘리먼트를 반환해야 한다는 것이다.

즉, 아래의 코드처럼 작성하면 Avatar 컴포넌트와 UserInfo-name 엘리먼트를 반환하므로 에러가 난다.

```
function UserInfo(props) {
  return (
    <Avatar user={props.user} />
    <div className="UserInfo-name">
        {props.user.name}
    </div>
  );
}
```

<br>
그럼 UserInfo 컴포넌트를 처음 코드에 반영해보자

```
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

<br>
이전보다 훨씬 보기 쉬워졌다.

컴포넌트를 추출하는 것이 귀찮고 지루하게 느껴질 수도 있다. 나 또한 개인 프로젝트를 진행하면 이런 추출하는 부분이 필요한가에 대한 의문이 여러번 든 적이 있다.

하지만 요즘 코드 컴플리트라는 책을 읽으면서 달랑 한 줄로 이루어진 루틴도 새로 작성하여 이름을 주는 것이 여러 장점이 있다는 것을 알게 되었다.

우리가 위에서 나누지 않은 comment-text와 comment-date 부분 조차도 컴포넌트로 만들어 사용하게 되면 코드를 읽기도 쉽고, 나중에 재사용하거나 코드를 수정해야 할 때 훨씬 더 편리할 것이다.

## props는 읽기 전용입니다.

우리가 컴포넌트에 사용한 props는 읽기 전용이다. 우리는 props를 절대로 변경해서는 안된다.

> React는 매우 유연하지만 한 가지 엄격한 규칙이 있습니다.
>
> **모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.**

여기서 의문이 들 수도 있다. UI는 동적이고 시간에 따라 변할텐데 그럼 변할때마다 컴포넌트를 새로운 props로 호출해야하나?? 이에 대한 대답은 다음 장의 state에서 하도록 하겠다.
