import React from 'react'

interface Props {
    id: string,
    onClick: Function,
    removeTodo: Function,
    completed: boolean,
    text: string
}

const Todo: React.FC<Props> = ({ id, onClick, removeTodo, completed, text }) => {
  return (
    <tr>
        <td onClick={() => onClick(id)} style={{ textDecoration: completed ? 'line-through' : 'none' }} >
            {text}
        </td>
        <td>
            <button className="button is-secondary" onClick={() => removeTodo(id)}>
                <span className="icon">
                <i className="fas fa-trash"></i>
                </span>
            </button>
        </td>
    </tr>
  );
}

export default Todo;