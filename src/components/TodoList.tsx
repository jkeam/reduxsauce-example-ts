import React, { FC, ReactElement } from 'react'
import Todo from './Todo'
import TodoFilter from './TodoFilter'
import { TodoType } from '../redux/types';

type TodoEventType = (id: string) => void;
type Props = {
  todos: TodoType[],
  toggleTodo: TodoEventType,
  removeTodo: TodoEventType,
  allTodoCount: number
};
const TodoList: FC<Props> = ({ todos, toggleTodo, removeTodo, allTodoCount }): ReactElement => (
  <section className="section">
    {allTodoCount > 0 &&
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
                    onClick={() => toggleTodo(todo.id)}
                    removeTodo={() => removeTodo(todo.id)}
                  />
                )}
              </tbody>
            </table>
            <TodoFilter />
          </div>
        </div>
      </div>
    }
  </section>
);

export default TodoList;
