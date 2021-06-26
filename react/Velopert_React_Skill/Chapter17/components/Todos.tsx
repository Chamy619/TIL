import React from 'react';
import { Todo as TodoInterface } from '../modules/todos';

interface TodoItemInterface {
  todo: TodoInterface;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoItem({ todo, onToggle, onRemove }: TodoItemInterface) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onClick={() => {
          onToggle(todo.id);
        }}
      />
      <span>{todo.text}</span>
      <button
        onClick={() => {
          onRemove(todo.id);
        }}
      >
        삭제
      </button>
    </div>
  );
}

interface TodosInterface {
  input: string;
  todos: TodoInterface[];
  onChangeInput: (text: string) => void;
  onInsert: (text: string) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function Todos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }: TodosInterface) {
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
