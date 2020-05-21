import React from 'react';

export default function(props) {

    const message = props.value > 75 ? <strong>Dog food is great quality!</strong> : 'Dog food is good.';
    
    return (
        <div>
            <h2>{ props.dogfood } { props.value}, then { message }</h2>
            <p>{ props.dogbreed }</p>
        </div>
    )
}