import types from './actionTypes';


export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const setPhotos = (photos) => ({
    type: types.SET_PHOTOS,
    payload: photos,
});

export const onSetPhotos = (payload) => ({
    type: types.ON_SET_PHOTOS,
    payload
});

export const setPhotoDetails = (photo) => ({
    type: types.SET_PHOTO_Detail,
    payload: photo,
});

export const onSetPhotoDetails = (payload) => ({
    type: types.ON_SET_PHOTO_Details,
    payload
});

export const photosFailure = (error) => ({
    type: types.PHOTOS_IN_FAILURE,
    payload: error,
  });

  export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    payload: category,
});

