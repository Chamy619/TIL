import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';
import { getPost, getUsers } from './api';
import { SagaAction } from '../modules/sample';

export default function createRequestSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: SagaAction) {
    yield put(startLoading(type));
    try {
      const response: ReturnType<typeof getPost> | ReturnType<typeof getUsers> = yield call(request, action.payload);
      yield put({ type: SUCCESS, payload: response });
    } catch (e) {
      yield put({ type: FAILURE, payload: e, error: true });
    }
    yield put(finishLoading(type));
  };
}
