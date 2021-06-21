import VisibilityFilterActions, { setFilter, INITIAL_STATE } from '../../redux/filters';

describe('filter actions', () => {
  it('should be able to set filter', () => {
    const filter = 'SHOW_COMPLETED';
    const expectedAction = {
      type: 'SET_FILTER',
      filter
    }
    expect(VisibilityFilterActions.setFilter(filter)).toEqual(expectedAction);
  });
});

describe('filter redux', () => {
  it('should be able to reduce setting filter', () => {
    const filter = 'NEW_FILTER';
    const expected = { filter };
    expect(setFilter(INITIAL_STATE, { filter })).toEqual(expected);
  });
});