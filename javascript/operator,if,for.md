# Operator

### String Concatenation

```
console.log('my' + ' cat')  // my cat
console.log('1' + 2)        // 12

```

### Numeric Operators

```
console.log(1 + 1)  // 2
console.log(1 - 1)  // 0
console.log(1 / 1)  // 1
console.log(1 * 1)  // 1
console.log(5 % 2)  // 1
console.log(2 ** 3) // 8
```

_\*\*연산자는 exponentiation 연산임_

### Increment and Decrement Operators

```
let a = 3;
console.log(a++)    // 3
console.log(a)      // 4
console.log(++a)    // 5
console.log(a--)    // 5
console.log(a)      // 4
console.log(--a)    // 3
```

++ 또는 --가 변수 앞에 있으면 바로 적용되고, 뒤에 있을 경우 이번은 지나가고 다음번에 적용됨
다른 언어에서도 같은 개념을 배운 적이 있어 쉽게 이해가 되는 사람들도 있을 것이고, 이번에 처음 접하는 경우 조금 헷갈릴 수도 있는데 쉽게 말하면 **변수 앞에 ++가 있을 경우 지금 당장 적용되고, 변수 뒤에 있을 경우 다음번에 적용된다**

### Asignment Operators

```
let x = 3;
let y = 7;
x += y;
console.log(x)  // 10
```

### Comparison Operators

```
console.log(10 < 6)     // false
console.log(10 <= 6)    // false
```

### Logical Operators

- OR 연산자 ||
- AND 연산자 &&
- NOT 연산자 !

이 부분도 다른 언어를 접하고 공부할 경우 쉬울 수 있다. 하지만 처음 접하는 경우 어떤 연산이 진행되는지 어려울 수 있기 때문에 최대한 친절하게 설명해보려 한다.

OR 연산자의 경우 하나만 true이면 true를 리턴한다. 만약 console.log(true || false || false)와 같이 여러 개의 OR 연산을 사용하게 됐을 때 처음 값이 true이므로 다음 false의 값은 확인하지도 않고 true를 반환한다.

AND 연산자의 경우 전부 true이면 true를, 하나라도 false일 경우 false를 리턴하는데 이 역시도 여러 개의 AND 연산을 사용했을 때 처음 값이 false이면 뒤의 값들은 확인하지 않고 false를 리턴한다.

NOT 연산자의 경우 현재 값의 반대를 리턴한다. true일 경우 false, false일 경우 true를 리턴한다.

### Equality

- == : loose equality
- === : strict equality

```
let numberFive = 5;
let stringFive = '5';

// loose equality
console.log(numberFive == stringFive)   // true
console.log(numberFive != stringFive)   // false

// strict equality
console.log(numberFive === stringFive)  // false
console.log(numberFive !== stringFive)  // true
```

loose equality의 경우 값만 같으면 true를 리턴하고, strict equality의 경우 타입까지 같아야 true를 리턴한다. **ES6에서는 strict equality를 사용하는 것을 권장한다.**

```
const obj1 = {name: 'chamy', age: 27};
const obj2 = {name: 'chamy', age: 27};
const obj3 = obj1;

console.log('obj1 == obj2 : ', obj1 == obj2);   // false
console.log('obj1 === obj2 : ', obj1 === obj2); // false
console.log('obj1 === obj3 : ', obj1 === obj3); // true
```

**obj의 경우 reference의 값으로 비교하기 때문에 객체 내부의 값으로 비교할 수 없다. 내부의 값으로 비교하기 위해서는 하나하나 따로 해야 한다.**

### Conditional Operators: if

if 문은 처음 배우기에도 매우 쉬운 부분이기 때문에 예제로 설명하겠다.

```
let name = 'chamy';
if (name === 'bang') {
    console.log('hi bang');
} else if (name === 'chamy') {
    console.log('hi chamy');
} else {
    console.log('who are you?');
}
```

위의 코드의 결과로 콘솔에 'hi chamy'가 출력될 것이다. 만약 name이 'bang'이었다면 콘솔에는 'hi bang'이 출력될 것이고, 'chamy'와 'bang' 둘 다 아닐 경우 'who are you?'가 출력될 것이다.

### Ternary Operator: ?

? 연산은 보통 삼항 연산자라고 부른다.

```
let name = 'chamy'

// if 문
if (name === 'chamy') {
    return 'hi'
} else {
    return 'who'
}

// ? 문
name === 'chamy' ? 'hi' : 'who?'
```

위의 if문을 삼항 연산자로 간단하게 표현할 수 있다. ? 왼쪽 부분에는 조건, ? 오른쪽은 결과인데 true일 : 왼쪽, false일 경우 오른쪽이다.

### Switch Statement

```
const browser = 'IE';

switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('welcome');
        break;
    case 'Firefox':
        console.log('welcome');
        break;
    default:
        console.log('??');
        break;
}
```

나는 JS의 switch가 가장 좋았다. c++에서는 switch에 string으로 조건을 체크할 수 없었는데 JS는 가능해서 정말 신세계에 온 것 같은 기분을 느꼈다. switch문도 if문과 크게 다르지 않다. case로 조건을 거르고 default는 else라고 봐도 무방할 것 같다.

### Loops: while

```
let i = 3;
while (i > 0) {
    console.log(i--);
}
```

i가 0 보다 작으면 블록 안을 실행하고, 다시 조건을 검사하는 while 문이다. 위의 코드는 3, 2, 1이 순서대로 출력된다.

### Loops: do while

```
let i = 0;
do {
    console.log(i);
} while (i > 0)
```

while과는 순서가 반대다. 일단 블록 내부를 실행하고 조건을 확인한다. 위의 코드는 i = 0이라서 while의 조건인 i > 0을 위배하지만 일단 do 내부의 코드를 실행하고 조건을 검사하기 때문에 0이 한 번 출력된다.

### Loops: for

내가 가장 자주 쓰는 반복문이다.
기본 형태는
for (초기값; 조건; 증감)
이지만 증감에는 증감에 관계되지 않은 어떤 것들도 들어갈 수 있다.
0부터 10까지 출력하는 코드는 아래와 같다.

```
let i;
for (i = 0; i < 11; i++) {
    console.log(i);
}
```
