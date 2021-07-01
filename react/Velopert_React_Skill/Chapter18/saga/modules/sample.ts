import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

const GET_POST = 'sample/GET_POST' as const;
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS' as const;
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE' as const;

const GET_USERS = 'sample/GET_USERS' as const;
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS' as const;
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE' as const;

export const getPost = (id: number) => ({ type: GET_POST, payload: id });
export const getUsers = (id: number) => ({ type: GET_USERS, payload: id });

export type SagaAction = ReturnType<typeof getPost> | ReturnType<typeof getUsers>;

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// function* getPostSaga(action: SagaAction) {
//   yield put(startLoading(GET_POST));
//   try {
//     const response: ReturnType<typeof api.getPost> = yield call(api.getPost, action.payload);
//     yield put({ type: GET_POST_SUCCESS, payload: response });
//   } catch (e) {
//     yield put({ type: GET_POST_FAILURE, payload: e, error: true });
//   }
//   yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga(action: SagaAction) {
//   yield put(startLoading(GET_USERS));
//   try {
//     const response: ReturnType<typeof api.getUsers> = yield call(api.getUsers, action.payload);
//     yield put({ type: GET_USERS_SUCCESS, payload: response });
//   } catch (e) {
//     yield put({ type: GET_USERS_FAILURE, payload: e, error: true });
//   }
//   yield put(finishLoading(GET_USERS));
// }

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

interface ISampleState {
  post: null | api.IPost;
  users: null | api.IUser[];
}

// type IAction = ReturnType<typeof getPost> | ReturnType<typeof getUsers>;

const initialState: ISampleState = {
  post: null,
  users: null,
};

type ISampleAction =
  | { type: 'sample/GET_POST' }
  | { type: 'sample/GET_POST_SUCCESS'; payload: any }
  | { type: 'sample/GET_POST_FAILURE'; payload: any; error: boolean }
  | { type: 'sample/GET_USERS' }
  | { type: 'sample/GET_USERS_SUCCESS'; payload: any }
  | { type: 'sample/GET_USERS_FAILURE'; payload: any; error: boolean };

export default function sample(state = initialState, action: ISampleAction) {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return { ...state, post: action.payload };
    case GET_POST_FAILURE:
      return { ...state, post: action.payload };
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case GET_USERS_FAILURE:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
