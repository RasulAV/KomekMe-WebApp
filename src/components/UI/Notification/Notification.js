import React from "react";
import { MDBNotification } from "mdbreact";

const Notification = (props) => {
    return (
        <MDBNotification
            show
            fade
            iconClassName={props.icon}
            title={props.title}
            message={props.message}
            autohide={5000}
            style={{
                position: "fixed",
                top: "6rem",
                right: "1rem",
                zIndex: 9999
            }}
        />
    );
}

export default Notification;