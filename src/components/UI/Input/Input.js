import React from 'react';
import { MDBInput } from 'mdbreact'

//import classes from './Input.module.css';

const input = (props) => {
    // let inputElement = null;
    let input = null;

    const inputClasses = []; //[classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('is-invalid');
    };
    if (props.inputClass) {
        inputClasses.push(props.inputClass);
    };

    if (props.elementConfig.type === 'checkbox') {
        input = (
            <div className={props.divClass}>
                <input
                    id={props.id}
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} />
                <label className={props.labelClass} htmlFor={props.id}>{props.label}</label>
            </div>
        )
    } else {
        switch (props.elementType) {
            case ('input'):
                input = <MDBInput
                    id={props.id}
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    required={props.required}
                    onChange={props.changed} />
                break;
            case ('textarea'):
                input = <MDBInput
                    type="textarea"
                    label="Example label"
                    outline />
                break;
            case ('select'):
                input = (
                    <select
                        className={inputClasses.join(' ')}
                        value={props.value}
                        onChange={props.changed}>
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                );
                break;
            default:
                input = "Please set 'elementType' property of the Input component";
                break;
        }
    }

    return input;
};

export default input;