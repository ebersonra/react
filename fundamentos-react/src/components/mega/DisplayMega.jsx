import './DisplayMega.css';

import React from 'react';

export default (props) => {
 
    props.array.map((number) => {

        return ( 
            <h3>{ number } </h3>
        );
    });

    const arraySecret = new Array(props.quantitySequence);

    for (let index = 0; index < arraySecret.length; index++) {
        arraySecret[index] = '?';
    }

    return (

        <div className="DisplayMega">
            <h2>{props.array.length === 0 ? arraySecret.join(" - ") : props.array.join(" - ") }</h2>
        </div>
    )
}