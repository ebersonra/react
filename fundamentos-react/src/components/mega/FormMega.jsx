import './FormMega.css';

import React from 'react';

export default (props) => {

    return (
        <div className="FormMega">
            <label htmlFor="">From </label>
            <input id="numberMin" type="number" value={ props.numberMin }
                onChange={event => props.setNumberMin(+event.target.value)}/>
            <label>To</label>
            <input id="numberMax" type="number" value={ props.numberMax }
                onChange={event => props.setNumberMax(+event.target.value)}/><br/>

            <label htmlFor="quantitySequence">Sequence number to generate </label>
            <input id="quantitySequence" type="number" value={props.quantitySequence}
                onChange={event => props.setQuantitySequence(+event.target.value)}/>
        </div>
    );
}