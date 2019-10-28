import React, { Component } from 'react'
import { connect } from 'react-redux'

class Conversion extends Component {

    render() {
        if(this.props.conversion.hasOwnProperty("amountToExchange")){
            const exchangeQuery = this.props.conversion
            let atRate = 0
            for (let [key,value] of Object.entries(this.props.conversion.rates)) {
                atRate = value
                
              }
            const exchange = () => {
              return Math.round((exchangeQuery.amountToExchange * atRate) * 100) / 100

             
            }
        return (
            <div >
                
                <h1 className="pt-4 pb-4">{exchange()} 
                <small className="lead">
                {exchangeQuery.exchangeTo}
                </small>
                </h1>
         </div>
        )
        } else{
           return <p className="pt-4 pb-4">Curreny Converter</p>
        }
    }
}

const mapStateToProps = (state) => {
	return {
        rates: state.rates,
        conversion: state.conversion
	}
}

export default connect(mapStateToProps)(Conversion)