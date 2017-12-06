import { call, fork, take, select, put, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import {FAILURE, FETCH, LOADED, LOADING, SUCCESS} from '../actions/contants';
import _ from 'lodash';
import {action} from '../actions/actionHelper';

function* doLoaded({ loaded }) {
  yield* loaded;
}

export default function* watchLoaded() {
  yield takeEvery(LOADED, doLoaded);
}