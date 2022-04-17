import { all, call, put, takeLatest } from 'redux-saga/effects';

import { setPhotos,  photosFailure } from './galeryAC';
import { getPhotos, } from '../api';
import types from './actionTypes';


export function* setPhotosSaga() {
  try {
    const response = yield call(getPhotos);
    yield put(setPhotos(response.data))
  } catch (error) {
    yield put(photosFailure(error));
  }
}

export function* onsetPhotos() {
  yield takeLatest(types.ON_SET_PHOTOS, setPhotosSaga);
}


export function* galerySagas() {
  yield all([
    call(onsetPhotos),
  ]);
}