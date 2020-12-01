import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBox,
    MDBIcon,
    MDBNavLink
} from "mdbreact";

import Button from '../../components/UI/Button/Button';
import Search from '../../components/Search/Search';
import OsSwitcher from '../../components/OsSwitcher/OsSwitcher';

import AppPanel from '../Panels/AppPanel/AppPanel';
import SupportPanel from '../Panels/SupportPanel/SupportPanel';
import SharePanel from '../Panels/SharePanel/SharePanel';
import CurrencyConverterPanel from '../Panels/CurrencyConverterPanel/CurrencyConverterPanel';

import * as actions from '../../store/actions/index';

class MainRoom extends Component {
    render() {
        const settingsPanel = (
            <React.Fragment>
                <MDBIcon icon="cogs" className="my-1" />
                <OsSwitcher currentOs={this.props.deviceOs} setOs={this.props.onSetDeviceOs} />
            </React.Fragment>
        );

        const registerSign = (
            <MDBNavLink style={{ display: "inline" }} to="/auth">
                <Button clicked={this.props.onForceSignUp}>
                    <MDBIcon
                        icon="unlock-alt"
                        className="mr-1"
                    />
                    Unleash Power
                </Button>
            </MDBNavLink >
        )

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="8">
                        <Search
                            onSearch={this.props.onSearchApp}
                            currentOs={this.props.deviceOs}
                            filterIsActive={this.props.filtered} />
                    </MDBCol >
                    <MDBCol md="4" className="mt-3">
                        {this.props.isAuthenticated ? settingsPanel : registerSign}
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-between">
                        <MDBBox style={{ width: "18rem", padding: "0.5rem" }}> <AppPanel /> </MDBBox>
                        <MDBBox style={{ width: "18rem", padding: "0.5rem" }}> <SupportPanel /> </MDBBox>
                        <MDBBox style={{ width: "18rem", padding: "0.5rem" }}> <SharePanel /> </MDBBox>
                    </MDBCol>
                    <MDBCol className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-between">
                        <MDBBox style={{ width: "18rem", padding: "0.5rem" }}> <CurrencyConverterPanel /></MDBBox>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        deviceOs: state.settings.deviceOs,
        filtered: state.quickPanels.filtered,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchApp: (panelType, deviceOS, enteredFilter) => dispatch(actions.initQuickPanel(panelType, deviceOS, enteredFilter)),
        onSetDeviceOs: (deviceOS, forceSetOs) => dispatch(actions.setDeviceOs(deviceOS, forceSetOs)),
        onForceSignUp: () => dispatch(actions.setSignUpState(true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRoom);