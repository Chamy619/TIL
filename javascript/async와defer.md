# async와 defer

### \<head> 안에 \<script> 삽입

> parsing html -> fetching js -> executing js -> parsing html

html을 parsing 하는 도중 \<sciprt>를 만나면 parsing을 멈추고 js 파일을 받아오고, 실행한 후 html을 다시 parsing 함

### \<body> 끝에 \<script> 삽입

> parsing html -> fetcing js -> executing js

javascript 파일을 받기 전에 사용자가 화면을 볼 수 있는 장점이 있음
페이지가 javascript 의존도가 크다면 웹 페이지가 제대로 동작하지 않음

### async

> parsing html + fetching js -> executing js -> parsing js

\<script async src="main.js">로 선언
parsing과 fetching이 동시에 일어나고, fetcing이 완료되면 parsing을 멈추고 executing을 진행한다. 이후 완료하지 못한 parsing 작업을 함
**만약 javascript문에서 dom 객체를 조작하는데 parsing 되지 않은 상태라면 문제가 발생**

### defer

> parsing html + fetcing js > executing js

**가장 좋은 방법**이다.
parsing과 fetcing을 동시에 진행하고, parsing이 끝나면 js 파일을 executing 하기 때문에 async에서 발생하는 문제가 발생하지 않음

추가로 aync를 사용해 여러개의 js 파일을 받아올 때, 실행 순서는 선언한 순서대로 실행되지 않음

## Use Strict

```
'use strict
```

javascript를 작성할 때, 가장 상단부에 'use strict'를 작성해주는 것이 좋음
상식 밖의 행동(선언하지 않은 변수에 값을 추가하는 행위)을 막아주고, js 엔진이 더 빠르게 동작함

## 참고 사이트

https://developer.mozilla.org/ko/

굉장히 추천하는 사이트
