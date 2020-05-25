import './css/History.css';

import React from 'react';

export default (props) => {

    console.log(props.history);

    const historyDisplay = props.history.map((h, i) => {

        return (
            <p key={i}>
                {h}
            </p>
        );
    });

    return (
        <div className="history scroll">
            {historyDisplay}
        </div>
    );
}