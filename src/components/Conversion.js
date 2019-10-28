import React, { Component } from 'react'
import { connect } from 'react-redux'

class Conversion extends Component {

    render() {
        if(this.props.conversion.hasOwnProperty("amountToExchange")){
            console.log("conversion", this.props.conversion.rates)
            const exchangeQuery = this.props.conversion
            let atRate = 0
            for (let [key,value] of Object.entries(this.props.conversion.rates)) {
                console.log(value);
                atRate = value
                
              }
            console.log("at thisr ate", atRate)
            const exchange = () => {
              return Math.round((exchangeQuery.amountToExchange * atRate) * 100) / 100

             
            }
        return (
            <div >
                <h6>Results</h6>
                
                <h1>{exchange()} <small className="lead">{exchangeQuery.exchangeTo}</small></h1>
                

            </div>
        )
        } else{
           return <h5 className="pt-4">Loading...</h5>
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