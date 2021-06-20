import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { ITodo } from './components/TodoListItem';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 0,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 1,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 2,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(3);

  const onInsert = useCallback(
    (text: string) => {
      setTodos(todos.concat({ id: nextId.current, text, checked: false }));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((item) => item.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id: number) => {
      setTodos(todos.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      Todo App을 만들자!
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
