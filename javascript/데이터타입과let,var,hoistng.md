# let vs var

### var

선언 하기도 전에 값을 할당하는 것이 가능

```
console.log(test);
test = 6;
console.log(test);
var test;
```

첫 console.log에서는 undefined, 두 번째 console.log에서 6을 출력

> var hoisting : 선언한 위치에 상관 없이 가장 위에서 선언한 것으로 함

### let

선언을 해야 값을 할당할 수 있음

```
test = 6;
console.log(test);
let test;
```

test를 선언하지 않고 6을 넣었기 때문에 에러 발생
**ES6에서 let이 표준이고 var는 사용하지 않는 것을 권장**

### const

한번 값을 할당하면 이후에 변경 불가
<br>
**const의 장점**

- 보안적인 장점
- 스레드로부터 안전성 확보
- 인간의 실수를 방지

<hr>

# 데이터타입

### primitive

더 작은 단위로 쪼갤 수 없는 타입

- number
- string
- boolean
- null
- undefined
- symbol

### object

여러개를 묶어서 한 번에 관리해주는 container 역할

### function

함수

<hr>
# Dynamic typing
> 프로그램이 동작할 때 순간순간 타입이 변경될 수 있음
> 런타임에 타입이 결정됨

<hr>
### 추가사항

Internet Explorer처럼 ES6를 지원하지 않는 경우 BABEL을 사용해 ES5 또는 ES4로 내려서 진행

boolean에서 false : 0, null, undefined, NaN, ''

### Symbol

Symbol은 고유한 식별자를 만들 때 사용

```
const s1 = Symbol('id');
const s2 = Symbol('id');
console.log(s1 === s2); // false
```

만약 같은 string은 같은 식별자로 구별하고 싶은 경우 Symbol.for을 사용하면 됨

```
const s1 = Symbol.for('id');
const s2 = Symbol.for('id');
console.log(s1 === s2); // true
```
