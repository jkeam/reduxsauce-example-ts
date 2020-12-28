import React from 'react';
import TodoComponent from './Todo'
import { Todo } from '../Types';

interface Props {
  todos: Todo[],
  removeTodo: Function
}

const TodoList: React.FC<Props> = ({ todos, removeTodo }) => {
  return (
    <section className="section">
      {todos && todos.length > 0 &&
        <div className="card article">
          <div className="card-content">
            <div className="content article-body">
              <h1 className="title">All Todos</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map(todo =>
                    <TodoComponent
                      key={todo.id}
                      {...todo}
                      onClick={(id: string) => {}}
                      removeTodo={(id: string) => removeTodo(id)}
                    />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </section>
  );
}
export default TodoList;