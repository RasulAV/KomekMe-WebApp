import React from 'react';
import classes from './QPLogo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}} title={props.title}>
        <img src={props.logo} alt={props.altText} />
    </div>
);

export default logo;