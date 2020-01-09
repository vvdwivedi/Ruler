import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addEntity state domain
 */

const selectAddEntityDomain = state => state.addEntity || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddEntity
 */

const makeSelectAddEntity = () =>
  createSelector(
    selectAddEntityDomain,
    substate => substate,
  );

export default makeSelectAddEntity;
export { selectAddEntityDomain };
