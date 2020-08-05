import React from "react";
import { MDBBtn } from "mdbreact";

import classes from './Button.module.css';

const Button = (props) => {
    const buttonClasses = [classes.Button];

    if (props.className) {
        buttonClasses.push(props.className);
    }

    return (
        <MDBBtn
            color="none"
            className={buttonClasses.join(' ')}
            style={props.style}
            href={props.href}
            type= {props.type}
            disabled={props.isDisabled}
            onClick={props.clicked}
        >
            {props.children}
        </MDBBtn>
    );
}

export default Button;