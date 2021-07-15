# Blog 프로젝트 리뷰

24-27 장에 거친 프론트엔드 블로그 프로젝트의 리뷰를 진행하도록 하겠습니다. 최대한 프론트 부분의 모든 코드를 꼼꼼하게 보고 넘어가는 것이 목표이고, 이를 통해 리덕스 사가에 대한 이해와, 전체적인 프로젝트 구조를 이해하게 되는 것이 목표입니다.



현재 프로젝트의 구조는 아래와 같습니다.

```
📦src
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜AuthForm.js
 ┃ ┃ ┗ 📜AuthTemplate.js
 ┃ ┣ 📂base
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜AskModals.js
 ┃ ┃ ┣ 📜Button.js
 ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┣ 📜Responsive.js
 ┃ ┃ ┣ 📜SubInfo.js
 ┃ ┃ ┗ 📜Tags.js
 ┃ ┣ 📂post
 ┃ ┃ ┣ 📜AskRemoveModal.js
 ┃ ┃ ┣ 📜PostActionButtons.js
 ┃ ┃ ┗ 📜PostViewer.js
 ┃ ┣ 📂posts
 ┃ ┃ ┣ 📜Pagination.js
 ┃ ┃ ┗ 📜PostList.js
 ┃ ┗ 📂write
 ┃ ┃ ┣ 📜Editor.js
 ┃ ┃ ┣ 📜TagBox.js
 ┃ ┃ ┗ 📜WriteActionButtons.js
 ┣ 📂containers
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜LoginForm.js
 ┃ ┃ ┗ 📜RegisterForm.js
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜HeaderContainer.js
 ┃ ┣ 📂post
 ┃ ┃ ┗ 📜PostViewerContainer.js
 ┃ ┣ 📂posts
 ┃ ┃ ┣ 📜PaginationContainer.js
 ┃ ┃ ┗ 📜PostListContainer.js
 ┃ ┗ 📂write
 ┃ ┃ ┣ 📜EditorContainer.js
 ┃ ┃ ┣ 📜TagBoxContainer.js
 ┃ ┃ ┗ 📜WriteActionButtonsContainer.js
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜client.js
 ┃ ┃ ┗ 📜posts.js
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜palette.js
 ┃ ┗ 📜createRequestSaga.js
 ┣ 📂modules
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜loading.js
 ┃ ┣ 📜post.js
 ┃ ┣ 📜posts.js
 ┃ ┣ 📜user.js
 ┃ ┗ 📜write.js
 ┣ 📂pages
 ┃ ┣ 📜LoginPage.js
 ┃ ┣ 📜PostListPage.js
 ┃ ┣ 📜PostPage.js
 ┃ ┣ 📜RegisterPage.js
 ┃ ┗ 📜WritePage.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
```



# 회원 인증

첫 번째로 살펴볼 부분은 회원 인증 부분입니다. 회원 인증과 관련된 부분은 `src/lib/api/auth`, `src/components/auth/`, `src/containers/auth`, `src/modules/auth.js`, `src/modules/user.js`, `src/pages/LoginPage.js`, `src/pages/RegisterPage.js` 입니다. 일단 API 호출하는 부분부터 살펴보도록 하겠습니다.



## API 요청

API 요청을 보내는 부분만 처리합니다. 응답에 대한 부분은 별도 처리를 진행합니다.



### lib/api/client.js

`client.js` 파일은 실제로 3 줄로 작성되었을 정도로 간단합니다.  axios 모듈을 호출하고, 이를 client 에 할당하고, client 를 export 하는 작업이 전부입니다.

```react
import axios from 'axios';

const client = axios.create();

export default client;
```

여기서 의문이 드는 부분은, 이렇게 할 거면 api 를 사용하는 파일에서 axios 를 호출해서 사용하면 되는 것 아닌가? 입니다. 지금 `client.js` 파일이 하는 일이 axios 로 만든 객체를 반환하는 것 밖에 하지 않기 때문에 굳이 만들지 않고 사용하는 것이 더 좋은 방법이 될 수도 있습니다.

이 파일을 만든 이유는 전역 설정 때문입니다. 서버 api 주소가 변경되어 baseURL 을 바꾸어야 한다던가, 헤더 설정을 일괄적으로 적용해야 하는 부분이 생겼을 때 만약 api 를 사용하는 모든 파일에서 axios 를 가져와 사용했다면, 전체 파일을 모두 수정해야 하는 상황이 발생합니다. 하지만 위 처럼 client 를 따로 떼어내서 api 를 사용할 때, client 를 가져와 사용했다면, `client.js` 파일만 수정해도 전역적으로 적용됩니다.



### lib/api/auth.js

`auth.js` 파일은 서버에 api 요청을 보내는 부분을 작성했습니다. 코드도 실제 api 요청을 전송하는 것 까지만 작성했습니다.

```react
import client from './client';

export const login = ({ username, password }) => client.post('/api/auth/login', { username, password });

export const register = ({ username, password }) => client.post('/api/auth/register', { username, password });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
```

이전에 만든 client 를 가져와 api 요청을 했고, 로그인, 회원가입, 로그인 체크, 로그아웃에 대한 api 요청을 전송하는 함수들로 구현되어 있습니다.



## 상태 관리

상태 관리를 알아보기에 앞서, 리덕스 사가 함수를 생성하는 유틸 파일을 먼저 살펴보도록 하겠습니다.



### lib/createRequestSaga.js

`createRequestSaga.js` 파일에는 **createRequestActionTypes** 와 **createReuqestSaga** 두 개의 함수가 있습니다. 

#### createRequestActionTypes

createRequestActionTypes 는 리덕스 액션 타입을 생성하는 함수입니다. 반환하는 액션의 종류는 3가지 입니다.

* [이름]
* [이름]_SUCCESS
* [이름]_FAILURE



이 세 가지 액션 타입을 생성 하기 위해 [이름] 을 매개변수로 받아야 합니다.

```react
export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};
```

코드에서 type 에 이름이 들어옵니다. 실제로 `user/LOGIN` 과 같은 형태가 들어와야 합니다.



#### createRequestSaga

리덕스 사가 함수를 생성하는 핵심 부분입니다. 위의 액션 타입을 생성하는 함수처럼 액션 타입 이름을 매개변수로 받고, 추가로 사용할 api 요청을 매개변수로 받습니다. api 호출의 결과를 SUCCESS, FAILURE 두 경우로 나누고, 제너레이트 함수를 반환합니다.



```react
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
```

action 은 디스패치에 사용하는 실제 액션입니다. `createRequestSaga`  를 통해 생성된 함수를 사용하기 위해서는 액션을 파라미터로 넣어주어야 합니다. 만약 payload 부분 없이 디스패치가 가능한 경우, 액션 파라미터를 넣어주지 않아도 무방합니다.

try - catch 구문을 사용해 성공 실패를 나누어 처리합니다. 성공 부분을 먼저 살펴보면, 리덕스 사가의 call 이펙트를 사용해 api 비동기 호출 결과를 받아옵니다. 이후 put 이펙트를 사용해 성공 결과를 디스패치합니다.

try 구문 내에서 에러가 발생할 경우 catch 구문으로 내려옵니다. 여기서 api 호출 실패에 대한 내용을 디스패치합니다.

함수의 시작과 끝에서 나타나는 `startLoading` 과 `finishLoading` 은 바로 아래에서 살펴보도록 하겠습니다.



### modules/loading.js

로딩 리듀서는 블로그 애플리케이션의 모든 api 호출에 대한 로딩 상태를 관리합니다. 따라서 액션 페이로드에 로딩 상태를 바꾸려는 대상을 꼭 넣어주어야 합니다.

```react
import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING, (requestType) => requestType);
export const finishLoading = createAction(FINISH_LOADING, (requestType) => requestType);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
```

loading 리듀서는 다른 어떤 상태가 존재하는지 모르기 때문에 초기 상태가 비어있습니다. 로딩의 상태를 변화시키는 액션은 아래와 같은 형태를 가져야 합니다.

```javascript
{
  type: START_LOADING,
  payload: 'user/LOGIN'
}
```

만약 실제 위의 액션이 디스패치 되면, 상태는 아래와 같이 변경됩니다.

```javascript
{
  user/LOGIN: true
}
```



로딩이 끝났을 경우, 위의 액션에서 type 부분만 FINISH_LOADING 으로 바꾸면 `user/LOGIN` 의 상태가 false 로 변경됩니다.



### modules/auth.js

`auth.js` 에서는 로그인, 회원가입에 대한 상태를 관리합니다. 또한, 로그인과 회원가입 시 폼을 입력해야 하고, 이 폼에 대한 관리도 auth 리덕스에서 관리합니다.

일단 어떤 모듈을 가져오는지 설명하도록 하겠습니다.

```react
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from '@redux-saga/core/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
```

액션을 만들고, 리듀서에서 해당 액션에 대한 처리를 하기 위한 `createAction` 과 `handleActions` 를 가져옵니다. 또한 `immer` 를 사용해 상태의 불변성을 유지합니다.

`takeLatest` 리덕스 사가를 사용하여, 마지막 api 요청에 대한 처리만 진행하도록 처리합니다.

`createRequestSaga` 와 `createRequestActionTypes` 는 위의 유틸 함수에서 선언한 바와 같이 리덕스 사가 함수와 액션 타입을 생성하는 함수입니다.

`lib/api/auth.js` 파일에 export default 로 익스포트 하지 않고, 모두 export cosnt를 사용했습니다. 이를 `authAPI` 라는 이름으로 가져와서 `authAPI.login` 형태로 사용하게 합니다.



#### 로그인

로그인 부분을 먼저 설명하도록 하겠습니다. 로그인 역시 api 호출을 해야하기 때문에, 호출, 성공, 실패 세 가지로 나뉩니다. 세 가지 액션 타입을 `createRequestActionTypes` 를 사용해 생성합니다.

```react
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
```

결과는 다음과 같습니다.

* LOGIN: auth/LOGIN
* LOGIN_SUCCESS: auth/LOGIN_SUCCESS
* LOGIN_FAILURE: auth/LOGIN_FAILURE



액션 타입을 생성했으면, 다음으로 액션 객체를 생성해야 합니다. `createAction` 을 사용해 로그인 액션을 생성합니다.

```react
export const login = createAction(LOGIN, ({ username, password }) => ({ username, password }));
```

login 함수를 실행하면 다음과 같은 객체를 반환합니다.

```javascript
{
  type: 'user/LOGIN',
  payload: {
      username: '유저이름',
      password: '비밀번호'
  }
}
```



이제 로그인 비동기 호출을 처리하는 리덕스 사가 함수를 생성합니다. 이 때, 이전에 만들어 놓은 `createRequestSaga` 함수를 사용하여 생성하도록 하겠습니다.

```react
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
```

createRequestSaga 는 액션 타입과 API 호출 요청을 매개 변수로 받습니다. 이제 loginSaga 는 아래 함수를 의미합니다.

```react
function* loginSaga(action) {
  yield put(startLoading('user/LOGIN'));
  try {
      const response = yield call(authAPI.login, action.payload);
      yield put({
          type: 'user/LOGIN_SUCCESS',
          payload: response.data,
          meta: response
      });
  } catch (e) {
      yield put({
          type: 'user/LOGIN_FAILURE',
          payload: e,
          error: true
      })
  }
}
```

리덕스 사가의 call 이펙트를 사용해서, api 호출 결과를 response 에 담고, 성공할 경우, 성공 타입의 액션을 디스패치하고, 에러 발생시, 실패 타입의 액션을 디스패치합니다.



이제 `takeLatest` 이펙트를 사용해 `LOGIN` 액션이 들어올 때, `loginSaga` 함수가 실행되도록 해주어야 합니다.

```react
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
```

`authSaga` 를 루트 사가에 등록하면, LOGIN 타입 액션이 들어올 때, loginSaga 함수가 실행됩니다.



auth 리듀서의 초기 상태는 아래와 같습니다.

```javascript
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};
```

로그인에서 다룰 부분은 auth와 authError 부분입니다. 당연히 다룰 것 같은 login 부분은 input을 다룰 때 사용하게 됩니다.



로그인의 마지막 부분인 리듀서입니다. 리듀서는 LOGIN_SUCCESS 와 LOGIN_FAILURE 액션을 받았을 때, auth와 authError의 상태를 변화시킵니다.

```react
const auth = handleActions({
    // ...
  [LOGIN_SUCCESS]: (state, {payload: auth}) => ({...state, authError: null, auth}),
  [LOGIN_FAILURE]: (state, {payload: authError}) => ({...state, auth: null, authError})
}, initialState);
```



#### 회원가입

회원가입 역시 로그인과 비슷하게 진행됩니다. 회원가입의 액션 타입 역시 `createRequestActionTypes` 를 사용해 생성합니다.

```react
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');
```



이후 `createAction` 을 사용해 액션을 생성합니다.

```react
export const register = createAction(REGISTER, ({ username, password }) => ({ username, password }));
```

로그인과 똑같이 username 과 password 를 payload 에 넣고, 이후 api 호출을 할 때 사용합니다.



이제 실질적인 비동기 통신을 하는 registerSaga를 `createRequestSaga` 를 사용해 생성하고, authSaga 에 추가합니다.

```react
const registerSaga = createRequestSaga(REGISTER, authAPI.register);

export const function* authSaga() {
  takeLatest(REGISTER, registerSaga);
  takeLatest(LOGIN, loginSaga);
}
```



리듀서에서 REGISTER_SUCCESS 와 REGISTER_FAILURE 액션이 디스패치 되었을 때, 상태를 어떻게 변화시킬지 코드를 작성합니다. 

```react
const auth = handleActions(
  {
    // ...
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({ ...state, authError: null, auth }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({ ...state, authError: error }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({ ...state, authError: null, auth }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({ ...state, authError: error }),
  },
  initialState,
);
```

회원 가입에 성공하면, 로그인을 한 것으로 처리하기 위해 로그인과 같은 상태 변화를 일으킵니다.



#### 폼 상태

auth 리덕스에서 로그인 폼과 회원 가입 폼을 동시에 다룹니다. 로그인은 username 과 password 두 개의 입력을 받고, 회원 가입은 username, password, passwordConfirm 세 개의 입력을 받습니다.

폼 입력을 다루기 위한 액션 타입은 `CHANGE_FIELD` 와 `INITIALIZE_FORM` 두 개입니다.

```react
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
```



이번에도 `createAction` 을 사용해서 액션을 만들겠습니다.

```react
export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({ form, key, value }));
export const initializeForm = createAction(INITIALIZE_FORM, ({form}) => ({form}));
```



위의 `createAction` 으로 생성된 액션 객체는 아래와 같습니다.

```javascript
// type: CHANGE_FIELD
{
  type: CHANGE_FIELD,
  payload: {
      form: 'login',
      key: 'username',
      value: 'chamy'
  }
}

// type: INITIALIZE_FORM
{
  type: INITIALIZE_FORM,
  payload: {
      form: 'login'
  }
}
```

payload 내부의 값들은 매개변수로 받는 값에 따라 변할 수 있습니다. 현재는 form 의 경우 login 과 register 둘 중 하나를 가질 수 있습니다.



이제 리듀서에서 위의 액션이 들어왔을 때, 상태를 변화시키는 부분입니다.

```react
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({ ...state, [form]: initializeForm(form) }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({ ...state, authError: null, auth }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({ ...state, authError: error }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({ ...state, authError: null, auth }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({ ...state, authError: error }),
  },
  initialState,
);
```

CHANGE_FIELD 의 경우, immer 를 사용해서 불변성을 관리했습니다. 3단 구조로 되어 있기 때문에, 비구조화 할당을 사용해도 되지만, immer 를 사용하면 조금 더 쉽게 불변성을 유지할 수 있습니다. CHANGE_FIELD 액션으로 `state.login.username`, `state.login.password`, `state.register.username`, `state.register.password`, `state.register.passwordConfirm` 의 상태를 변화시킬 수 있습니다.

INITIALIZE_FORM 은 `state.login` 또는 `state.register` 의 값을 초기 상태로 변경시킵니다.



#### 전체 코드

`auth.js` 의 전체 코드는 아래와 같습니다.

```react
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from '@redux-saga/core/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({ form, key, value }));
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const register = createAction(REGISTER, ({ username, password }) => ({ username, password }));
export const login = createAction(LOGIN, ({ username, password }) => ({ username, password }));

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({ ...state, [form]: initializeForm(form) }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({ ...state, authError: null, auth }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({ ...state, authError: error }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({ ...state, authError: null, auth }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({ ...state, authError: error }),
  },
  initialState,
);

export default auth;
```



### modules/user.js

회원 인증에서 user 리듀서를 추가로 사용합니다. user 리듀서는 사용자의 로그인 여부와 로그아웃 상태를 처리합니다.

새로고침 했을 경우, 로그인 사용자의 정보를 가져오는 부분 부터 시작하도록 하겠습니다.



#### 새로고침 시 유저 정보

새로고침 했을 경우 리덕스는 초기화됩니다. 따라서 기존 사용자 정보를 가져와서, 현재 상태에 다시 넣는 부분을 설명하도록 하겠습니다.

액션 타입은 아래와 같습니다.

```react
const TEMP_SET_USER = 'user/TEMP_SET_USER';
```



이제 `createAction` 을 사용해 액션을 생성하도록 하겠습니다.

```react
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
```

tempSetUser 액션 생성 함수는 유저 정보를 매개변수로 받아 payload 에 담습니다.



우리가 만드려는 유저 리듀서의 초기 상태는 아래와 같습니다.

```react
const initialState = {
  user: null,
  checkError: null,
};
```

`user` 에는 현재 로그인 사용자 정보가 들어가고, `checkError` 에는 서버에 로그인 확인 요청을 보냈을 때, 에러가 발생한 경우 에러 정보가 들어갑니다.



마지막으로 `TEMP_SET_USER` 타입의 액션이 디스패치 됐을 때 상태를 어떻게 바꿀지를 보여줍니다. 

```react
export default handleActions({
  [TEMP_SET_USER]: (state, ({payload: user}) => ({...state, user}))
}, initialState);
```

payload 로 받은 user 정보를 상태의 user 에 넣습니다.



#### 로그인 체크

로그인 체크는 이전의 로그인, 회원가입과 같이 요청, 성공, 실패 3개로 나눠 처리합니다. 일단 `createRequestActionTypes` 를 사용해서 3 개의 액션 타입을 생성합니다.

```react
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('/user/CHECK');
```



기존에는 하나의 리덕스 사가 함수를 생성했지만, 이번에는 실패했을 때, localStorage 에서 사용자 정보를 지우는 작업을 해야 하기 때문에, 두 경우의 리덕스 사가 함수를 생성합니다.

```react
// 성공
const checkSaga = createRequestSaga(CHECK, authAPI.check);

// 실패
function checkFailureSaga() {
  try {
      localStorage.removeItem('user');
  } catch (e) {
      console.log ('localStorage is not working');
  }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
}
```

`checkFailureSaga` 가 제너레이터 함수가 아닌 것이 오타가 아닙니다. 여기서 비동기 처리를 할 필요가 없기 때문에 일반 함수로 생성하였고, 일반 함수도 `takeLatest` 내에서 정상적으로 동작합니다.



이제 리듀서에서 성공과 실패 액션이 디스패치 됐을 때, 상태를 어떻게 변화시키는지 보도록 하겠습니다.

```react
export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({ ...state, user }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({ ...state, checkError: null, user }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({ ...state, user: null, checkError: error }),
  },
  initialState,
);
```

성공 했을 때는 payload 에 담긴 user 정보를 상태의 user 에 담고, userError 값을 null 로 변경합니다. 그리고 실패했을 때는 checkError 에 값을 넣고, user 에 null 을 넣어 로그인 되지 않았음을 나타냅니다.



#### 로그아웃

로그아웃은 로그인 여부 확인 실패와 비슷한 처리를 합니다. 다른 점이라면 서버에게 logout 했다는 메시지를 전송하는 처리를 추가해주어야 하는 부분입니다.

로그아웃 액션의 경우 타입만 있으면 되기 때문에 설명은 생략하도록 하겠습니다.

```react
const LOGOUT = 'user/LOGOUT';
export const logout = createAction(LOGOUT);
```



이제 서버로 로그아웃 메시지를 전송하고, localStorage 에서 user 정보를 제거하는 함수를 생성하는데, 서버로 메시지를 전송하는 부분이 비동기이므로, 리덕스 사가 제너레이터 함수를 만들어야 합니다.

```react
function* logoutSaga() {
  try {
      yield call(authAPI.logout);
      localStorage.removeItem('user');
  } catch (e) {
      console.log('localStorage is not working');
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}
```

로그아웃 요청을 보냈을 때, 서버에서 내용을 전송하지는 않기 때문에, 로그아웃 버튼을 누르면 서버에서 보내는 메시지에 상관 없이 로그아웃 절차가 진행됩니다.



이제 리듀서에서 로그아웃 액션이 디스패치 되었을 때, user 에 null 을 넣어주는 작업만 하면 로그아웃 및 로그인 체크 상태를 관리할 수 있게 됩니다.

```react
export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({ ...state, user }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({ ...state, checkError: null, user }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({ ...state, user: null, checkError: error }),
    [LOGOUT]: (state) => ({ ...state, user: null }),
  },
  initialState,
);
```



#### 전체 코드

```react
import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('/user/CHECK');

const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({ ...state, user }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({ ...state, checkError: null, user }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({ ...state, user: null, checkError: error }),
    [LOGOUT]: (state) => ({ ...state, user: null }),
  },
  initialState,
);
```



## 컴포넌트

컴포넌트 섹션은 상태를 가지고 있지 않은, 프레젠테이션 컴포넌트에 대해 다룹니다. `AuthTemplate` 컴포넌트와 `AuthForm` 컴포넌트를 살펴보겠습니다.



### AuthTemplate

`AuthTemplete` 컴포넌트의 위치는 `components/auth/AuthTemplate.js` 입니다. 해당 파일 내에서 styled-components 를 사용해 만든 컴포넌트는 2개 입니다.

#### AuthTemplateBlock

```react
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
```

화면 전체를 차지하고, flex 박스로 내부 항목을 가운데 정렬합니다.



#### WhiteBox

```react
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;
```

WhiteBox 컴포넌트 내에 클래스 이름이 `logo-area` 인 박스가 들어가고, 로고를 넣을 예정입니다. WhtieBox 컴포넌트는 그림자 효과가 있고, 배경은 흰 색이고, 테두리는 약간 둥글게 처리했습니다.



#### AuthTemplate

이 파일의 주인공입니다.

```react
function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
}
```

AuthTemplateBox 내에 WhiteBox 를 가운데에 위치시키고, REACTERS 라는 로고는 클릭하면 홈으로 이동하도록 처리했습니다. 그리고 부모로 부터 받은 children 을 WhiteBox 내부에 넣습니다.



### AuthForm

AuthForm 컴포넌트는 로그인과 회원가입 시 사용자의 입력을 받는 부분을 화면에 나타내는 부분입니다. 이번에도 styled-components 로 만든 컴포넌트들을 먼저 살펴보겠습니다.



#### ErrorMessage

```react
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;
```

에러 메시지를 나타낼 컴포넌트입니다. 글자 색은 빨간색으로 처리했습니다.



#### AuthFormBlock

```react
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
```

AuthFormBlock 컴포넌트 내부에는 `h3` 태그가 있다는 것을 암시합니다. 모든 것이 AuthTemplate 내의 WhiteBox 에 들어갈 예정이므로, 별도의 스타일 속성을 주지는 않았습니다.



#### StyledInput

```react
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;
```

`input` 태그에 스타일을 주었습니다. 테두리는 하단에만 주었습니다. 또한 포커스 되었을 때 글자색과 하단 선의 색상이 변경되도록 했고, 여러개의 StyledInput 태그가 연속으로 나오면, 처음 나온 StyledInput 컴포넌트를 제외하고 `margin-top` 을 줬습니다.



#### Footer

```react
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;
```

Footer 컴포넌트는 로그인 페이지의 하단에 위치하게될 컴포넌트입니다. 오른쪽 정렬을 했고, 로그인 페이지일 경우 회원가입으로, 회원가입 페이지일 경우 로그인으로 이동하는 링크가 위치할 예정입니다.



#### ButtonWithMarginTop

```react
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
```

기존에 Button 컴포넌트를 만들었는데, 이 컴포넌트는 따로 설명하도록 하겠습니다. Button 컴포넌트에 `margin-top` 속성을 주었습니다.



#### AuthForm

주인공이 가장 마지막에 등장했습니다.

```react
const textMap = {
  login: '로그인',
  register: '회원가입',
};

function AuthForm({ type, form, onChange, onSubmit, error }) {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username || ''}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password || ''}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm || ''}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop fullWidth cyan type="submit">
          {textMap[type]}
        </ButtonWithMarginTop>
      </form>
      <Footer>{type === 'login' ? <Link to="/register">회원가입</Link> : <Link to="/login">로그인</Link>}</Footer>
    </AuthFormBlock>
  );
}
```

`textMap` 은 type 에 따라 어떤 글을 보여줄지 결정하도록 하는 객체입니다. 부모에게 `type`, `form`, `onChange`, `onSubmit`, `error` props 를 받게 됩니다. 

* type: login 또는 register
* form: 리덕스 전역 상태의 state.auth.login 또는 state.auth.register
* onChnage: `input` 태그의 상태를 처리하는 이벤트 메서드
* onSubmit: 폼을 제출했을 때 상태를 처리하는 이벤트 메서드
* error: 에러 메시지(ErrorMessage 컴포넌트)에 보여줄 내용

`type` 으로 제목에 어떤 문자열을 보여줄지 결정합니다. 그리고 `type` 이 register 일 경우, 비밀번호 확인 입력을 받는 StyledInput 컴포넌트를 추가로 보여줍니다. 만약 `error` 값이 존재하면, ErrorMessage 컴포넌트를 보여주고, 로그인 또는 회원가입 버튼을 보여줍니다. 마지막으로 Footer 컴포넌트는 현재 `type` 이 login 일 경우 회원가입 링크를, register 일 경우 로그인 링크를 보여줍니다.



## 컨테이너

컨테이너는 위에 만든 프레젠테이션 컴포넌트에 상태를 주입합니다. 먼저 LoginForm 컨테이너 컴포넌트 먼저 살펴보도록 하겠습니다.



### LoginForm

```react
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
```

일단 useEffect 를 사용해서 사용자가 LoginForm 컴포넌트가 렌더링 되었을 때, 사용자가 로그인에 성공했는지 실패했는지 처리할 것입니다. useState는 에러 메시지를 보여주는 부분을 처리할 것입니다.

useSelector 와 useDispatch 훅을 사용해서 전역 상태를 가져오고, 디스패치할 것입니다.

withRouter 는 로그인에 성공했을 때, history.push 를 사용해 홈 페이지로 이동시키기 위해 사용할 HOC 입니다.

changeField 와 initializeForm, login 은 액션 생성 함수입니다. 이 함수를 사용해 액션을 만들고 디스패치해 전역 상태를 변경할 예정입니다.

AuthForm 컴포넌트는 LoginForm 컨테이너 컴포넌트가 상태를 주입할 컴포넌트입니다.

check 는 로그인 여부를 체크하는 액션 생성 함수입니다.



LoginForm 컴포넌트의 역할은 AuthForm 컴포넌트에 상태를 주입하는 것입니다. 일단 AuthForm 컴포넌트에서 어떤 값들을 props로 받는지 살펴보아야 합니다.

```react
function AuthForm({ type, form, onChange, onSubmit, error }){
    // ...
}
```

type, form, onChange, onSubmit, error 총 5 개의 props를 넣어주어야 합니다. type 은 login 입니다. 

form 은 전역 상태를 가져와서 넣어 주어야합니다. 지금까지 우리가 만들었던 auth 리듀서와 user 리듀서, loading 리듀서의 전역 상태는 다음과 같습니다.

```javascript
const state = {
  auth: {
      register: {
          // ...
      }
      login: {
          username: '',
          password: ''
      },
	  auth: null,
      authError: null
  },
  user: {
      user: null,
      checkError: null
  },
  loading: {},
}
```

여기서 form 에 넣어주어야 하는 상태는 state.auth.login 입니다. 이 값을 useSelector 를 사용해 다음과 같이 가져올 수 있습니다.

```react
const {form} = useSelector(({auth}) => ({form: auth.login}));
```



onChange 는 AuthForm 컴포넌트의 입력을 처리하는 부분으로, changeField 액션 생성 함수를 사용해 디스패치 할 것입니다.

```react
const onChange = (event) => {
  const { name, value } = event.target;
  dispatch(changeField({ form: 'login', key: name, value }));
};
```



onSubmit 은 전역 상태의 state.auth.login 값을 login 액션 생성 함수의 매개변수로 넣어주고, 이를 디스패치 하는 역할을 해야 합니다. state.auth.login 은 위의 useSelector 를 사용해 form 에 담았으므로 이를 사용하도록 하겠습니다.

```react
const onSubmit = (event) => {
  event.preventDefault();
  const { username, password } = form;
  dispatch(login({ username, password }));
};
```



error 는 서버와의 통신 이후 값을 받을 수 있습니다. 다시 말하자면, onSubmit 이후에 로그인에 실패했을 때, error 가 생깁니다. 따라서 현재 컴포넌트에서 useState 를 사용해 error 상태를 만들도록 하겠습니다.

```react
const [error, setError] = useState(null);
```



이제 전체 코드를 살펴보도록 하겠습니다.

```react
function LoginForm({ history }) {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError('로그인 실패');
    }

    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />;
}
```

이번에는 useEffect 부분을 중점으로 살펴보겠습니다. 처음 등장하는 useEffect에서는 login 폼을 초기화합니다. 실질적으로 state.auth.login 의 상태 값을 초기 상태로 되돌리는 작업을 합니다.

두 번째 useEffect 는 만약 전역 상태의 state.auth.authError 가 있으면 error 상태를 '로그인 실패' 로 설정하고, state.auth.auth 가 존재하면 콘솔에 '로그인 성공' 을 출력하고, 로그인을 인증하는 과정을 거칩니다.

세 번째 useEffect 는 state.user.user 가 존재할 경우, 로그인에 성공한 상태이므로, 홈 화면으로 이동하도록 하고, localStorage 에 user 의 정보를 담습니다.



> **로그인 성공 시나리오**
>
> dispatch(initializeForm('login')) -> username onChange -> password onChange -> onSubmit -> dispatch(login({username, password})) -> dispatch(check()) -> history.push('/') -> localStorage.setItem



> **로그인 실패 시나리오**
>
> dispatch(initializeForm('login')) -> username onChange -> password onChange -> onSubmit -> dispatch(login({username, password})) -> setError('로그인 실패')



### RegisterForm

RegisterForm 역시 AuthForm 컴포넌트에 상태를 주입합니다. LoginForm 과 거의 똑같고, 폼의 유효성을 검증하는 부분만 다르므로, 설명은 생략하도록 하겠습니다.

```react
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';

function RegisterForm({ history }) {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const { username, password, passwordConfirm } = form;

    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }

      setError('회원가입 실패');
      return;
    }

    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [user, history]);

  return <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />;
}

export default withRouter(RegisterForm);
```



## 페이지

마지막으로, 실제 화면에 보여줄 페이지 컴포넌트입니다. 기존에 만든 컨테이너 컴포넌트와 프레젠테이션 컴포넌트를 잘 조합해서 화면에 로그인과 회원가입 페이지를 보여줍니다.

### LoginPage

```react
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;
```

정말 간단합니다. AuthTemplate 컴포넌트 내에 LoginForm 컴포넌트를 넣어 화면에 보여줍니다.



### RegisterPage

```react
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

function RegisterPage() {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
}

export default RegisterPage;
```

RegisterPage 역시 AuthTemplate 컴포넌트 내에 RegisterForm 컴포넌트를 넣어 화면에 보여줍니다.



## 새로고침 시 로그인 여부 확인

새로고침 했을 때, 리액트는 기본적으로 전체를 다시 렌더링하고, 리덕스도 초기화됩니다. 따라서, 우리가 로그인 했는지 여부를 localStorage 에 저장해 둔 값을 가져와서 확인해야 합니다.

그럼 새로고침 처리 부분을 어디에 넣는 것이 가장 좋을까요? 이번 프로젝트에서는 `src/index.js` 에 넣었습니다. 여기에  넣어 준 이유는 index 가 가장 먼저 렌더링 되는 부분인데, 여기서 처리하면, 우리가 만든 LoginPage 또는 RegisterPage 컴포넌트가 렌더링 되기 전에 로그인 여부를 확인할 수 있기 때문에 로그인 유저가 로그인 페이지에 다시 접근했을 때, 로그인 페이지가 잠깐동안 보이는 것을 방지할 수 있습니다.

```react
// src/index.js
const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));
saga.run(rootSaga);
loadUser();

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }

    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}
```

loadUser 함수가 localStorage 에 사용자 정보가 있는지 확인하고, 이를 사용해 로그인 여부를 체크하는 함수입니다. 주의해야 할 점은 꼭 `saga.run(rootSaga)` 뒤에 와야하는 점입니다. check 액션 함수로 생성한 액션을 디스패치하는 부분을 리덕스 사가로 구현했기 때문에, 사가가 실행 된 후 loadUser 함수를 호출해야 사가 함수가 제대로 동작합니다.

