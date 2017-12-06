import { fork } from 'redux-saga/effects';
import loaded from './loaded';
import loading from './loading';

export default function* rootSaga() {
  yield [
    fork(loaded),
    fork(loading),
  ];
}
