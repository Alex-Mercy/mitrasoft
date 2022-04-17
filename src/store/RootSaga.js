import { all } from 'redux-saga/effects';

import { galerySagas } from './actions/galerySaga';



export default function* rootSaga() {
  yield all([
    galerySagas(),
  ]);
}