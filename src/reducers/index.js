import { combineReducers } from 'redux'
import rates from './rates'
import conversion from './conversion'


export default combineReducers({
   rates,
   conversion
})