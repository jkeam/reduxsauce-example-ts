import { createActions, createReducer } from 'reduxsauce';
import { AnyAction } from 'redux';
import { TodoInput, TodoState } from '../Types'

interface ActionTypes {
  [action: string]: string;
}

interface ActionCreators {
  [action: string]: (...args: any[]) => AnyAction;
}

const { Types, Creators } = createActions<ActionTypes, ActionCreators>({
  reset: null,
  addTodo: ['id', 'text'],
  toggleTodo: ['id'],
  removeTodo: ['id']
});

export const TodosTypes = Types;
export default Creators;

export const INITIAL_STATE: TodoState = {
  todos: []
};

const addTodo = (state = INITIAL_STATE, todoInput: TodoInput) => {
  const newTodo = {
    id: todoInput.id,
    text: todoInput.text,
    completed: false
  };
  return {
    todos: [...state.todos, newTodo]
  };
};

const removeTodo = (state = INITIAL_STATE, todoId: {id: string}) => {
  return {
    todos: (state.todos || []).filter(todo => todo.id !== todoId.id)
  };
};

export const reducer = createReducer<TodoState, AnyAction>(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.REMOVE_TODO]: removeTodo
});