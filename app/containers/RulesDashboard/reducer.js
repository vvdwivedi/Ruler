/*
 *
 * RulesDashboard reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const rulesDashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_RULES_REQUEST:
        draft.loading = true;
        break;
      case types.FETCH_RULES_SUCCESS:
        console.log(action);
        draft.loading = false;
        draft.rules = action.body.data;
        break;
      case types.FETCH_RULES_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default rulesDashboardReducer;
