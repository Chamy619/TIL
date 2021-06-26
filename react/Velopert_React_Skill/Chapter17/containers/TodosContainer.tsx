import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { RootState } from '../modules';
import { changeInput, insert, toggle, remove } from '../modules/todos';

function TodosContainer() {
  const { input, todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onChangeInput = useCallback(
    (text: string) => {
      dispatch(changeInput(text));
    },
    [dispatch],
  );

  const onInsert = useCallback(
    (text: string) => {
      dispatch(insert(text));
    },
    [dispatch],
  );

  const onToggle = useCallback(
    (id: number) => {
      dispatch(toggle(id));
    },
    [dispatch],
  );

  const onRemove = useCallback(
    (id: number) => {
      dispatch(remove(id));
    },
    [dispatch],
  );

  return (
    <Todos
      todos={todos}
      input={input}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
}

export default React.memo(TodosContainer);
