import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the entitiesPage state domain
 */

const selectEntitiesPageDomain = state => state.entitiesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EntitiesPage
 */

const makeSelectEntitiesPage = () =>
  createSelector(
    selectEntitiesPageDomain,
    substate => substate,
  );

export default makeSelectEntitiesPage;
export { selectEntitiesPageDomain };
