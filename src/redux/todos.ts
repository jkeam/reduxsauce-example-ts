import { createActions, createReducer } from 'reduxsauce';
import { AnyAction } from 'redux';

interface ActionTypes {
  [action: string]: string;
}
interface ActionCreators {
  [action: string]: (...args: any[]) => AnyAction;
}

interface Todo {
  id: string;
  text: string;
  completed?: boolean;
}
interface Todos {
  todos: Todo[]
}
interface TodoId {
  id: string
}

const { Types, Creators } = createActions<ActionTypes, ActionCreators>({
  reset: null,
  addTodo: ['id', 'text'],
  toggleTodo: ['id'],
  removeTodo: ['id']
});

export const TodosTypes = Types;
export default Creators;

export const INITIAL_STATE: Todos = {
  todos: []
};

const addTodo = (state = INITIAL_STATE, todoInput: Todo) => {
  todoInput.completed = false;
  return {
    todos: [ ...state.todos, todoInput ]
  }
};

const removeTodo = (state = INITIAL_STATE, todoId: TodoId) => {
  return {
    todos: (state.todos || []).filter(todo => todo.id !== todoId.id)
  }
};

export const reducer = createReducer<Todos, AnyAction>(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.REMOVE_TODO]: removeTodo
});