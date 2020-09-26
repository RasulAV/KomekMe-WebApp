import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBox,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon,
    MDBBadge
} from "mdbreact";

import classes from './AppPanel.module.css';

import qapLogo from '../../../assets/images/logo_qap.svg';
import qaStandartLogo from '../../../assets/images/logo_qP_standart.svg';

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
        this.props.onInitQuickAppPanel('app', this.props.deviceOs);
        //console.log('Render: baseApp Panel');
    }

    componentDidUpdate(prevProps) {
        if (this.props.deviceOs !== prevProps.deviceOs) {
            //console.log('OS changed!')
            this.props.onInitQuickAppPanel('app', this.props.deviceOs);
        }
    }

    checkboxChangedHandler = (inputIdentifier) => {
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
                body="Gathering together one of the basic applications, installation proceeds automaticaly. 
                    Also you can choose several and install it simultaneously. Powered by Ninite"
            />);
        const filterStatus = this.props.filtered ? <MDBBadge tag="a" color="primary">Filter is Active</MDBBadge> : null;
        let button = null;
        let appsOutput = this.props.error ? <p>Applications can't be loaded!</p> : <Spinner />;

        if (this.props.baseApps) {
            const apps = [];
            //console.log(this.props.baseApps);

            if (Object.keys(this.props.baseApps).length === 0) {
                appsOutput = <p>Application not found</p>
            } else {
                for (let key in this.props.baseApps) {
                    apps.push({
                        ...this.props.baseApps[key]
                    });
                };

                if (this.props.deviceOs === "windows") {
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
                                        changed={() => this.checkboxChangedHandler(app.id)} />
                                </div>
                                <a className="ml-2" href={app.link} title={app.title}>
                                    <img style={{ height: "2rem" }} src={app.imageLink} className="float-right img-fluid" alt={app.title + " image"} />
                                </a>
                            </MDBListGroupItem>
                        )
                    });

                    button = (
                        <Button
                            className={classes.Button}
                            style={this.props.buttonVisible ? { display: "block" } : { display: "none" }}
                            href={this.props.mainLink}
                        >
                            <MDBIcon
                                icon="download"
                                className="mr-1"
                            />Download
                        </Button>
                    )
                } else {
                    appsOutput = apps.map((app) => {
                        return (
                            <MDBListGroupItem key={app.id} style={{ display: "inline" }}>
                                <a className="text-muted"
                                    href={app.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={app.description !== "" ? app.title + "-" + app.description : app.title}>

                                    <div className={classes.AppLabel}>
                                        <span>{app.title}</span>
                                    </div>
                                    <img style={{ height: "2rem" }} src={app.imageLink} className="float-right img-fluid" alt={app.title + " image"} />
                                </a>
                            </MDBListGroupItem>
                        )
                    });
                };
                appsOutput = (<MDBListGroup>{appsOutput}</MDBListGroup>);
            }
        };

        return (
            <MDBCard className="mx-2 mt-4" style={{ width: "18rem" }}>
                {filterStatus}
                {modal}
                <MDBCardBody >
                    <MDBCardTitle>
                        <MDBIcon
                            className="float-right grey-text"
                            far icon="question-circle"
                            onClick={this.modalToogleHandler()}
                            style={{ cursor: "pointer" }}
                        />
                        <Logo height={"35px"} logo={qapLogo} title="Base Applications" />

                    </MDBCardTitle>

                    <MDBBox display="flex" justifyContent="center">
                        {appsOutput}
                    </MDBBox>

                    {button}
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

const mapStateToProps = state => {
    return {
        deviceOs: state.settings.deviceOs,
        baseApps: state.quickPanels.baseApps,
        error: state.quickPanels.baseAppsError,
        mainLink: state.quickPanels.mainLink,
        baseLink: state.quickPanels.baseLink,
        buttonVisible: state.quickPanels.buttonVisible,
        filtered: state.quickPanels.filtered
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitQuickAppPanel: (panelType, deviceOS) => dispatch(actions.initQuickPanel(panelType, deviceOS)),
        oncheckboxChanged: (appId) => dispatch(actions.checkboxChanged(appId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickAppPanel);