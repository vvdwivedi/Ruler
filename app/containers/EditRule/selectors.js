import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editRule state domain
 */

const selectEditRuleDomain = state => state.editRule || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditRule
 */

const makeSelectEditRule = () =>
  createSelector(
    selectEditRuleDomain,
    substate => substate,
  );

export default makeSelectEditRule;
export { selectEditRuleDomain };
