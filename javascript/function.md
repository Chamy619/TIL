# Function

### Function Declare

function name(param1, param2, ...) { body return }
**하나의 함수는 한 가지 일만 하도록 작성해야 함 - 응집성과 관련있음**
JS에서 function은 object로 간주

### Parameters

primitive parameter의 경우 값이 전달됨
object parameter의 경우 reference가 전달됨

### Default Parameters (ES6 이후)

parameter을 정의하지 않을 경우 undefined로 나옴

```
function showMessage(message, from) {
    console.log (`${message} by ${from}`);
}
showMessage('hi');  // hi by undefined
```

다음과 같이 from parameter에 'Unknown' default 값을 줄 경우 값이 들어오지 않으면 default 값으로 처리

```
function showMessage(message, from = 'Unknown') {
    console.log (`${message} by ${from}`);
}
showMessage('hi');  // hi by Unknown
```

### Rest Parameters (ES6 이후)

```
function rest(...param) {
    for (let i = 0; i < param.length; i++) {
        console.log(param[i]);
    }
}
rest('a', 'b', 'c');
// a
// b
// c
```

parameter 앞에 ...을 추가하면 배열 형태로 받는 것을 뜻함

### Local Scope

전역 변수, 지역 변수 개념으로 블럭 내에 선언된 변수는 블럭 밖에서는 접근할 수 없지만, 블럭 밖에서 선언된 변수는 블럭 내에서 접근할 수 있음

### Return a Value

function은 항상 return을 하지만 return이 없는 경우 'return undefined'와 같음

### Function Expression

```
// function declaration
function sum(val1, val2) {
    return val1 + val2;
}

// function expression
const sum = function(val1, val2) {
    return val1 + val2;
}
```

위의 두 선언문은 같다고 볼 수 있음
**function은 variable처럼 할당할 수 있음**

**function declaration은 var과 같이 hoisting 되고, function expression은 hoisting 되지 않음**

### Function Callback

```
function quiz(answer, printYes, printNo) {
    if (answer === 'hello') {
        printYes();
    }
    else {
        printNo();
    }
}

const printYes = function() {
    console.log('Yes!!');
}

const printNo = function() {
    console.log('No...');
}

quiz('hello', printYes, printNo);   // Yes!!
quiz('hi', printYes, printNo);      // No...

```

function의 parameter로 전달되어 function 내부에서 실행되는 function을 callback function이라고 한다.

### Arrow Function

```
// function expression
const print = function() {
    console.log('hi');
}

// arrow function
const print = () => console.log('hi);

const add = (a, b) => a + b;
```

arrow function은 =>(arrow)를 사용해 function을 표현하는 방식으로 간단하게 표현하는데 도움을 줌
=> 뒤에는 리턴값이 주로 들어감
만약 줄이 길어져 블럭을 사용하면 return은 선언해줘야 함

### IIFE(Imediately Invoked Function Expression)

```
(function printHi() {
    console.log('hi');
})(); // hi
```

function을 선언과 동시에 실행하고 싶을 때 사용
