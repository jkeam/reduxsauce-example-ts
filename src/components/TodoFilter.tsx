import React, { FC, ReactElement } from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../constants';

const TodoFilter: FC = (): ReactElement => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
);

export default TodoFilter;
