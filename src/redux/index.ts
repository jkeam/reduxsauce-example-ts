import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { reducer as todosReducer } from './todos';
import { reducer as filterReducer } from './filters';

const resettable = resettableReducer('RESET');

// todos and filters stores will both be reset by the RESET event.
// RESET event is dispatchable via the Todo reducer
export default combineReducers({
  todos: resettable(todosReducer),
  filters: resettable(filterReducer)
});
