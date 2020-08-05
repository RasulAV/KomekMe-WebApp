import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBox
} from "mdbreact";

import AppPanel from '../Panels/AppPanel/AppPanel';
import SupportPanel from '../Panels/SupportPanel/SupportPanel';
import SharePanel from '../Panels/SharePanel/SharePanel';
//import * as actions from '../../store/actions/index';

class MainRoom extends Component {
   
    componentDidMount() {
        //console.log('MainRoom rendered')
    }

    render() {
        return (
            <MDBContainer>
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

     }
}

export default connect(mapStateToProps)(MainRoom);