import { Dispatch } from 'redux';

const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = {
  number: 0,
};

type ICounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

function counter(state = initialState, action: ICounterAction) {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 };
    case DECREASE:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}

export default counter;
