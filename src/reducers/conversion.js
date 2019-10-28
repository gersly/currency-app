import { SET_ERROR, SET_CONVERSION } from '../actions/rates';

const initialState = []

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.payload };
        case SET_CONVERSION:
            return action.payload ;
        default:
            return state;
    }
}