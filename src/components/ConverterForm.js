import React, { Component } from 'react'
import Conversion from './Conversion';

export default class ConverterForm extends Component {
    render() {
        const { onChange, onSubmit} = this.props;
        const {amount, base, symbols } = this.props.values;  
        
        if(this.props.rates.hasOwnProperty("base")){
            const countries =  Object.keys(this.props.rates.rates)
           return (
            <div className="App-header">

             <Conversion />
            <form onSubmit={onSubmit}>
            <div className="row">
            <div className="col">
            <label>Amount</label>
            <input 
            type="number" 
            className="form-control"
            placeholder="Amount"
            name='amount'
            value={amount}
            onChange={onChange}
            />
             </div>
           
            <div className="col">
            <label>From</label>
            <select
            onChange={onChange}
            value = {base}
            name='base'
            className="custom-select mr-sm-2" 
            >
            <option key="EUR" value="EUR">EUR</option>
            {countries.map(country => 
                <option key={country} value={country}>{country}</option>
            )}
            </select>
            </div>
            <div className="col">
            <label>To</label>
            <select 
            onChange={onChange}
            value = {symbols}
            name='symbols'
            className="custom-select mr-sm-2" 
            >
            <option key="EUR" value="EUR">EUR</option>
            {countries.map(country => 
                <option key={country} value={country}>{country}</option>
            )}
            </select>
            </div>
           
            </div>
            <div className="row">
            <div className="col">
            <button 
            className="btn btn-success mt-4">
            Exchange
            </button>
            </div>
            </div>
            </form>
            
             
            
            
           
        </div>
           )
        }
        return (
            <React.Fragment>
                <h4>Error loading data from API...</h4>
                <p>Please check https://ratesapi.io/ for more information</p>
            </React.Fragment>
            
        )
    }
}
