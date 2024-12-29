import { VisibilityFilters } from '../constants';
import { createActions, createReducer } from 'reduxsauce';
import { Action } from 'redux';
import { FilterStateType } from './types';

interface ActionTypes {
  [action: string]: string;
}

interface ActionCreators {
  [action: string]: (...args: any[]) => Action;
}

const { Types, Creators } = createActions<ActionTypes, ActionCreators>({
  setFilter: ['filter']
});

export const VisibilityTypes = Types
export default Creators;

export const INITIAL_STATE: FilterStateType = {
  filter: VisibilityFilters.SHOW_ALL
};

export const setFilter = (state: FilterStateType = INITIAL_STATE, { filter }: FilterStateType) => ({ filter });
export const reducer = createReducer<FilterStateType, Action>(INITIAL_STATE, {
  [Types.SET_FILTER]: setFilter
});
