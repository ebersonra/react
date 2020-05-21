import React from 'react'

export default (props) => {

    return (
        <div> 
            <h3><strong>{ props.dogName }</strong> { props.dogBreed }<strong> { props.dogAge} </strong></h3>
        </div>
    );
};