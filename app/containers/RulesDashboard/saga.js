import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as Api from '../../services/apis';
import * as types from './constants';
import * as actions from './actions';

// Individual exports for testing
export function* fetchAllRules() {
  try {
    const result = yield call(Api.getRules);
    console.log(result);
    yield put(actions.fetchRulesSuccess(result.data));
  } catch (error) {
    yield put(actions.fetchRulesFailure(error));
  }
}

export default function* rulesDashboardSaga() {
  yield all([takeLatest(types.FETCH_RULES_REQUEST, fetchAllRules)]);
}
