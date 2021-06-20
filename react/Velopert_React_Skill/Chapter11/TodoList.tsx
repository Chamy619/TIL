import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem, { ITodo } from './TodoListItem';
import './TodoList.scss';

interface Props {
  todos: ITodo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList = ({ todos, onRemove, onToggle }: Props) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style} />;
    },
    [onRemove, onToggle, todos],
  );
  return (
    // <div className="TodoList">
    //   {todos.map((item) => (
    //     <TodoListItem key={item.id} todo={item} onRemove={onRemove} onToggle={onToggle} />
    //   ))}
    // </div>
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
