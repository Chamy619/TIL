import TodoListItem, { ITodo } from './TodoListItem';
import './TodoList.scss';

interface Props {
  todos: ITodo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList = ({ todos, onRemove, onToggle }: Props) => {
  return (
    <div className="TodoList">
      {todos.map((item) => (
        <TodoListItem key={item.id} todo={item} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
