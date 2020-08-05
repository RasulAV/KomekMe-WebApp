import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBox,
    MDBIcon
} from "mdbreact";
import ReactFilestack from 'filestack-react';
import copy from "copy-to-clipboard";

import classes from './SharePanel.module.css';

import qshpLogo from '../../../assets/images/logo_qshp.svg';
import Logo from '../../../components/Logos/QPLogo/QPLogo';
import Modal from '../../../components/UI/Modal/Modal';
import Button from '../../../components/UI/Button/Button';
import Notification from '../../../components/UI/Notification/Notification';
//import * as actions from '../../../store/actions/index';

class quickPanels extends Component {

    state = {
        showModal: false,
        downloadLink: "dump",
        buttonVisible: false,
        showNotification: false
    }

    componentDidMount() {
        //console.log('quickShare Panel rendered');
    }

    modalToogleHandler = () => () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    fileDownloadLinkShowHandler = (url) => {
        this.setState({
            downloadLink: url,
            buttonVisible: true
        });
    }

    copyLinkToClipboardHandler = () => {
        copy(this.state.downloadLink);
        
        this.setState({
            buttonVisible: false,
            showNotification: true
        });

        setTimeout(()=>{
            this.setState({
                showNotification: false
            })
        }, 5000)
    }

    render() {
        const modal = (
            <Modal
                toogle={this.modalToogleHandler()}
                isopen={this.state.showModal}
                title="Quick Share Panel"
                body="Drop here a file and copy link to share it with another person - It this simple!"
            />);
        
        let notification = null;

        if (this.state.showNotification) {
            notification = <Notification
                icon="text-success"
                title="Share Panel"
                message={`Link ${this.state.downloadLink} Copied to Clipboard`}
            />;
        }

        return (
            <MDBCard className="mx-2 mt-4" style={{ minWidth: "15rem" }}>
                {modal}
                {notification}
                <MDBCardBody >
                    <MDBCardTitle>
                        <MDBIcon
                            className="float-right grey-text"
                            far icon="question-circle"
                            onClick={this.modalToogleHandler()}
                            style={{ cursor: "pointer" }}
                        />
                        <Logo height={'35px'} logo={qshpLogo} title="Share" />
                    </MDBCardTitle>

                    <MDBBox style={{ height: "85%" }} display="flex" justifyContent="center">
                        <ReactFilestack
                            apikey={'AP5PsQ04RRWVqLNRV3FFQz'}
                            onSuccess={(res) => {
                                //console.log(res.filesUploaded[0]['url']);
                                this.fileDownloadLinkShowHandler(res.filesUploaded[0]['url']);
                            }}
                            componentDisplayMode={{
                                type: 'immediate'
                            }}
                            actionOptions={{
                                displayMode: "dropPane",
                                container: "embedded"
                            }}
                        />
                        <div id={'embedded'}></div>
                    </MDBBox>
                    <Button
                        className={classes.Button}
                        style={this.state.buttonVisible ? { display: "block" } : { display: "none" }}
                        clicked={this.copyLinkToClipboardHandler}
                    >
                        <MDBIcon
                            icon="download"
                            className="mr-1"
                        />
                            Copy Link to Clipboard
                    </Button>
                </MDBCardBody>
            </MDBCard>
        )
    }
}

const mapStateToProps = state => {
    return {
        // baseApps: state.quickPanels.baseApps,
        // error: state.quickPanels.baseAppsError,
        // mainLink: state.quickPanels.mainLink,
        // baseLink: state.quickPanels.baseLink,
        // buttonVisible: state.quickPanels.buttonVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onInitQuickAppPanel: (panelType) => dispatch(actions.initQuickPanel(panelType)),
        // oncheckboxChanged: (appId) => dispatch(actions.checkboxChanged(appId)),
        //onDownloadBtnClick: () => dispatch(actions.downloadButtonClicked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(quickPanels);