import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';

class Layout extends Component {
    state = {
        topDrawerIsOpen: false
    };

    topDrawerToggleHandler = () => {
        this.setState({ topDrawerIsOpen: !this.state.topDrawerIsOpen });
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    isAuth={this.props.isAuthenticated}
                    toggleCollapse={this.topDrawerToggleHandler}
                    isOpen={this.state.topDrawerIsOpen} />
                {this.props.children}
                {/* <Footer /> */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);