import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the viewEntity state domain
 */

const selectViewEntityDomain = state => state.viewEntity || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ViewEntity
 */

const makeSelectViewEntity = () =>
  createSelector(
    selectViewEntityDomain,
    substate => substate,
  );

export default makeSelectViewEntity;
export { selectViewEntityDomain };
