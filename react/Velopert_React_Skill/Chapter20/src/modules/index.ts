import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { users, userSaga } from './users';

const rootReducer = combineReducers({ users });

export function* rootSaga() {
  yield all([userSaga()]);
}
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
