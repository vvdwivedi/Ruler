import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editEntity state domain
 */

const selectEditEntityDomain = state => state.editEntity || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditEntity
 */

const makeSelectEditEntity = () =>
  createSelector(
    selectEditEntityDomain,
    substate => substate,
  );

export default makeSelectEditEntity;
export { selectEditEntityDomain };
