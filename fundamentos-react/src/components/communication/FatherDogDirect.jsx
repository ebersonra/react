import React from 'react';

import PuppyDirect from './PuppyDirect';

export default (props) => {

    return (
        <div>
            <PuppyDirect dogName="Torvi" dogBreed="Yorki" dogAge={6} />
            <PuppyDirect dogName="Ball" dogBreed="Pitbull" dogAge={12} />
            <PuppyDirect dogName="Lessi" dogBreed="Poodle" dogAge={24} />
        </div>
    );
};