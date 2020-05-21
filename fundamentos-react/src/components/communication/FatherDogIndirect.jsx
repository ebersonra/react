import React, { useState } from 'react';

import PuppyIndirect from './PuppyIndirect';

export default (props) => {

    const [dogName, setDogName] = useState("?");
    const [dogBreed, setDogBreed] = useState("?");
    const [dogAge, setDogAge] = useState(0);

    function fatherDogInfo(dogName, dogBreed, dogAge) {
        setDogName(dogName);
        setDogBreed(dogBreed);
        setDogAge(dogAge);
    }

    return (
        <div>
            <div>Father Dog</div>
            <span>{dogName}</span> <span> <strong>{dogBreed}</strong> </span> <span> { dogAge } </span> <span> {dogAge >= 12 ? 'All right, this your father!' : 'Oh... not is your father.'} </span>
            <PuppyIndirect puppyOnClick={fatherDogInfo} />
        </div>
    );
};