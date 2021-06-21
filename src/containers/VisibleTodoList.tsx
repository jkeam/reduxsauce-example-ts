import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import TodoActions from '../redux/todos';
import { VisibilityFilters } from '../constants';
import { DispatchType, StateType, TodoType } from '../redux/types';

const getVisibleTodos = (todos: TodoType[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = (state: StateType) => ({
  todos: getVisibleTodos(state.todos.todos, state.filters.filter),
  allTodoCount: state.todos.todos.length
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
  toggleTodo: (id: string) => dispatch(TodoActions.toggleTodo(id)),
  removeTodo: (id: string) => dispatch(TodoActions.removeTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
