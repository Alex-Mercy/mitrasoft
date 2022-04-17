import types from './actionTypes';


export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const setPhotos = (photos) => ({
    type: types.SET_PHOTOS,
    payload: photos,
});

export const onSetPhotos = (category) => ({
    type: types.ON_SET_PHOTOS,
    payload: category,
});

export const photosFailure = (error) => ({
    type: types.PHOTOS_IN_FAILURE,
    payload: error,
  });

  export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    payload: category,
});

