import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoActions from '../redux/todos';
import TodoList from '../components/TodoList';
import { RootState } from '../Types';

const mapStateToProps = (state: RootState) => ({
  todos: state.todos.todos
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeTodo: (id: string) => dispatch(TodoActions.removeTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
