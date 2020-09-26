import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBox
} from "mdbreact";

import Search from '../../components/Search/Search';
import OsSwitcher from '../../components/OsSwitcher/OsSwitcher';
import AppPanel from '../Panels/AppPanel/AppPanel';
import SupportPanel from '../Panels/SupportPanel/SupportPanel';
import SharePanel from '../Panels/SharePanel/SharePanel';
import * as actions from '../../store/actions/index';

class MainRoom extends Component {

    componentDidMount() {
        //console.log('MainRoom rendered')
    }

    render() {

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
                        {this.props.isAuthenticated ? <OsSwitcher currentOs={this.props.deviceOs} setOs={this.props.onSetDeviceOs} /> : null}
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol >
                        <MDBBox display="flex" justifyContent="center"><AppPanel /></MDBBox>
                    </MDBCol>
                    <MDBCol>
                        <MDBBox display="flex" justifyContent="center"><SupportPanel /></MDBBox>
                    </MDBCol>
                    <MDBCol >
                        <MDBBox display="flex" justifyContent="center"><SharePanel /></MDBBox>
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
        onSetDeviceOs: (deviceOS) => dispatch(actions.setDeviceOs(deviceOS))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRoom);