import { call, fork, take, select, put, cancel, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import {FAILURE, FETCH, LOADING, SUCCESS} from '../actions/constants';
import {action} from '../actions/actionHelper';

function* doLoading({ loading }) {
  // proccess Loading
  console.log('do loading : ' + loading);
  yield put(action(LOADING, { loading }));
}

export default function* watchLoading() {
  yield takeLatest(action => _.reduce([FETCH, SUCCESS, FAILURE],
      (state, type) => state || new RegExp(`^${type}_`).test(action.type), false),
      doLoading);
}