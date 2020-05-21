import React, { Component } from 'react';

import DisplayMega from './DisplayMega';
import ButtonMega from './ButtonMega';
import FormMega from './FormMega';

class MegaNumber extends Component {

    state = {

        quantitySequence: this.props.quantitySequence || 6,
        array: [],
        numberMin: this.props.numberMin || 1,
        numberMax: this.props.numberMax || 69,
    }

    setGeneraterArray = () => {

        const array = new Array(this.state.quantitySequence);

        for (let index = 0; index < this.state.quantitySequence; index++) {

            this.getSequenceNumber(array, index);
        }

        return array;
    };

    getSequenceNumber = (array, index) => {

        const resultValue = parseInt(Math.random() * (this.state.numberMax - this.state.numberMin) + this.state.numberMin);
        
        let includes = array.includes(resultValue);    
        
        if(!includes){
            array[index] = resultValue;
        } else {
            this.getSequenceNumber(array, index);
        }
    }

    getGenerateSequenceNumber = () => {

        this.setArray(this.setGeneraterArray());
    };

    setArray = (newArray) => {
        
        this.setState({
            array: newArray,
        });
    };

    setQuantitySequence = (newQuantitySequence) => {
        this.setState({
            quantitySequence: newQuantitySequence,
        });
    };

    setNumberMin = (newNumberMin) => {
        this.setState({
            numberMin: newNumberMin,
        });
    };

    setNumberMax = (newNumberMax) => {
        this.setState({
            numberMax: newNumberMax,
        });
    };

    render() {
        return (
            <div>
                <h2>Number Mega</h2>
                <DisplayMega array={this.state.array} quantitySequence={this.state.quantitySequence}/>
                <FormMega quantitySequence={this.state.quantitySequence} 
                    setQuantitySequence={this.setQuantitySequence} 
                    numberMin={this.state.numberMin} numberMax={this.state.numberMax}
                    setNumberMin={this.setNumberMin} setNumberMax={this.setNumberMax}/>
                <ButtonMega setGeneraterArray={this.getGenerateSequenceNumber}/>

            </div>
        );
    };
}

export default MegaNumber