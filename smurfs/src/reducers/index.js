import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR } from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: null
}

export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                smurfs: action.payload
            }
        case FETCH_SMURFS_ERROR:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};