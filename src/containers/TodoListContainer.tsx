import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoActions from '../redux/todos';
import TodoList from '../components/TodoList';

interface Todo {
    id: string,
    text: string,
    completed: boolean
}

interface RootState {
  todos: {
    todos: Todo[]
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todos.todos
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeTodo: (id: string) => dispatch(TodoActions.removeTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

