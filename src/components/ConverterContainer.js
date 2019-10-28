import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConverterForm from './ConverterForm'
import {getConversion, setRates} from '../actions/rates'

class ConverterContainer extends Component {
    state = {
        amount: '' || 1,
        base: '' || 'EUR',
        symbols: '' || 'USD'
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.getConversion(this.state)
        // this.setState({
        //     amount: '' || 1,
        //     base: '' || 'EUR',
        //     symbols: '' || 'USD'
        //  })        
    }
    
    onChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    componentDidMount(){
        this.props.setRates()
    }

    
    render() {
        return (
            <React.Fragment>
                <ConverterForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                rates={this.props.rates}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        rates: state.rates,
	}
}

export default connect(mapStateToProps, {getConversion, setRates})(ConverterContainer)