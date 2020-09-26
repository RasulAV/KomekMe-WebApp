import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBContainer,
    MDBBox
} from 'mdbreact';

import classes from './AboutRoom.module.css';

class AboutRoom extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBBox display="flex" justifyContent="center">
                    <MDBCard style={{ width: "22rem", marginTop: "3rem" }} className="text-center">
                        <MDBCardBody>
                            <MDBCardTitle>KomekMe™- Web App</MDBCardTitle>
                            <MDBCardText>
                                It is a set of useful tools collected in compact panels by types and categories,
                                everything you need is at your fingertips.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className={classes.CardFooter} color="none">
                            <small>&copy;KomekMe Company. <br />Baku, 2020.</small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBBox>
            </MDBContainer>
        )
    }
}

export default AboutRoom;