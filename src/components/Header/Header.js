import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import { withRouter } from 'react-router-dom';

import Logo from '../Logos/MainLogo/MainLogo';
import classes from "./Header.module.css";

const Header = (props) => {
  const activePage = props.location.pathname;

  let loginLogout = (
    <MDBNavItem title="Login" active={activePage === '/auth' ? true : false}>
      <MDBNavLink className={`${classes.navLink } mt-3 mt-md-2`} to="/auth">
        <MDBIcon icon="sign-in-alt"  />
      </MDBNavLink>
    </MDBNavItem>
  )

  if (props.isAuth) {
    loginLogout = (
      <MDBNavItem title="Logout">
        <MDBNavLink className={`${classes.navLink } mt-3 mt-md-2`} to="/logout">
          <MDBIcon icon="sign-out-alt"  />
        </MDBNavLink>
      </MDBNavItem>
    )
  }

  return (
    <MDBNavbar className={classes.navbar} dark expand="md">
      <MDBNavbarBrand>
        <Logo altText={'KomekMe Main Logo'} height={'60px'} />
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={props.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={props.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active={activePage === '/' ? true : false}>
            <MDBNavLink className={classes.navLink} to="/" exact>Home</MDBNavLink>
          </MDBNavItem>

          <MDBNavItem active={activePage === '/about' ? true : false}>
            <MDBNavLink className={classes.navLink} to="/about">About</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>

        <MDBNavbarNav right>
          {loginLogout}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar >
  );
}

export default withRouter(Header);