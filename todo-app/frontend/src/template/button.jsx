import React from 'react';

import If from '../template/If';

export default (props) => {

    return (
        <If test={!props.hide}>
            <button className={"btn btn-"+ props.style} onClick={props.onClick} title={props.title}>
                <i className={"fa fa-"+ props.icon}></i>
            </button>
        </If>
    )
}