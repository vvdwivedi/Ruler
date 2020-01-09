/*
 *
 * RulesDashboard actions
 *
 */

import * as types from './constants';

export function fetchRulesRequest() {
  return {
    type: types.FETCH_RULES_REQUEST,
  };
}

export function fetchRulesSuccess(res) {
  return {
    type: types.FETCH_RULES_SUCCESS,
    body: res,
  };
}

export function fetchRulesFailure(error) {
  return {
    type: types.FETCH_RULES_FAILURE,
    error,
  };
}
