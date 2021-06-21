import React, { FC, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import TodoActions from '../redux/todos';
import { DispatchType } from '../redux/types';
import { v4 as uuidv4 } from 'uuid';


type addTodoType = (id: string, text: string) => void;
const isValid = (text: string): boolean => {
  if (text === undefined || text === null) {
    return false;
  }
  return (text.trim() !== '');
};
const AddTodo: FC<{ addTodo?: addTodoType }> = ({ addTodo = () => {} }): ReactElement => {
  const [text, setText] = useState('');
  return (
    <section className="section">
      <div className="card article">
        <div className="card-content">
          <div className="content article-body">
            <h1 className="title">New Todo</h1>
            <form onSubmit={e => {
              e.preventDefault();
              if (!isValid(text)) {
                return;
              }
              addTodo(uuidv4(), text);
              setText('');
            }}>
              <div className="field">
                <label className="label">Item</label>
                <div className="control">
                  <input className="input" type="text" value={text} onChange={(e) => setText(e.currentTarget.value)} />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" type="submit" disabled={!isValid(text)}>Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text" onClick={() => setText('')}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch: DispatchType) => ({
  addTodo: (id: string, text: string) => dispatch(TodoActions.addTodo(id, text))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
