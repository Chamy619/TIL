# Async & Await

async와 await를 사용하면 synchronous식으로 promise를 사용하게 해줌
기존에 존재하는 promise를 감싸 사용하기 쉽게 해주는 syntactic sugar
Promise가 항상 나쁘다는 것은 아님

### Async

아래 두 fetchUser function은 똑같이 promise를 리턴함

```
// promise
function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve('chamy');
    });
}

// async
async function fetchUser() {
    return 'chamy';
}
```

async를 사용하면 코드 블럭이 promise로 변경됨
async를 사용하면 promise를 좀 더 간편하게 설정할 수 있음

### Await

await는 async function 내에서만 사용할 수 있음

```
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

// await 사용
async function getBanana() {
    await delay(1000);
    return 'banana';
}

// await 사용하지 않을 경우
function getBanana() {
    return delay(1000)
        .then(() => 'banana');
}

// apple + banana
function pickFruits() {
    return getApple().then((apple) => {
        return getBanana().then((banana) => console.log(`${apple} + ${banana}`));
    });
}
```

pickFruits를 보면 callback 지옥과 비슷한 형태를 가짐

<br><br>

```
// await 사용
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`
}
```

위의 문제를 await를 사용하면 이해하기 쉽게 변경할 수 있음

<br><br>

**await 병렬처리**

```
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}
pickFruits().then(console.log);
```

getApple과 getBanana의 promise를 await으로 받지 않고 다른 변수에 promise를 할당한 후 할당한 변수를 await를 하면 apple과 banana를 동시에 받아오기 때문에 이전의 코드가 2초가 걸렸는데 이번 코드는 1초만 걸림
**getApple과 getBanana가 동시에 작동**

### Useful Promise APIs

Promise.all()을 사용하면 매개변수로 받은 promise 배열들의 return 값들을 병렬적으로 얻을 수 있음

```
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);
```

<br><br>

Promise.race()를 사용하면 매개변수로 받은 promise 배열들의 return 값 중 가장 먼저 받은 값을 리턴함

```
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
```
