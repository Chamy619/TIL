# 불변성 유지

기존에 객체 또는 배열의 불변성을 유지하기 위해서 우리는 아래와 같은 코드를 작성했습니다.

```javascript
const nextArray = [...originArray];

const nextObject = {...originObject, id: 10};
```

간단한 배열 또는 객체일 경우 이렇게 작성하는 것이 어렵지 않지만, 깊이가 3 단계 이상으로 깊어지면 불변성을 유지하기 위해서 10 줄 이상의 코드를 작성해야 합니다.



# Immer.js

`Immer.js` 패키지를 사용하게 되면 손쉽게 불변성을 유지할 수 있습니다. 일단 `npm install immer --save` 로 패키지를 설치한 후 사용할 수 있습니다. 사용법은 간단합니다.

```javascript
import produce from 'immer';

const nextState = produce(originState, draft => {
    draft.name = '변경된 이름';
});
```

기존 상태를 넣고, draft 라는 이름의 기존 상태 복사본을 변경하면, immer 에서 새로운 객체 또는 배열을 반환해 줍니다. 기존에 우리가 배열의 불변성을 유지하기 위해 사용했던 concat 또는 filter 대신 push와 splice를 사용할 수 있습니다.