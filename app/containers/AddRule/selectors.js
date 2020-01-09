import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addRule state domain
 */

const selectAddRuleDomain = state => state.addRule || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddRule
 */

const makeSelectAddRule = () =>
  createSelector(
    selectAddRuleDomain,
    substate => substate,
  );

export default makeSelectAddRule;
export { selectAddRuleDomain };
