import types from '../actions/actionTypes';

const initialState = {
    photos: [],
    isLoaded: false,
    error: null,
};

const galeryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
            };
        
        default:
            return state;
    }
}


export default galeryReducer;