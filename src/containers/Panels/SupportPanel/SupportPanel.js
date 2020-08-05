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

import classes from './SupportPanel.module.css';

import qspLogo from '../../../assets/images/logo_qsp.svg';
import Logo from '../../../components/Logos/QPLogo/QPLogo';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Modal from '../../../components/UI/Modal/Modal';
import * as actions from '../../../store/actions/index';

class QuickSupportPanel extends Component {
    state = {
        showModal: false
    }

    componentDidMount() {
        this.props.onInitQuickSupportPanel('support');
    }

    modalToogleHandler = () => () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {

        let appsOutput = this.props.error ? <p>Support Applications can't be loaded!</p> : <Spinner />;

        if (this.props.supportApps) {
            const apps = [];
            for (let key in this.props.supportApps) {
                apps.push({
                    ...this.props.supportApps[key]
                });
            };

            appsOutput = apps.map((app, index) => {
                //if (index !== 0 && index % 2 === 0) console.log(index);
                return (
                    <MDBListGroupItem key={app.id} style={{ display: "inline" }}>
                        <a className="text-muted" href={app.link} target="_blank" rel="noopener noreferrer" title={app.title}>
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

        return (
            <MDBCard className="mx-2 mt-4" style={{width: "18rem"}}>
                <MDBCardBody >
                    <Modal
                        toogle={this.modalToogleHandler()}
                        isopen={this.state.showModal}
                        title="Quick Support Panel"
                        body="Application for Emergency help, like portable antiviruses and quick disk cleanup."
                    />
                    <MDBCardTitle>
                        <MDBIcon
                            className="float-right grey-text"
                            far icon="question-circle"
                            onClick={this.modalToogleHandler()}
                            style={{ cursor: "pointer" }}
                        />
                        <Logo height={'35px'} logo={qspLogo} title="Security and Restore"/>
                    </MDBCardTitle>

                    <MDBBox display="flex" justifyContent="center">
                        {appsOutput}
                    </MDBBox>

                </MDBCardBody>
            </MDBCard>
        )
    }
}

const mapStateToProps = state => {
    return {
        supportApps: state.quickPanels.supportApps,
        error: state.quickPanels.supportAppsError
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitQuickSupportPanel: (panelType) => dispatch(actions.initQuickPanel(panelType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickSupportPanel)
