import axios from 'axios';
import { Dispatch } from 'redux';
import { call, put, takeEvery } from 'redux-saga/effects';

const GET_USERS_PENDING = 'users/GET_USERS_PENDING' as const;
const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS' as const;
const GET_USERS_FAILURE = 'users/GET_USERS_FAILURE' as const;

const GET_USER = 'users/GET_USER' as const;
const GET_USER_SUCCESS = 'users/GET_USER_SUCCESS' as const;
const GET_USER_FAILURE = 'users/GET_USER_FAILURE' as const;

const getUsersPending = () => ({ type: GET_USERS_PENDING });
const getUsersSuccess = (payload: any) => ({ type: GET_USERS_SUCCESS, payload });
const getUsersFailure = (payload: any) => ({ type: GET_USERS_FAILURE, payload, error: true });

export const getUsers = () => async (dispatch: Dispatch) => {
  dispatch(getUsersPending());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(getUsersSuccess(response.data));
  } catch (e) {
    dispatch(getUsersFailure(e));
    throw e;
  }
};

export const getUser = (id: number) => ({ type: GET_USER, payload: id });
export const getUserSuccess = (data: any) => ({ type: GET_USER_SUCCESS, payload: data });
export const getUserFailure = (error: any) => ({ type: GET_USER_FAILURE, payload: error, error: true });

const getUserById = (id: number) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

function* getUserSaga(action: any) {
  try {
    const response: { data: IUser } = yield call(getUserById, action.payload);
    yield put(getUserSuccess(response.data));
  } catch (e) {
    yield put(getUserFailure(e));
  }
}

export function* userSaga() {
  yield takeEvery(GET_USER, getUserSaga);
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface IState {
  users: null | IUser[];
  user: null | IUser;
  loading: {
    users: boolean;
    user: boolean;
  };
  error: {
    users: any;
    user: any;
  };
}

type Action =
  | ReturnType<typeof getUsersPending>
  | ReturnType<typeof getUsersSuccess>
  | ReturnType<typeof getUsersFailure>
  | ReturnType<typeof getUser>
  | ReturnType<typeof getUserSuccess>
  | ReturnType<typeof getUserFailure>;

const initialState: IState = {
  users: null,
  user: null,
  loading: {
    users: false,
    user: false,
  },
  error: {
    users: null,
    user: null,
  },
};

export function users(state: IState = initialState, action: Action) {
  switch (action.type) {
    case GET_USERS_PENDING:
      return { ...state, loading: { ...state.loading, users: true } };
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: { ...state.loading, users: false } };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        error: { ...state.error, users: action.payload },
      };
    case GET_USER:
      return { ...state, loading: { ...state.loading, user: true } };
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload, loading: { ...state.loading, user: false } };
    case GET_USER_FAILURE:
      return { ...state, loading: { ...state.loading, user: false }, error: { ...state.error, user: action.payload } };
    default:
      return state;
  }
}
