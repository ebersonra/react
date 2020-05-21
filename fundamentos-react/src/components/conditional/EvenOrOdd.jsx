import React from 'react';

export default (props) => {

    const resultValue = parseInt(Math.random() * (999999 - 1) + 1);
    
    const isPair = resultValue % 2 === 0;

    return (
        <div>
            { isPair ? <p>Number {resultValue} is pair</p> : <p>Number {resultValue} is odd</p>}
        </div>
    )
}