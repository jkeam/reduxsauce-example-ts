import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  addTodo: Function
}

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  function isValid(t: string): boolean {
      return (t !== '' && t.trim() !== '')
  }
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
                  <button className="button is-primary" type="submit">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text" onClick={() => setText('')} disabled={!isValid(text)}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddTodo;