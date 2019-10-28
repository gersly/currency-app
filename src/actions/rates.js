import request from 'superagent';
import {baseUrl} from '../constants';

export const SET_ERROR = 'SET_ERROR';

// Get RATES
export const SET_RATES = 'SET_RATES';
export const setRates = () => {
	return (dispatch) => {
		request
			.get(`${baseUrl}`)
			.then(response => {
                console.log("response.body in RATES", response.body)
				dispatch({
					type: SET_RATES,
					payload: response.body
				})
			})
			.catch(error => {
				console.log('ERROR in getting RATES ---> ', error)
				dispatch({
					type: SET_ERROR,
					payload: error.response
				})	
			})
	}
}