import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the viewRule state domain
 */

const selectViewRuleDomain = state => state.viewRule || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ViewRule
 */

const makeSelectViewRule = () =>
  createSelector(
    selectViewRuleDomain,
    substate => substate,
  );

export default makeSelectViewRule;
export { selectViewRuleDomain };
