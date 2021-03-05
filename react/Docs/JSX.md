# JSX

```
const element = <h1>Hello World!</h1>;
```

위의 문법이 무엇으로 보일까? JS?? HTML?? 아니면 그냥 문자열??

위의 문법은 JavaScript를 확장해서 만든 JSX라고 한다. JS를 확장했기 때문에 JS의 모든 기능을 사용할 수 있고, 위의 문장처럼 HTML 태그를 사용해서 표현할 수도 있다.

위의 문장을 index.js의 React.render 내부에 추가하면 아래의 사진처럼 결과가 나올 것이다.
<img src="./images/helloworld2.JPG">

JSX는 주로 React의 element를 생성하는데 이는 다음 챕터에서 엘리먼트에 대해 설명할 때 다루도록 하겠다.

## JSX란?

**React의 목적 중 하나는 결합성을 줄이고 응집성을 높이는 데에 있다.** 이는 좋은 소프트웨어를 만들기 위해 중요한 부분 중 하나다. 소프트웨어 공학 개론과 같은 책을 보거나, 객체지향을 보더라도 이 부분에 대해 자세히 설명한 부분이 있을 것이다. 내가 아는 정도에서 설명하자면, 같은 목표를 가지고 동작하는 것을 한데 묶는 행동이 응집성을 높이는 것이다. 그리고 관련이 없어 보이는 부분들을 떨어뜨려 놓는 것이 결합을 줄이는 방법이다.

그럼 어떻게 React에서는 결합을 줄이고 응집을 높였을까?
바로 **컴포넌트**다.

컴포넌트 내에 하나의 목표를 가지고 동작하는 부분을 밀집시킨다. 이를 통해 응집도가 향상되는 효과를 얻을 수 있다.

다른 동작을 하거나, 관련이 없어 보이는 부분은 저절로 다른 컴포넌트에 속해질 것이고, 이로 인해 결합이 줄어들 것이다.

응집을 높이고, 결합을 줄이면 얻을 수 있는 가장 큰 효과는 재사용성이다. 만약 우리가 덧셈만을 완벽하게 수행하는 모듈을 만들었다면, 이 모듈을 계산기에도 사용할 수 있고, 카운터, 만보기와 같은 여러 곳에 사용할 수 있다. 동일 프로그램이 아닌 다른 프로그램을 만들고, 프로젝트를 진행할 때도 사용할 수 있다.

React에서 JSX의 사용은 필수가 아니다. 하지만 JS로 HTML을 직접 조작할 때, 태그를 생성해야 하는 경우를 상당히 많이 접할 수 있을 것이고 나 또한 그랬다. 그럴 때 HTML 태그를 사용해 표현할 수 있는 JSX를 사용하면 보기에도 편하고, 오류의 발생률도 크게 줄여줄 것이다.

### JSX에 표현식 포함하기

```
const name = 'Chamy';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

name 변수에 Chamy 라는 이름을 넣었다. 이후 element에 \<h1> 태그 안에 Hello, {name}을 넣었다.

JSX에서는 중괄호('{}')를 사용해 JS 표현식을 넣을 수 있다. name과 같은 변수가 아니더라도 '2 + 2'와 같은 모든 JS 식을 넣을 수 있다.

위의 코드를 실행하면 아래의 사진과 같은 결과를 볼 수 있다.
<img src="./images/hello.JPG">

변수가 아닌 함수의 결과를 넣은 JSX 표현을 사용하려면 다음과 같이 사용하면 된다.

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Marco',
  lastName: 'Polo'
};

const element = <h1>Hello {formatName(user)}!</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

formatName은 user 객체를 매개변수로 받아 이름을 만들어 반환하는 함수이고, element에서 formatName을 사용해 화면에 보여줄 element를 만들었다. 여기서는 이전처럼 name 변수 대신 formatName(user)를 사용했는데도 아래 사진처럼 결과가 잘 나오는 것을 볼 수 있을 것이다.
<img src="./images/formater.JPG">

### JSX도 표현식입니다

JSX도 결국 JS로 변환된다. 그렇기 때문에 우리가 JS에서 사용하는 if문, for문을 사용할 수 있다.

```
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
```

### JSX 속성 정의

HTML에서와 마찬가지로 속성을 따옴표를 사용해서 정의한다.

```
const element = <div tabIndex="0"></div>
```

<br>
중괄호를 사용해서 속성값에 JS 표현식을 넣을 수도 있다.

```
const element = <img src={user.avatarUrl}></img>;
```

주의해야 할 점은 **중괄호를 사용해 JS 표현식을 속성으로 넣을 때는 따옴표를 사용하면 안된다**는 점이다.

추가로 JSX는 camelCase 명명 규칙을 사용하기 때문에 tabindex를 tabIndex로 표기한다.

### JSX로 자식 정의

태그 내부에 표현할 것이 없는 태그라면 />를 사용해 바로 닫아주어야 한다.

```
const element = <img src={user.avatarUrl} />;
```

<br>
JSX 태그도 자식을 포함할 수 있다.

```
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);
```

### JSX는 주입 공격을 방지합니다.

JSX는 가상 React DOM에 삽입되고, React DOM이 DOM에 렌더링 하기 전에 빠져나오므로, XSS(cross-site-scripting)공격을 방지할 수 있다.

### JSX는 객체를 표현합니다.

Babel(React를 JS로 컴파일해줌)은 JSX를 React.createElement() 호출로 컴파일 한다.

아래에 보여줄 두 예시는 동일한 역할을 한다.

```
const element = (
    <h1 className="greeting">
        Hello,world!
    </h1>
);
```

```
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
```

우리가 JSX를 사용해 첫 번째에 보이는 것처럼 element를 생성하지만 컴파일할 때는 아래의 예시처럼 작동할 것이고, 최종적으로

```
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};
```

위의 모습처럼 JS 객체로 컴파일 될 것이다.
