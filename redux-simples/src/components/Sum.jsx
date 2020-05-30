import React from 'react';

import { connect } from 'react-redux';

import Card from './Card';

function Sum(props) {

    const { minimum, maximum } = props.numbers;

    return (
        <Card title="Sum of numbers" blue>
            <div>
                <span>
                    <span>Result.: </span>
                    <strong>{minimum + maximum}</strong>
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

export default connect(mapStateToProps)(Sum)