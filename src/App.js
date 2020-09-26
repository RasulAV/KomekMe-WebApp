import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import currentDevice from "current-device";

import Layout from './hoc/Layout/Layout';
import MainRoom from './containers/MainRoom/MainRoom';
import AboutRoom from './containers/AboutRoom/AboutRoom';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

import * as actions from './store/actions/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.props.onSetDeviceOs(currentDevice.os);
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/about" exact component={AboutRoom} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={MainRoom} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/about" exact component={AboutRoom} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={MainRoom} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <Layout>
        {routes}
      </Layout>
    )
  };
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onSetDeviceOs: (deviceOS) => dispatch(actions.setDeviceOs(deviceOS))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);