import React, { useEffect } from 'react';
import {
    MDBFormInline,
    MDBIcon
} from "mdbreact";

const Search = React.memo(props => {

    useEffect(() => {
        console.log('Render: Search');
    });

    const searchHandler = (value) => {
        props.onSearch('app', props.currentOs, value);
        props.onSearch('support', props.currentOs, value);
        //console.log(props.currentOs);
    }

    return (
        <MDBFormInline className="md-form" style={{ marginBottom: "0" }}>
            <MDBIcon className={props.filterIsActive ? "blue-text" : ""} icon="search" />
            <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search All Apps"
                aria-label="Search"
                onChange={event => searchHandler(event.target.value)}
            />
        </MDBFormInline>
    )
})

export default Search;