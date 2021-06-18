import React, { useReducer } from 'react';

interface IAction {
  name: string;
  value: string;
}

function reducer(state: any, action: IAction) {
  return { ...state, [action.name]: action.value };
}

export const useInfo = <T>(
  initialState: T
): [T, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ name: event.target.name, value: event.target.value });
  };

  return [state, onChange];
};
