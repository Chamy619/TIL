# Array

### Declaration

배열 선언 방법은 다음과 같이 두 가지 방법이 있음

```
const arr1 = new Array();
const arr2 = [1, 2];
```

### Index Position

```
const fruits = ['apple', 'banana'];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
```

### Looping Over an Array

배열의 내용을 모두 출력하는 방법은 여러가지가 있음

전통적인 for loop

```
// for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

이전에 object에서 봤던 for of

```
// for of
for (let fruit of fruits) {
    console.log(fruit);
}
```

forEach 방법

```
fruits.forEach((fruit) => console.log(key, fruit));
```

forEach에 사용되는 콜백 함수는 value, index, array 3개의 매개변수를 가질 수 있음
value는 값 그 자체를 뜻함, 여기서 apple과 banan
index는 여기서 0과 1
array는 fruits 그 자체

### Addition, Deletion, Copy

대표적인 push와 pop
**push는 배열의 끝에 원소를 추가**
**pop은 배열의 끝에 있는 원소를 삭제**

```
// push
fruits.push('watermellon', 'strawberry');
console.log(fruits);

// pop
fruits.pop();
console.log(fruits);
```

unshift와 shift
unshift는 배열의 앞에 원소를 삽입
shift는 배열의 맨 앞의 원소를 삭제

```
// unshift
fruits.unshift('kiwi');
console.log(fruits);

// shift
fruits.shift();
console.log(fruits);
```

**unshift와 shift는 pop과 push보다 훨씬 느림**
배열의 뒤에 값을 넣을 때는 새로운 공간을 할당하기만 하면 되는데, 배열 앞에 값을 넣을 경우 현재 배열의 값들을 전체 한 칸씩 뒤로 옮긴 후 맨 앞에 값을 삽입해야 하기 때문에 시간이 더 오래걸림

<br>

splice를 사용해 배열 가운데에 삭제 및 추가

```
fruits.splice(1, 0, 'peach');   // 1 인덱스에 peach 추가하고 기존 값들은 뒤로 밀림
console.log(fruits);

fruits.splice(1, 1);    // 1 인덱스에 있는 원소 삭제
console.log(fruits);
```

splice의 매개변수로 1개만 입력하면 해당 인덱스 뒷 부분은 모두 자름
2개를 사용할 경우 첫 번째 매개변수의 인덱스로부터 몇 개를 삭제할지 결정
3개 이상을 사용하면, 삭제 후 첫 번째 매개변수에 적은 인덱스에 원소 삽입

### Searching

```
console.log(fruits.indexOf('apple'));   // 0
console.log(fruits.indexOf('nothing')); // -1
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('nothing')) // false
```

indexOf를 사용하면 원소의 위치를 반환하고, 만약 해당 원소가 배열에 없을 경우 -1 반환
includes의 경우 포함 여부를 boolean 값으로 반환
