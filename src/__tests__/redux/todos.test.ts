import TodoActions, {
  INITIAL_STATE,
  addTodo,
  toggleTodo,
  removeTodo
} from '../../redux/todos';
import { TodoType } from '../../redux/types';

describe('todo actions', () => {
  const todo: TodoType = {
    id: '12345',
    text: 'Write tests',
    completed: false
  };

  it('should be able to add todo', () => {
    const expectedAction = {
      type: 'ADD_TODO',
      id: todo.id,
      text: todo.text
    };
    expect(TodoActions.addTodo(todo.id, todo.text)).toEqual(expectedAction);
  });

  it('should be able to toggle todo', () => {
    const expected = {
      id: todo.id,
      type: 'TOGGLE_TODO'
    };
    expect(TodoActions.toggleTodo(todo.id)).toEqual(expected);
  });

  it('should be able to remove todo', () => {
    const expected = {
      type: 'REMOVE_TODO',
      id: todo.id
    };
    expect(TodoActions.removeTodo(todo.id)).toEqual(expected);
  });
});

describe('todo redux', () => {
  const todo: TodoType = {
    id: '12345',
    text: 'Write tests',
    completed: false
  };

  it('should be able to reduce adding todo', () => {
    const expected = {
      todos: [todo]
    };
    expect(addTodo(INITIAL_STATE, todo)).toEqual(expected);
  });

  it('should be able to toggle todo', () => {
    const expected = {
      todos: [{id: todo.id, text: todo.text, completed: true}]
    };
    expect(toggleTodo({todos: [todo]}, todo)).toEqual(expected);
  });

  it('should be able to remove todo', () =>  {
    const expected = {
      todos: []
    };
    expect(removeTodo({todos: [todo]}, todo)).toEqual(expected);
  });
});