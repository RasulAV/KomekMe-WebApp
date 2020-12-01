import React, { useEffect } from 'react';
import {
    MDBBtnGroup,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownMenu
} from "mdbreact";

import classes from "./OsSwitcher.module.css";

const OsSwitcher = React.memo(props => {

    useEffect(() => {
        //console.log('Render: OS Switcher');
    });

    const forceSetOs = true;

    return (
        <MDBBtnGroup size="sm" className="ml-2" >
            <MDBDropdown>
                <MDBDropdownToggle caret color="none" className={classes.toggler}>
                    <span className="mr-1">Switch OS</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem active={props.currentOs === 'windows' ? true : false} onClick={() => props.setOs('windows', forceSetOs)}>Windows</MDBDropdownItem>
                    <MDBDropdownItem active={props.currentOs === 'macos' ? true : false} onClick={() => props.setOs('macos', forceSetOs)}>MacOS</MDBDropdownItem>
                    <MDBDropdownItem active={props.currentOs === 'ios' ? true : false} onClick={() => props.setOs('ios', forceSetOs)}>iOS</MDBDropdownItem>
                    <MDBDropdownItem active={props.currentOs === 'android' ? true : false} onClick={() => props.setOs('android', forceSetOs)}>Android</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        </MDBBtnGroup>
    )
})

export default OsSwitcher;