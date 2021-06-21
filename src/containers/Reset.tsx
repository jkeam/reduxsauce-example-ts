import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import TodoActions from '../redux/todos';
import { DispatchType } from '../redux/types';

type ResetType = () => void;
type Props = {
  reset: ResetType
};
const Reset: FC<Props> = ({ reset }): ReactElement => (
  <div>
    <button className="button is-secondary" onClick={reset}>
      Reset Everything
    </button>
  </div>
);

const mapDispatchToProps = (dispatch: DispatchType) => ({
  reset: () => {
    dispatch(TodoActions.reset())
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Reset);
