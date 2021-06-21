import { AnyAction } from 'redux';

export interface TodoType {
  id: string,
  text: string,
  completed: boolean
};

export interface TodoStateType {
  todos: Array<TodoType>
};

export interface FilterStateType {
  filter: string
}

export interface StateType {
  todos: TodoStateType,
  filters: FilterStateType
}

export type DispatchType = (args: AnyAction) => void;
