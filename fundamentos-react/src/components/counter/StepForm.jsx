import React from 'react';

export default (props) => {

    return (
        <div>
            <label htmlFor="inputStep">Step.: </label>
            <input id="inputStep" type="number" value={props.step} 
                onChange={event => props.setStep(+event.target.value)} />
        </div>
    );
}