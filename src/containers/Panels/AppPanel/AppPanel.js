import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,

    MDBBox,

    MDBListGroup,
    MDBListGroupItem,

    MDBIcon
} from "mdbreact";


import classes from './AppPanel.module.css';

import qapLogo from '../../../assets/images/logo_qap.svg';
import Logo from '../../../components/Logos/QPLogo/QPLogo';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Modal from '../../../components/UI/Modal/Modal';
import * as actions from '../../../store/actions/index';

class QuickAppPanel extends Component {

    state = {
        showModal: false
    }

    componentDidMount() {
        this.props.onInitQuickAppPanel('app');
        //console.log('quickApp Panel rendered');
    }

    checkboxChangedHandler = (event, inputIdentifier) => {
        this.props.oncheckboxChanged(inputIdentifier);
    }

    modalToogleHandler = () => () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        const modal = (
            <Modal
                toogle={this.modalToogleHandler()}
                isopen={this.state.showModal}
                title="Quick App Panel"
                body="Gathering together one of the basic applications, installation proceeds automaticaly. Also you can choose several and install it simultaneously. Powered by Ninite"
            />);

        let appsOutput = this.props.error ? <p>Applications can't be loaded!</p> : <Spinner />;
        if (this.props.baseApps) {

            const apps = [];
            for (let key in this.props.baseApps) {
                apps.push({
                    ...this.props.baseApps[key]
                });
            };

            appsOutput = apps.map(app => {
                return (
                    <MDBListGroupItem key={app.id} >
                        <div className={classes.AppLabel}>
                            <Input
                                id={app.id}
                                elementType="input"
                                elementConfig={{ type: 'checkbox', checked: app.checked }}
                                divClass="custom-control custom-checkbox custom-control-inline"
                                inputClass="custom-control-input"
                                labelClass="custom-control-label text-muted"
                                label={app.title}
                                changed={(event) => this.checkboxChangedHandler(event, app.id)} />
                        </div>
                        <a className="ml-2" href={app.link} title={app.title}>
                            <img style={{ height: "2rem" }} src={app.imageLink} className="float-right img-fluid" alt={app.title + " image"} />
                        </a>
                    </MDBListGroupItem>
                )
            });

            appsOutput = (<MDBListGroup>{appsOutput}</MDBListGroup>);
        };
        return (
            <MDBCard className="mx-2 mt-4" style={{width: "18rem"}}>
                {modal}
                <MDBCardBody >
                    <MDBCardTitle>
                        <MDBIcon
                            className="float-right grey-text"
                            far icon="question-circle"
                            onClick={this.modalToogleHandler()}
                            style={{ cursor: "pointer" }}
                        />
                        <Logo height={'35px'} logo={qapLogo} title="Base Applications"/>
                    </MDBCardTitle>

                    <MDBBox display="flex" justifyContent="center">{appsOutput}</MDBBox>

                    <Button
                        className={classes.Button}
                        style={this.props.buttonVisible ? { display: "block" } : { display: "none" }}
                        href={this.props.mainLink}
                    >
                        <MDBIcon
                            icon="download"
                            className="mr-1"
                        />
                            Download
                    </Button>
                </MDBCardBody>
            </MDBCard>
        )
    }
}

const mapStateToProps = state => {
    return {
        baseApps: state.quickPanels.baseApps,
        error: state.quickPanels.baseAppsError,
        mainLink: state.quickPanels.mainLink,
        baseLink: state.quickPanels.baseLink,
        buttonVisible: state.quickPanels.buttonVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitQuickAppPanel: (panelType) => dispatch(actions.initQuickPanel(panelType)),
        oncheckboxChanged: (appId) => dispatch(actions.checkboxChanged(appId)),
        //onDownloadBtnClick: () => dispatch(actions.downloadButtonClicked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickAppPanel);