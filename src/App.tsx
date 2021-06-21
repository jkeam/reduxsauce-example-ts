import React, { FC, ReactElement } from 'react';
import './App.css';
import Title from './components/Title';
import AddTodo from './containers/AddTodo';
import Reset from './containers/Reset';
import VisibleTodoList from './containers/VisibleTodoList';

const App: FC = (): ReactElement => (
  <div className="container">
    <Title />
    <AddTodo />
    <VisibleTodoList />
    <Reset />
  </div>
);

export default App;
