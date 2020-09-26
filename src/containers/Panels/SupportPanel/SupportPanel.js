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

import classes from './SupportPanel.module.css';

import qspLogo from '../../../assets/images/logo_qsp.svg';
import qaStandartLogo from '../../../assets/images/logo_qP_standart.svg';


import Logo from '../../../components/Logos/QPLogo/QPLogo';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Modal from '../../../components/UI/Modal/Modal';
import * as actions from '../../../store/actions/index';

class QuickSupportPanel extends Component {
    state = {
        showModal: false
    }

    componentDidMount() {
        this.props.onInitQuickSupportPanel('support', this.props.deviceOs);
        //console.log('Render: support Panel');
    }

    componentDidUpdate(prevProps) {
        if (this.props.deviceOs !== prevProps.deviceOs) {
            //console.log('OS changed!')
            this.props.onInitQuickSupportPanel('support', this.props.deviceOs);
        }
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
                title="Quick Support Panel"
                body="Application for Emergency help, like 
                portable antiviruses and quick disk cleanup."
            />
        );
        const filterStatus = this.props.filtered ? <MDBBadge tag="a" color="primary">Filter is Active</MDBBadge> : null;
        let appsOutput = this.props.error ? <p>Support Applications can't be loaded!</p> : <Spinner />;

        if (this.props.supportApps) {
            const apps = [];

            for (let key in this.props.supportApps) {
                apps.push({
                    ...this.props.supportApps[key]
                });
            };

            if (Object.keys(this.props.supportApps).length === 0) {
                appsOutput = <p>Application not found</p>
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
                appsOutput = (<MDBListGroup>{appsOutput}</MDBListGroup>);
            }
        }

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
                        <Logo height={'35px'} logo={qspLogo} title="Security and Restore" />

                    </MDBCardTitle>

                    <MDBBox display="flex" justifyContent="center">
                        {appsOutput}
                    </MDBBox>
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
        supportApps: state.quickPanels.supportApps,
        error: state.quickPanels.supportAppsError,
        filtered: state.quickPanels.filtered
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitQuickSupportPanel: (panelType, deviceOs) => dispatch(actions.initQuickPanel(panelType, deviceOs))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickSupportPanel)
