import { all, call, put, takeLatest, delay } from 'redux-saga/effects';

import {setLoaded, setPhotos, photosFailure, setPhotoDetails } from './galeryAC';
import { getPhotos, getPhotoDetails } from '../api';
import types from './actionTypes';


export function* setPhotosSaga({ payload: category }) {

  try {
    yield put(setLoaded(false));
    yield delay(500)
    const response = yield getPhotos(category);
    yield put(setPhotos(response.data))
  } catch (error) {
    yield put(photosFailure(error));
  }
}

export function* setPhotoDetailsSaga({ payload: id }) {

  try {
    yield put(setLoaded(false));
    yield delay(500)
    const response = yield getPhotoDetails(id);
    yield put(setPhotoDetails(response.data))
  } catch (error) {
    yield put(photosFailure(error));
  }
}


export function* onsetPhotos() {
  yield takeLatest(types.ON_SET_PHOTOS, setPhotosSaga);
}

export function* onsetPhotoDetails() {
  yield takeLatest(types.ON_SET_PHOTO_Details, setPhotoDetailsSaga);
}


export function* galerySagas() {
  yield all([
    call(onsetPhotos),
    call(onsetPhotoDetails),
  ]);
}