import './css/Card.css';

import React from 'react';

function getColor(props) {
    let color;

    if(props.red){
        color = "Red";
    }else if(props.green){ 
        color = "Green";
    }else if(props.blue){
        color = "Blue";
    }else if(props.purple){
        color = "Purple";
    }else{
        color="";
    }

    return color;
}

export default (props) => {

    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}