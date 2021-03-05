# Class

Template 역할을 함
붕어빵을 찍어내기 위한 빵틀
class는 ES6 이후 추가된 내용

### Class Declaration

```
class Person {
    // constructor(생성자)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

### Getter and Setter

```
class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

const apple = new User('Steve', 'Jobs', -1);    // 에러 발생
console.log(apple);
```

JS에서는 class 안에 get, set을 설정할 수 있고, 이렇게 되면 constructor에서 this.<field명>을 입력하면 자동으로 set에 선언한 것이 호출된다. 문제는 set age안에도 this.age = value로 선언을 할 경우, 여기서도 또 setter를 호출해 무한하게 setter를 호출하는 에러가 발생하기 때문에 통상적으로 getter와 setter에는 \_로 이름을 설정

### Public and Private Fields

최근에 JS에 추가된 내용으로 constructor를 사용하지 않고 field를 선언할 경우 public으로, #을 붙여 선언하면 private field로 선언하게 되어 클래스 내부에서만 값을 사용할 수 있게 됨

```
class Test {
    pubValue = 1;
    #priValue = 5;
}

const test = new Test;
console.log(test.pubValue)  // 1
console.log(test.priValue)  // undefined
```

### Static

이 부분도 최근에 추가된 부분
Object 당 1개씩이 아니라, Class 당 1개씩 가지고 있게 하고 싶은 경우 사용
object 별로 할당되는 것이 아니라 클래스 자체에 할당되기 때문에 호출할 때 class 이름으로 호출해야 함

```
class staticContainer {
    static sayHello() {
        console.log('Hello');
    }
}

const ting = new staticContainer();
ting.sayHello();                // 에러 발생
staticContainer.sayHello();     // Hello
```

### Inheritance (상속)

```
class Shape {   // 부모
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {};   // extends
class Triangle extends Shape {
    draw() {
        super.draw();   // 부모의 메소드 사용
        console.log('This is Triangle');
    }
    getArea() {     // overrinding
        return this.width * this.height / 2;
    }
};

const rect = new Rectangle(5, 4, 'green');
const tria = new Triangle(5, 4, 'yellow');
rect.draw();                    // drawing green color!
console.log(rect.getArea());    // 20
tria.draw();                    // drawing yellow color!
console.log(tria.getArea());    // 10
```

상속과 다형성을 사용하면 좀 더 편리하게 코드를 작성할 수 있음
현실 세계에 존재하는 객체를 찾는 것이 중요
이후 추상화 개념을 공부해 적용하면 좋은 객체 지향 코드를 작성할 수 있음
super를 사용해 부모 객체에 접근할 수 있음

### Class Checking: InstanceOf

객체의 클래스 형을 확인하기 위해 instanceof를 사용함
모든 객체는 JS의 Object 객체를 상속함

```
console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Triangle);  // false
console.log(rect instanceof Shape);     // true
console.log(rect instanceof Object);    // ture
```
