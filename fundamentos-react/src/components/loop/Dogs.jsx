import React from 'react';

import dogs from '../../data/dogs';

export default (props) => {

    const dogsItem = dogs.map((dog) => {
        return (
            <li key={dog.id}>
                {dog.dogName} -> {dog.dogBreed} -> {dog.dogAge}
            </li>
        );
    });

    const styleUl = {
        listStyle: props.listStyle || 'none'
    }

    return (
        <div>
            <ul style={styleUl}>
                {dogsItem}
            </ul>
        </div>
    )
};