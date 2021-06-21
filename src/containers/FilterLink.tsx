import { connect } from 'react-redux';
import VisibilityFilterActions from '../redux/filters';
import Link from '../components/Link';
import { DispatchType, StateType } from '../redux/types';

type FilterType = {
  filter: string
};

const mapStateToProps = (state: StateType, ownProps: FilterType) => ({
  stateFilter: state.filters.filter,
  filter: ownProps.filter
});

const mapDispatchToProps = (dispatch: DispatchType, ownProps: FilterType) => ({
  onClick: () => dispatch(VisibilityFilterActions.setFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
