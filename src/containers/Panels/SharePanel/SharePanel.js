import React, { Component } from 'react';
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
import qaStandartLogo from '../../../assets/images/logo_qP_standart.svg';

import Logo from '../../../components/Logos/QPLogo/QPLogo';
import Modal from '../../../components/UI/Modal/Modal';
import Button from '../../../components/UI/Button/Button';
import Notification from '../../../components/UI/Notification/Notification';

class quickPanels extends Component {

    state = {
        showModal: false,
        downloadLink: "dump",
        downloadBtnShow: false,
        showNotification: false
    }

    componentDidMount() {
        ('Render: share Panel');
    }

    modalToogleHandler = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    fileDownloadLinkShowHandler = (url) => {
        this.setState({
            downloadLink: url,
            downloadBtnShow: true
        });
    }

    copyLinkToClipboardHandler = () => {
        copy(this.state.downloadLink);

        this.setState({
            downloadBtnShow: false,
            showNotification: true
        });

        setTimeout(() => {
            this.setState({
                showNotification: false
            })
        }, 5000)
    }

    render() {
        const modal = (
            <Modal
                toogle={this.modalToogleHandler}
                isopen={this.state.showModal}
                title="Quick Share Panel"
                body="Drop here a file and copy link to share it with another person - It this simple!"
            />);
        const copyLinkButton = (
            <Button
                className={classes.Button}
                style={this.state.downloadBtnShow ? { display: "block" } : { display: "none" }}
                clicked={this.copyLinkToClipboardHandler}
            >
                <MDBIcon
                    icon="link"
                    className="mr-1"
                />Copy Link
            </Button>
        )

        let notification = null;

        if (this.state.showNotification) {
            notification = <Notification
                icon="text-success"
                title="Share Panel"
                message={"Link Copied to Clipboard"}
            />;
        }

        return (
            <MDBCard >
                {modal}
                {notification}
                <MDBCardBody >
                    <MDBCardTitle>
                        <MDBIcon
                            className="float-right grey-text"
                            far icon="question-circle"
                            onClick={this.modalToogleHandler}
                            style={{ cursor: "pointer" }}
                        />
                        <Logo height={'35px'} logo={qshpLogo} title="Share Your Files" />
                        <hr />
                    </MDBCardTitle>

                    <MDBBox >
                        <ReactFilestack
                            apikey={'AP5PsQ04RRWVqLNRV3FFQz'}
                            onSuccess={(res) => {
                                this.fileDownloadLinkShowHandler(res.filesUploaded[0]['url']);
                            }}
                            customRender={({ onPick }) => (
                                <Button 
                                    className={`mb-2 ${classes.Button}`}
                                    clicked={onPick}>
                                    <MDBIcon
                                        icon="download"
                                        className="mr-1"
                                    />
                                    Open File Picker
                                </Button>
                            )}
                            actionOptions={{
                                displayMode: "dropPane",
                                container: "embedded"
                            }}
                        />
                        <div id={'embedded'}></div>
                    </MDBBox>

                    {copyLinkButton}
                    <hr />
                    <Logo
                        height={'15px'}
                        logo={qaStandartLogo}
                        logoStyle={{ width: "100%", textAlign: "center" }} />
                </MDBCardBody>
            </MDBCard>
        )
    }
}

export default quickPanels;