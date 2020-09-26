import React, { useEffect } from 'react';
import {
    MDBBtnGroup,
    MDBIcon,
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

    return (
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <MDBIcon icon="cogs" className="my-3" />
            <MDBBtnGroup size="sm" className="ml-2" >
                <MDBDropdown>
                    <MDBDropdownToggle caret color="none" className={classes.toggler}>
                        <span className="mr-1">Switch OS</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem active={props.currentOs==='windows' ? true : false} onClick={() => props.setOs('windows') }>Windows</MDBDropdownItem>
                        <MDBDropdownItem active={props.currentOs==='macos' ? true : false} onClick={() => props.setOs('macos')}>MacOS</MDBDropdownItem>
                        <MDBDropdownItem active={props.currentOs==='ios' ? true : false} onClick={() => props.setOs('ios')}>iOS</MDBDropdownItem>
                        <MDBDropdownItem active={props.currentOs==='android' ? true : false} onClick={() => props.setOs('android')}>Android</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBBtnGroup>
        </div >
    )
})

export default OsSwitcher;