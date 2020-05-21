import './ButtonMega.css';

import React from 'react';

export default (props) => {

    return (
        <div className="ButtonMega">
            <button onClick={props.setGeneraterArray}> Generate Sequence Number</button>
        </div>
    );
}