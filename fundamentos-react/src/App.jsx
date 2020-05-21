import './App.css';
import React from 'react';

import Card from './components/layout/Card';

import FirstComponent from './components/basic/FirstComponent';
import WithParameters from './components/basic/WithParameters';
import Fragments from './components/basic/Fragments';
import Aleatory from './components/basic/Aleatory';
import Animal from './components/basic/Animal';
import Dog from './components/basic/Dog';
import Dogs from './components/loop/Dogs';
import Foods from './components/loop/Foods';
import EvenOrOdd from './components/conditional/EvenOrOdd';
import DogAge from './components/conditional/DogAge';
import FatherDogDirect from './components/communication/FatherDogDirect';
import FatherDogIndirect from './components/communication/FatherDogIndirect';
import Input from './components/form/Input';
import Counter from './components/counter/Counter';
import MegaNumber from './components/mega/MegaNumber';

export default () => (
    <div className="App">
        <h1>Fundaments React</h1>

        <div className="Cards">

            <Card title="#14 - Mega Number" color="#591E23">
                <MegaNumber />
            </Card>

            <Card title="#13 - Counter" color="#B0A472">
                <Counter initialNumber={10}/>
            </Card>

            <Card title="#12 - Controlled Components (Input)" color="#588C73">
                <Input />
            </Card>

            <Card title="#11 - Dog Communication Indirect" color="#0F5959">
                <FatherDogIndirect />
            </Card>

            <Card title="#10 - Dog Communication Direct" color="#3A0256">
                <FatherDogDirect />
            </Card>

            <Card title="#09 - Dog age" color="#BB0F00">
                <DogAge dog={{ age: 6 }}></DogAge>
                <DogAge dog={{ age: 12 }}></DogAge>
                <DogAge dog={{ age: 0 }}></DogAge>
            </Card>

            <Card title="#08 - Even Or Odd" color="#57102C">
                <EvenOrOdd></EvenOrOdd>
            </Card>

            <Card title="#07 - Foods Table Dog (Loop)" color="#83BF17">
                <Foods></Foods>
            </Card>

            <Card title="#06 - Dogs List (Loop)" color="#CC6600">
                <Dogs listStyle="decimal"></Dogs>
            </Card>

            <Card title="#05 - Dogs Breed Yorki" color="#753A48">
                <Animal dogBreed="Yorki">
                    <Dog dogName="Torvi" dogAge="6 months"></Dog>
                    <Dog dogName="Ball" dogAge="12 months"></Dog>
                    <Dog dogName="Juju" dogAge="8 months"></Dog>
                </Animal>
            </Card>

            <Card title="#04 - Random Challenge" color="#FA6900">
                <Aleatory
                    valueMin={10}
                    valueMax={999999} />
            </Card>

            <Card title="#03 - Fragments" color="#E94C6F">
                <Fragments />
            </Card>

            <Card title="#02 - With Parameters" color="#28ABE3">
                <WithParameters
                    dogfood="Value dog food is.: $"
                    dogbreed="My dog breed is Yorkshire"
                    value={75.00} />
            </Card>

            <Card title="#01 - First Component" color="#0F5959">
                <FirstComponent />
            </Card>
        </div>
    </div>
);