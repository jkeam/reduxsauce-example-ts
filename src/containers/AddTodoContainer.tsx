import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoActions from '../redux/todos';
import AddTodo from '../components/AddTodo';

interface RootState {
}

const mapStateToProps = (state: RootState) => ({
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (id: string, text: string) => dispatch(TodoActions.addTodo(id, text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
