import { SET_ERROR, SET_RATES } from '../actions/rates';

const initialState = []

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.payload };
        case SET_RATES:
            return action.payload ;
        default:
            return state;
    }
}