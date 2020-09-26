import React from 'react';
import classes from './QPLogo.module.css';

const logo = (props) => {

    let logoStyles = { height: props.height };

    if (props.logoStyle) {
        logoStyles = {
            height: props.height,
            ...props.logoStyle
        };
    };

    return (
        <div className={classes.Logo} style={logoStyles} title={props.title}>
            <img src={props.logo} alt={props.altText} />
        </div>
    )
};

export default logo;