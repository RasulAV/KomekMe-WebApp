import React from 'react';

import komekmeMainLogo from '../../../assets/images/logo_main.svg';
import classes from './MainLogo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={komekmeMainLogo} alt={props.altText} />
    </div>
);

export default logo;