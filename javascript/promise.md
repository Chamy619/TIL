# Promise

Promise는 비동기 처리를 위한 JS object
State는 promise가 만들어져서 operation이 수행중인 경우 pending, 완료 상태는 fulfilled 상태, 문제가 발생한 상태는 rejected 상태
데이터를 만드는 Producer와 데이터를 소비하는 Consumer

### Producer

```
const promise = new Promise((resolve, reject) => {
    // 네트워크 또는 파일을 읽어오는 부분을 주로 처리
    console.log('doing something...');
    setTimeout(() => {
        resolve('chamy');
    }, 2000);
});
```

Promise는 생성되자마자 자동적으로 executor가 바로 실행됨

### Consumer: then, catch, finally

then은 promise의 resolve 부분의 parameter 값이 전달됨
then은 resolve하지 못하면 promise를 리턴
then은 값을 전달할 수도 있고, promise를 전달할 수도 있음

```
// resolve에 전달한 값이 then의 value로 전달
promise.then((value) => {
    console.log(value);
});
```

<br>

catch는 promise의 reject 부분을 다룸

```
const promise = new Promise((resolve, reject) => {
    // 네트워크 또는 파일을 읽어오는 부분을 주로 처리
    console.log('doing something...');
    setTimeout(() => {
        //resolve('chamy');
        reject(new Error('no network'));
    }, 2000);
});

promise.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});
```

<br>

finally는 resolve와 reject 이후 무조건 수행되는 부분

```
promise.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('finally');
});
```

### Promise Chaning

```
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));
```

then을 계속 연결해서 사용할 수 있고, 위에 언급한 것 처럼 then은 num과 같은 값을 전달할 수도 있고, promise를 전달할 수도 있음

### Error Handling

```
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error: ${hen} => egg`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => chicken`), 1000);
    });


getHen()
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
```

getEgg에 실패했지만 .then(getEgg) 뒤의 catch문ㅇ르 통해 bread를 전달했기 때문에 가장 하단에 있는 catch에 가지 않고 성공적으로 cook이 수행됨

<br><hr>

### Callback Hell을 promise로 개선

```
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    ((id === 'chamy') && (password === 'develop')) ||
                    ((id === 'bang') && (password === 'helper'))
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'chamy') {
                    resolve({name: 'chamy', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 2000);
        });
    }
}

const blog = new UserStorage();
blog.loginUser('chamy', 'develop')
    .then(blog.getRoles)
    .then(console.log)
    .catch(console.log);
```

이전 장에서 만들었던 콜백 지옥을 promise를 사용해 위처럼 변경함

일단 클래스를 생성하는 부분부터 설명하면 기존 콜백 함수를 resolve와 reject로 대체했고, promise를 리턴하도록 함

하단에 객체를 생성하고 실행하는 부분도 훨씬 간단해지고, 보기 편해졌음
resolve와 reject를 통해 promise를 건네주면서 로그인과 역할을 알아가는 과정을 수행

<br><hr>

### 코드 정리 팁

```
getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
```

위처럼 then으로 받아오는 매개변수와 뒤의 콜백 함수에서 사용하는 매개변수가 같은 경우 아래와 같이 생략할 수 있음

```
getHen()
.then(getEgg)
.then(cook)
.then(console.log);
```
