import { Dispatch } from 'redux';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_POST = 'sample/GET_POST' as const;
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS' as const;
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE' as const;

const GET_USERS = 'sample/GET_USERS' as const;
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS' as const;
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE' as const;

// export const getPost = (id: number) => async (dispatch: Dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const response = await api.getPost(id);
//     dispatch({ type: GET_POST_SUCCESS, payload: response.data });
//   } catch (e) {
//     dispatch({ type: GET_POST_FAILURE, payload: e, error: true });
//     throw e;
//   }
// };

// export const getUsers = (id: number) => async (dispatch: Dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers(id);
//     dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
//   } catch (e) {
//     dispatch({ type: GET_USERS_FAILURE, payload: e, error: true });
//     throw e;
//   }
// };

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Object;
  phone: string;
  website: string;
  company: Object;
}

interface ISampleState {
  post: null | IPost;
  users: null | IUser[];
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
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
