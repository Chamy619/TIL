import { createAction } from 'redux-actions';

const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;

interface CounterAction {
  type: string;
}

export interface CounterState {
  number: number;
}

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

export default function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 };
    case DECREASE:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}
