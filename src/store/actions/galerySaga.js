import { all, call, put, takeLatest, delay } from 'redux-saga/effects';

import {setLoaded, setPhotos, photosFailure } from './galeryAC';
import { getPhotos, } from '../api';
import types from './actionTypes';


export function* setPhotosSaga() {
  try {
    yield put(setLoaded(false));
    yield delay(500)
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