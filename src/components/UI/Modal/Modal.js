import React from 'react';
import {
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter
} from "mdbreact";

import Button from '../Button/Button';

const Modal = props => {
    return (
        <MDBModal isOpen={props.isopen} toggle={props.toogle} centered>
            <MDBModalHeader toggle={props.toogle}> {props.title} </MDBModalHeader>
            
            <MDBModalBody>
                {props.body}
            </MDBModalBody>

            <MDBModalFooter>
                <Button clicked={props.toogle}>Close</Button>
            </MDBModalFooter>

        </MDBModal>
    )
};

export default Modal;