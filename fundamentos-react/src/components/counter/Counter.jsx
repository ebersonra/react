import './Counter.css';

import React, { Component } from 'react';

import Display from './Display';
import Buttons from './Buttons';
import StepForm from './StepForm';

class Counter extends Component {

    state = {
        number: this.props.initialNumber || 0,
        step: this.props.step || 5,
    };

    increment = () => {
        this.setState({
            number: this.state.number + this.state.step,
        });
    };

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.step,
        });
    };

    setStep = (newStep) => {
        this.setState({
            step: newStep,
        });
    };

    render() {

        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number} />
                <StepForm step={this.state.step} setStep={this.setStep}/>
                <Buttons setIncrement={this.increment} setDecrement={this.decrement} />
            </div>
        );
    };
}

export default Counter