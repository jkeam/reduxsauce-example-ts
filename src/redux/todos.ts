import { createActions, createReducer } from 'reduxsauce';
import { Action } from 'redux';
import { TodoType, TodoStateType } from './types';

interface ActionTypes {
  [action: string]: string;
}

interface ActionCreators {
  [action: string]: (...args: any[]) => Action;
}

const { Types, Creators } = createActions<ActionTypes, ActionCreators>({
  reset: null,
  addTodo: ['id', 'text'],
  toggleTodo: ['id'],
  removeTodo: ['id']
});

export const TodosTypes = Types;
export default Creators;

export const INITIAL_STATE:TodoStateType = {
  todos: []
};

export const addTodo = (state = INITIAL_STATE, todo: TodoType) => ({
  todos: [
    ...state.todos,
    {
      id: todo.id,
      text: todo.text,
      completed: todo.completed || false
    }
  ]
});

export const toggleTodo = (state: TodoStateType = INITIAL_STATE, newTodo: TodoType) => {
  return {
    todos: (state.todos || []).map(todo =>
      (todo.id === newTodo.id)
        ? {...todo, completed: !todo.completed}
        : todo
    )
  }
};

export const removeTodo = (state: TodoStateType = INITIAL_STATE, todoToRemove: TodoType) => ({
  todos: (state.todos || []).filter(todo => todo.id !== todoToRemove.id)
});

export const reducer = createReducer<TodoStateType, Action>(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.TOGGLE_TODO]: toggleTodo,
  [Types.REMOVE_TODO]: removeTodo
});
