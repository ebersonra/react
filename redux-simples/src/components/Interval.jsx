import './css/Interval.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';
import { updateMinimumNumber, updateMaximumNumber } from '../store/actions/actionNumbers';

function Interval(props) {

    const { minimum, maximum } = props.numbers;

    return (
        <Card title="Number Range" red>
            <div className="Interval">
                <span>
                    <strong>Minimum</strong>
                    <input type="number" value={minimum} 
                        onChange={event => props.updateMinimumValue(+event.target.value)} />
                </span>
                <span>
                    <strong>Maximum</strong>
                    <input type="number" value={maximum} 
                        onChange={event => props.updateMaximumValue(+event.target.value)} />
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

function mapDispatchToProps(dispatch) {
    return {
        updateMinimumValue(newMinimum) {  
            const actionNumber = updateMinimumNumber(newMinimum);
            dispatch(actionNumber); 
        },
        updateMaximumValue(newMaximum) {
            const actionNumber = updateMaximumNumber(newMaximum);
            dispatch(actionNumber);
        }
    }
}

//function getCounterUpdate() {
//    return parseInt(counterUpdate === 0 ? counterUpdate = 1 : counterUpdate = 0);
//}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);