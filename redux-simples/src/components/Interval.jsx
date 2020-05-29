import './css/Interval.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';
import { updateMinimumNumber } from '../store/actions/actionNumbers';

function Interval(props) {

    const { minimum, maximum } = props.numbers;
    props.updateMinimumValue(102000);

    return (
        <Card title="Number Range" red>
            <div className="Interval">
                <span>
                    <strong>Minimum</strong>
                    <input type="number" value={minimum} readOnly />
                </span>
                <span>
                    <strong>Maximum</strong>
                    <input type="number" value={maximum} readOnly />
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

function mapActionCreatorsToProps(dispatch) {
    return {
        updateMinimumValue(newMinimum) {
            // Action creator -> action
            
            const actionNumber = updateMinimumNumber(newMinimum);
            dispatch(actionNumber); 
        }
    }
}

//function multiAction(action) {
//    return (dispatch) => action.map(a => dispatch(a));
//}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Interval);