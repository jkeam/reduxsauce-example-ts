import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { reducer as todosReducer } from './todos';

const resettable = resettableReducer('RESET');

export default combineReducers({
    todos: resettable(todosReducer)
})