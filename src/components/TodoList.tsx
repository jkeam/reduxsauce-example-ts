import React from 'react';
import Todo from './Todo'

interface TodoType {
  id: string,
  text: string,
  completed: boolean
}

interface Props {
  todos: TodoType[],
  removeTodo?: Function
}

const TodoList: React.FC<Props> = ({ todos, removeTodo }) => {
  function toggleTodoInner(id: string) {
  }
  function removeTodoInner(id: string) {
    if (removeTodo) {
      removeTodo(id);
    }
  }

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
                    <Todo
                      key={todo.id}
                      {...todo}
                      onClick={toggleTodoInner}
                      removeTodo={removeTodoInner}
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