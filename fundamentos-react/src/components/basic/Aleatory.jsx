import React from 'react'

const VALUE_MIN = "Minimum Value is ";
const VALUE_MAX = "Maximum Value is ";
const RESULT = "Result Number is ";

export default (props) => {

    const { valueMin, valueMax } = props;

    const resultValue = parseInt(Math.random() * (valueMax - valueMin) + valueMin);

    return (
        <div>
            <p>
                {VALUE_MIN} <strong>{valueMin}</strong>
            </p>
            <p>
                {VALUE_MAX} <strong>{valueMax}</strong>
            </p>

            <h3>{RESULT} <strong>{resultValue}</strong></h3>
        </div>
    );
};