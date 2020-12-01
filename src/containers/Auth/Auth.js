import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBBox,
    MDBModalFooter
} from 'mdbreact';

import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.css';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    label: 'E-mail Address',
                    icon: 'envelope'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                    isEqualto: 'emailConfirm'
                },
                valid: false,
                touched: false,
                forSignin: true
            },

            emailConfirm: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    label: 'Confirm E-mail',
                    icon: 'exclamation-triangle'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                    isEqualto: 'email'
                },
                valid: false,
                touched: false
            },

            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    label: 'Password',
                    icon: 'lock'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                forSignin: true
            }
        },
       //isSignup: false,
        buttonDisabled: true
    }

    componentDidMount() {
        
        if (this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }

        // if (this.props.forcedSignUp) {
        //     this.setState(() => {
        //         return {
        //             isSignup: true
        //         };
        //     });
        // }
    }

    updateButtonVisibility(controls) {
        let isEnabled = true;
        if (this.props.isSignUp) {
            for (let key in controls) {
                isEnabled = controls[key].valid && isEnabled;
            };
        } else {
            for (let key in controls) {
                if (controls[key].forSignin) {
                    isEnabled = controls[key].valid && isEnabled;
                }
            };
        }
        this.setState({ buttonDisabled: !isEnabled });
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });

        const isEquelTo = this.state.controls[controlName].validation.isEqualto;
        if (isEquelTo && this.props.isSignUp) {
            updatedControls[controlName].valid = checkValidity(
                event.target.value,
                this.state.controls[controlName].validation,
                this.state.controls[isEquelTo].value);
        };

        this.updateButtonVisibility(updatedControls);

        this.setState({ controls: updatedControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.props.isSignUp);
    }

    switchAuthModeHandler = () => {
        let updatedControls = this.state.controls;

        for (let key in updatedControls) {
            updatedControls[key].value = '';
            updatedControls[key].valid = false;
            updatedControls[key].touched = false;
        }

        this.setState(() => {
            return {
                controls: updatedControls,
                //isSignup: !this.props.isSignUp,
                buttonDisabled: true
            };
        });

        this.props.onSetSignUpState(!this.props.isSignUp)
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = null;
        let formElementConstructor = (formElement) => (<Input
            key={formElement.id}

            id={formElement.id}
            value={formElement.config.value}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}

            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}

            changed={(event) => this.inputChangedHandler(event, formElement.id)}
        />)

        form = formElementsArray.map(formElement => {
            return this.props.isSignUp ? formElementConstructor(formElement) :
                formElement.config.forSignin ? formElementConstructor(formElement) : null;
        });

        if (this.props.loading) {
            form = <MDBBox display="flex" justifyContent="center" >
                        <Spinner />
                    </MDBBox>
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p style={{ color: "red" }}>{this.props.error.message.replace(/_/g, " ")}</p>
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <MDBContainer>
                {authRedirect}
                <MDBRow>
                    <MDBCol>
                        <MDBBox display="flex" justifyContent="center" >
                            <MDBCard style={{ width: "25rem", marginTop: "3rem" }}>
                                <MDBCardBody>
                                    <MDBBox display="flex" justifyContent="center" >
                                        {errorMessage}
                                    </MDBBox>
                                    <form
                                        onSubmit={this.submitHandler}
                                        noValidate>
                                        <p className="h4 text-center py-4">{this.props.isSignUp ? 'Sign Up' : 'Sign In'}</p>
                                        <div className="grey-text">
                                            {form}
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <Button
                                                type="submit"
                                                isDisabled={this.state.buttonDisabled}
                                            > {this.props.isSignUp ? 'Register' : 'Log In'} </Button>
                                        </div>
                                    </form>

                                    <MDBModalFooter mt="4">
                                        <div className="font-weight-light">
                                            <p>
                                                {this.props.isSignUp ? 'Already a member?' : 'Not a member?'}
                                                <button className={classes.Link} onClick={this.switchAuthModeHandler}>
                                                    {this.props.isSignUp ? 'Sign In' : 'Sign Up'}
                                                </button>
                                            </p>
                                        </div>
                                    </MDBModalFooter>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBBox>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        isSignUp: state.auth.isSignUp
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
        onSetSignUpState: (isSignUp) => dispatch(actions.setSignUpState(isSignUp))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);