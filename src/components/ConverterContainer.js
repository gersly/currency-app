import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setRates} from '../actions/rates'

class ConverterContainer extends Component {

    componentDidMount(){
        this.props.setRates()
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        rates: state.rates,
	}
}

export default connect(mapStateToProps, {setRates})(ConverterContainer)