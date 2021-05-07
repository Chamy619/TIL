# Express 시작하기

일단 `npm install express`로 express를 설치해야 한다.



## express 가져오기

```javascript
const express = require('express');

const app = express();
```

`require('express')`를 통해 express 모듈을 가져온다. 이후 app에 express 객체를 할당한다.



## 포트 사용

```javascript
const port = process.env.PORT || 5000;
```

이후 환경 변수에 PORT가 미리 설정되어 있으면 해당 포트를 사용하고, 없을 경우 5000번 포트를 사용할 것임을 명시한다.



## 기본 경로 동작

```javascript
app.get('/', (req, res, next) => {
    res.send('hello world');
});
```

'/' 경로로 들어올 경우 body에 hello world를 넣은 응답을 보내도록 설정한다.



## Listen

```javascript
app.listen(port, () => {
    console.log(`listening port on ${port}`);
});
```

기존에 설정한 포트로 요청을 받도록 설정한다.