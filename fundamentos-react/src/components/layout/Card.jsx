import './Card.css';

import React from 'react';

export default (props) => {
    
    const styleCard = {

        backgroundColor: props.color || '#DC2742',
        borderColor: props.color || '#DC2742'
    }
    return (
        <div className="Card" style={styleCard}>
            <div className="Title"> 
                { props.title } 
            </div>
            <div className="Content">
                { props.children}
            </div>
        </div>
    );
};