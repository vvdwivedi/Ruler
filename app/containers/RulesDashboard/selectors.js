import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the rulesDashboard state domain
 */

const selectRulesDashboardDomain = state =>
  state.rulesDashboard || initialState;

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectRulesDashboardDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectRulesDashboardDomain,
    substate => substate.error,
  );

const makeSelectRules = () =>
  createSelector(
    selectRulesDashboardDomain,
    substate => substate.rules,
  );

/**
 * Default selector used by RulesDashboard
 */

const makeSelectRulesDashboard = () =>
  createSelector(
    selectRulesDashboardDomain,
    substate => substate,
  );

export default makeSelectRulesDashboard;
export {
  selectRulesDashboardDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectRules,
};
