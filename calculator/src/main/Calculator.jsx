import './css/Calculator.css';

import React, { Component } from 'react';

import Button from '../components/Button';
import Display from '../components/Display';
import History from '../components/History';

const initialState = {

    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
    history: [0, "", 0, "", 0],
    historyDisplay: ["", "", "", "", "", ""],
    indexHist: 0
}

const SUM = "+";
const MULTIPLACATION = "*";
const SUBTRACTION = "-";
const DIVISION = "/";

const SUM_TITLE = "Adicionar [+]";
const MULTIPLACATION_TITLE = "Multiplicar [*]";
const SUBTRACTION_TITLE = "Subtrair [-]";
const DIVISION_TITLE = "Dividir [/]";
const EQUALS_TITLE = "Calcula o resultado";
const C_TITLE = "Limpar o visor"

class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props);

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
       // this.setState({ ...initialState });
        this.setState({
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0,
            history: [0, "", 0, "", 0]
        })
    }

    setOperation(operation){
        if(this.state.current === 0){
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {

            const viewResult = operation === "=";
            const currentOperation = this.state.operation;
            
            const values = [...this.state.values]
            const history = [...this.state.history];
            const historyDisplay = [...this.state.historyDisplay];

            let indexHist = [this.state.indexHist];

            history[1] = currentOperation !== "=" ? currentOperation : history[1];
            history[3] = "=";

            values[0] = this.applyOperation(values, currentOperation);
            history[4] = values[0];

            for (let index = indexHist; index < historyDisplay.length; index++) {

                //history[0] = primeiro numero informado
                //history[1] = operação informada (-, +, / ou *)
                //history[2] = segundo numero informado
                //history[3] = cliclou no igual para ver o resultado
                //history[4] = resultado da operação informada no history[1]
                //Ex: newHistory = 1+1 = 2
                const newHistory = history[0]+""+history[1]+""+history[2]+"       "+history[3]+"        "+history[4];

                if(viewResult && !historyDisplay.includes(newHistory)){

                    historyDisplay[index] = newHistory;
                }
                
                indexHist++;
                this.setState({ indexHist })
                break;   
            }

            this.setState({
                displayValue: values[0],
                operation: viewResult ? null : operation,
                current: viewResult ? 0 : 1,
                clearDisplay: !viewResult,
                values,
                history,
                historyDisplay
            });
        }
    }

    applyOperation(values, currentOperation){

        console.log("apply Operation "+values[0]+" "+currentOperation+" "+values[1]);

        if(currentOperation === DIVISION && values[1] === 0){
            values[0] = <span>A divisão por zero não é definida.</span>
            values[1] = 0;
            return values[0];
        }

        if(currentOperation === SUM){

            values[0] = values[0] + values[1];
        }else if(currentOperation === SUBTRACTION){

            values[0] = values[0] - values[1];
        }else if(currentOperation === MULTIPLACATION){

            values[0] = values[0] * values[1];
        }else if(currentOperation === DIVISION){
            values[0] = values[0] / values[1];
        }

        values[1] = 0;  
        return values[0];
    }

    addDigit(value){

        if(value === "." && this.state.displayValue.includes(".")){
            return;
        }

        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + value;

        this.setState({ displayValue, clearDisplay: false })

        if(value !== "."){
            const index = this.state.current;
            const newValue = parseFloat(displayValue);
            
            const values = [...this.state.values];
            values[index] = newValue;

            console.log("Values[,]: "+values);

            const history = [...this.state.history];

            if(index === 0){
                history[0] = values[index];
            }else{
                history[0] = values[index-1]
                history[2] = values[index];
            }

            this.setState({ values, history })
        }
    }

    render() {

        return (
            <div className="calculator">
                
                <History history={this.state.historyDisplay}/>
                <Display value={this.state.displayValue}/>
                <Button label="7" click={this.addDigit} margin marginLeft/>
                <Button label="8" click={this.addDigit} margin/>
                <Button label="9" click={this.addDigit} margin/>
                <Button label="/" click={this.setOperation} title={DIVISION_TITLE} margin marginRight/>
                <Button label="4" click={this.addDigit} margin marginLeft/>
                <Button label="5" click={this.addDigit} margin/>
                <Button label="6" click={this.addDigit} margin/>
                <Button label="*" click={this.setOperation} title={MULTIPLACATION_TITLE} margin marginRight/>
                <Button label="1" click={this.addDigit} margin marginLeft/>
                <Button label="2" click={this.addDigit} margin/>
                <Button label="3" click={this.addDigit} margin/>
                <Button label="-" click={this.setOperation} title={SUBTRACTION_TITLE} margin marginRight/>
                <Button label="0" click={this.addDigit} margin marginLeft/>
                <Button label="." click={this.addDigit} margin/>
                <Button label="+" click={this.setOperation} title={SUM_TITLE} double margin marginRight/>
                <Button label="C" click={this.clearMemory} title={C_TITLE} double margin marginLeft/>
                <Button label="=" click={this.setOperation} title={EQUALS_TITLE} double operation margin marginRight/>
            </div>
        );
    };
}

export default Calculator