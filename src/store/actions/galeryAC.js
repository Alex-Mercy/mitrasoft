import types from './actionTypes';


export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const setPhotos = (photos) => ({
    type: types.SET_PHOTOS,
    payload: photos,
});

export const onSetPhotos = () => ({
    type: types.ON_SET_PHOTOS,
});

export const photosFailure = (error) => ({
    type: types.PHOTOS_IN_FAILURE,
    payload: error,
  });

