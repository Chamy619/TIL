# Callback

JS는 기본적으로 hoisintg 이후 동기적(Synchronous) -> 작성한 순서대로 동작

```
console.log('1');                           // Synchronous
setTimeout(() => console.log(2), 1000);     // Asynchronous, Callback
console.log('3');                           // Synchronous

// 1
// 3
// 2
```

### Synchronous Callback

```
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));
```

printImmediately가 hoisitng 돼서 가장 위에서 선언되고, 아래에서 이를 호출

### Asynchronous Callback

```
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
```

setTimeout을 브라우저에 요청

### Callback 지옥

```
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'chamy') && (password === 'develop') ||
                (id === 'bang') && (password === 'helper')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'chamy') {
                onSuccess({name: 'chamy', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const blog = new UserStorage();
blog.loginUser('chamy', 'develop', (id) => {
    blog.getRoles(id, (role) => {
        console.log(role);
    }, (e) => console.log(e));
}, (e) => console.log(e));
```

읽기가 힘들고, 비즈니스 로직을 이해하기도 힘듬
에러가 발생하는 경우에도 어디서 에러가 발생했는지 찾기 힘듬
다음 장에서 이를 해결할 수 있는 방법 설명
