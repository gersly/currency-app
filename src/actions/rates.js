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
				dispatch({
					type: SET_RATES,
					payload: response.body
				})
			})
			.catch(error => {
				dispatch({
					type: SET_ERROR,
					payload: error.response
				})	
			})
	}
}

// Conversion
export const SET_CONVERSION = 'SET_CONVERSION';
export const getConversion = ({base, symbols, amount}) => {
	return (dispatch) => {
		request
			.get(`${baseUrl}`)
			.query({base, symbols})
			.then(response => {
				const amountToExchange = parseInt(amount)
				const exchangeTo = symbols
				const newResponse = {...response.body, amountToExchange, exchangeTo}
				dispatch({
					type: SET_CONVERSION,
					payload: newResponse
				})
			})
			.catch(error => {
				dispatch({
					type: SET_ERROR,
					payload: error.response
				})	
			})
	}
}