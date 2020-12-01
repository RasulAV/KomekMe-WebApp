import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBox,
   // MDBIcon
} from 'mdbreact';
import axios from '../../../axios-base';

import qapLogo from '../../../assets/images/logo_qcurrency.svg';
import Logo from '../../../components/Logos/QPLogo/QPLogo';

class CurrencyConverterPanel extends Component {

    state = {
        firstCurrency: 'AZN',
        secondCurrency: 'USD',
        currencyValue: 0,
        convertionValue: 1
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.firstCurrency !== prevState.firstCurrency || this.state.secondCurrency !== prevState.secondCurrency) this.queryCurrenciesValue();
    }

    componentDidMount() {
        this.queryCurrenciesValue();
    }

    queryCurrenciesValue = () => {
        let currentCurrencies = this.state.firstCurrency + '_' + this.state.secondCurrency;

        axios.get(`https://free.currconv.com/api/v7/convert?apiKey=ab506f8f509153c142f9&q=${currentCurrencies}`)
            .then(response => {
                let updatedCurrencyValue = response.data.results[currentCurrencies].val;
                this.setState({
                    currencyValue: updatedCurrencyValue
                })
            })
    }

    changeCurrencyHandler = (event) => {
        let selectedCurrency = (event.target.className.indexOf('first') > 0) ? 'first' : 'second';

        this.setState({
            [selectedCurrency + 'Currency']: event.target.value
        });
    };

    changeConvertionNumberHandler = () => {
        let newConvertionNumber = document.getElementById("convNumber").value;

        this.setState({
            convertionValue: newConvertionNumber
        })
    }

    render() {
        return (
            <MDBCard >
                <MDBCardBody>
                    <MDBCardTitle>
                        <Logo height={"35px"} logo={qapLogo} title="Currency Converter" />
                    </MDBCardTitle>
                    <MDBBox>
                        <div>
                            <input
                                value={this.state.convertionValue}
                                onChange={this.changeConvertionNumberHandler}
                                type="number"
                                className="form-control"
                                id="convNumber" />

                            <select className="browser-default custom-select mt-3 first" onChange={this.changeCurrencyHandler}>
                                <option value="AZN">₼ AZN (Azerbaijan Manat)</option>
                                <option value="USD">$ USD (US Dollar)</option>
                                <option value="RUB">₽ RUB (Russian Ruble)</option>
                            </select>

                            <select className="browser-default custom-select mt-3 second" onChange={this.changeCurrencyHandler}>
                                <option value="USD">$ USD (US Dollar)</option>
                                <option value="AZN">₼ AZN (Azerbaijan Manat)</option>
                                <option value="RUB">₽ RUB (Russian Ruble)</option>
                            </select>
                            <p className="text-center mt-3 bg-primary text-white p-2">{(this.state.currencyValue * this.state.convertionValue).toFixed(2)}</p>
                        </div>
                    </MDBBox>
                </MDBCardBody>
            </MDBCard>
        )
    }
}

export default CurrencyConverterPanel;