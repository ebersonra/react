import './DisplayMega.css';

import React from 'react';

export default (props) => {

    const arraySecret = new Array(props.quantitySequence);

    for (let index = 0; index < arraySecret.length; index++) {
        arraySecret[index] = '?';
    }

    const secrets = arraySecret.map((secret,i) => {

        return (
            <h2 key={i} className={i % 2 === 0 ? 'Pair' : 'Odd'}>
                {secret}
            </h2>
        );
    })

    const numbers = props.array.map((number,i) => {

        return (
            <h2 key={i} className={i % 2 === 0 ? 'Pair' : 'Odd'}>
                {number}
            </h2>
        );
    })

     
    return (

        <div className="DisplayMega">
            {props.array.length === 0 ? secrets : numbers }
        </div>
    )
}