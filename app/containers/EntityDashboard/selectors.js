import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the entityDashboard state domain
 */

const selectEntityDashboardDomain = state =>
  state.entityDashboard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EntityDashboard
 */

const makeSelectEntityDashboard = () =>
  createSelector(
    selectEntityDashboardDomain,
    substate => substate,
  );

export default makeSelectEntityDashboard;
export { selectEntityDashboardDomain };
