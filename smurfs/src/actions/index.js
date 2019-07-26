import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    const request = axios.get('');
    request.then(response => {
        console.log(response)
        dispatch({
            type: FETCH_SMURFS_SUCCESS,
            payload: response.data.results
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_SMURFS_ERROR,
            error: err
        })
    });
};