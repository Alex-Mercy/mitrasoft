import types from '../actions/actionTypes';

const initialState = {
    photos: [],
    isLoaded: true,
    error: null,
    category: 'beach',
    photoDetails: '',
};

const galeryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };
        case types.SET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                isLoaded: true,
            };
        case types.SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
            };
        case types.SET_PHOTO_Detail:
            return {
                ...state,
                photoDetails: action.payload,
                isLoaded: true,
            };

        default:
            return state;
    }
}


export default galeryReducer;