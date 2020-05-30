import React from 'react';

import { connect } from 'react-redux';

import Card from './Card';

function Medium(props) {

    const { minimum, maximum } = props.numbers;

    return (
        <Card title="Medium number" green>
            <div>
                <span>
                    <span>Result.: </span>
                    <strong>{(minimum + maximum) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        numbers: state.numbers
    }
}

export default connect(mapStateToProps)(Medium)