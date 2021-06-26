const CHANGE_INPUT = 'todos/CHANGE_INPUT' as const;
const INSERT = 'todos/INSERT' as const;
const TOGGLE = 'todos/TOGGLE' as const;
const REMOVE = 'todos/REMOVE' as const;

let id = 2;
export const changeInput = (text: string) => ({ type: CHANGE_INPUT, payload: text });
export const insert = (text: string) => ({ type: INSERT, payload: { id: id++, text, done: false } });
export const toggle = (id: number) => ({ type: TOGGLE, paylaod: id });
export const remove = (id: number) => ({ type: REMOVE, payload: id });

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type TodosAction =
  | ReturnType<typeof changeInput>
  | ReturnType<typeof insert>
  | ReturnType<typeof toggle>
  | ReturnType<typeof remove>;

const initialState = {
  input: '',
  todos: [
    { id: 0, text: '리덕스 기초 배우기', done: true },
    { id: 1, text: '리액트와 리덕스 사용하기', done: false },
  ],
};

export default function todos(state = initialState, action: TodosAction) {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, input: action.payload };
    case INSERT:
      return { ...state, todos: state.todos.concat(action.payload) };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.paylaod ? { ...todo, done: !todo.done } : todo)),
      };
    case REMOVE:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    default:
      return state;
  }
}
