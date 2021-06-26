import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { increase, decrease } from '../modules/counter';

function CounterContainer() {
  const number = useSelector((state: RootState) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
}

export default React.memo(CounterContainer);
