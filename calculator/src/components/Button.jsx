import './css/Button.css';

import React from 'react';

export default (props) => {

    let classesCss = 'button ';
    classesCss += props.double ? 'double ' : '';
    classesCss += props.triple ? 'triple ' : '';
    classesCss += props.operation ? 'operation ' : '';
    classesCss += props.margin ? 'margin ' : '';
    classesCss += props.marginRight ? 'marginRight ' : '';
    classesCss += props.marginLeft ? 'marginLeft ' : '';

    let title = props.title ? props.title : '';

    return (
        <button className={classesCss} title={title}
            onClick={event => props.click && props.click(props.label)}>{props.label}</button>
    );
}
