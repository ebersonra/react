import React from 'react';

import { connect } from 'react-redux';

import Card from './Card';

function Sortition(props) {

    const { minimum, maximum } = props.numbers;

    return (
        <Card title="Sortition a number" purple>
            <div>
                <span>
                    <span>Result.: </span>
                    <strong>{getRandomNumber(minimum, maximum)}</strong>
                </span>
            </div>
        </Card>
    )
}

function getRandomNumber(minimum, maximum) {
    return parseInt(Math.random() * (maximum - minimum) + minimum);
}

function mapStateToProps(state) {
    return {
        numbers: state.numbers
    }
}

export default connect(mapStateToProps)(Sortition)