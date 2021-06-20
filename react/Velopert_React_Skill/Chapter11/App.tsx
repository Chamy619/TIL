import { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { ITodo } from './components/TodoListItem';

function createBulkTodos(): ITodo[] {
  const array: ITodo[] = [];
  for (let i = 0; i < 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

interface IAction {
  type: 'INSERT' | 'REMOVE' | 'TOGGLE';
  id?: number;
  todo?: ITodo;
}

function todoReducer(state: ITodo[], action: IAction) {
  switch (action.type) {
    case 'INSERT':
      return state.concat(action.todo as ITodo);
    case 'REMOVE':
      return state.filter((item) => item.id !== action.id);
    case 'TOGGLE':
      return state.map((item) => (item.id === action.id ? { ...item, checked: !item.checked } : item));
    default:
      return state;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2500);

  const onInsert = useCallback((text: string) => {
    // setTodos((todos) => todos.concat({ id: nextId.current, text, checked: false }));
    const todo = { id: nextId.current, text: text, checked: false };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    // setTodos((todos) => todos.filter((item) => item.id !== id));
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id: number) => {
    // setTodos((todos) => todos.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
