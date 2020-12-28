import React from 'react';
import './App.css';
import Title from './components/Title';
import TodoListContainer from './containers/TodoListContainer';
import AddTodoContainer from './containers/AddTodoContainer';

function App() {
  return (
    <div className="container">
      <Title />
      <AddTodoContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
