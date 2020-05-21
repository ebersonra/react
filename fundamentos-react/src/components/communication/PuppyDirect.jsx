import React from 'react';

export default (props) => {

    return (
        <div>
            <span>{props.dogName} </span>            
            <span>{props.dogBreed} </span>
            <span>{props.dogAge >= 12 ? 'All right, your dog is an adult!' : 'Own... your dor is a baby.'}</span>
        </div>
    );
};