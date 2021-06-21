import React, { FC, ReactElement, MouseEvent } from 'react';

type onTableEvent = (event: MouseEvent<HTMLTableDataCellElement>) => void;
type onButtonEvent = (event: MouseEvent<HTMLButtonElement>) => void;
type Props = {
  onClick: onTableEvent,
  removeTodo: onButtonEvent,
  completed: boolean,
  text: string
};
const Todo: FC<Props> = ({ onClick, removeTodo, completed, text }): ReactElement => (
  <tr>
    <td
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </td>
    <td>
      <button className="button is-secondary" onClick={removeTodo}>
        <span className="icon">
          <i className="fas fa-trash"></i>
        </span>
      </button>
    </td>
  </tr>
);

export default Todo;