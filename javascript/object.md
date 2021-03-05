# Object

object는 key와 value의 집합체

### Literals and Properties

Object 만드는 방법

```
// object literal
const chamy = {
    name: 'Chamy',  // key: name, value: Chamy
    age: 27         // key: age, value: 27
}

// object constructor
const chamy = new Person('Chamy', 27);
```

### Computed Properties

```
console.log(chamy.name);        // Chamy
console.log(chamy['name']);     // Chamy <- Computed property
```

[] 안에 키를 string 형태로 입력하면 값을 얻을 수 있음 - Computed propertiy
**Computed property는 런타임에 정확한 key 값을 알 수 없을 때 사용**

### Property Value Shorthand

key와 value의 이름이 동일하다면 key와 value 중 하나만 입력해도 됨

```
const person1 = {name: 'bob', age: 20};
const person2 = {name: 'amy', age: 19};
const person3 = {name: 'tedy', age: 21};
const person4 = makePerson('marco', 23);

console.log(person4);

// Property value shorthand를 사용하지 않은 예
function makePerson(name, age) {
    return {
        name: name,
        age: age
    }
}

// Property value shorthand를 사용한 예
function makePerson(name, age) {
    return {
        name,
        age
    };
}
```

### Constructor Function

```
// constructor function으로 객체를 생성하는 함수
// this는 빈 객체를 가리키고, 생략되어 있음
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

const polo = new Person('polo', 27);
console.log(polo.name);     // polo
```

### In Operator: Property Existence Check (Key in Object)

특정 key가 object내에 있는지 확인하기 위해 사용

```
console.log('name' in Person);      // true
console.log('address' in Person);   // false
```

### For .. In vs For .. Of

for (key in obj) 라고 쓰면 obj에 있는 모든 key들을 for 안에 작성한 key로 접근할 수 있음
~~**use strict를 첫 줄에 선언했으면 에러가 남**~~
**use strict를 사용할 경우 key 앞에 let을 붙여줘야 함**

```
// for in
for (key in Person) {
    console.log(key);
}
// name
// age
```

for of의 경우 배열에서 주로 쓰고, 모든 값에 접근하기 위해 사용
~~**이 또한 use strict를 선언할 경우 사용할 수 없음**~~
**use strict를 사용할 경우 val 앞에 let을 붙여줘야 함**

```
// for of
const array = [1, 2, 3, 4, 5];
for (val of array) {
    console.log(val);
}
// 1
// 2
// 3
// 4
// 5
```

### Cloning

```
const user1 = new Person('john', 31);
const user2 = user1;

user1.age = 32;
console.log(user2.age); // 32
```

user2은 user1의 reference값을 가지고 있기 때문에 user1을 수정하면 user2도 수정됨
user1과 user2가 가리키는 객체가 같은 객체이므로 하나를 수정하면 둘 다 영향을 받음

값만 복사하기 위해선 object assign을 사용하면 됨
Object.assign(\<Target>, \<Source>)

```
// old way
const copy1 = {};
for (key in user1) {
    copy1[key] = user1[key];
}
console.log(copy1);  // user1의 값이 copy1에 복사됨

// object assign
const copy2 = {};
Object.assign(copy2, user1);
// const copy2 = Object.assign({}, user1);
console.log(copy2)  // user1의 값이 copy2에 복사됨
```
