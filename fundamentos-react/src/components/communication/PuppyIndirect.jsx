import React from 'react';

export default (props) => {

    const click = props.puppyOnClick;
    const getDogAge = () => parseInt(Math.random() * (20)) + 50;

    return (
        <div>
            <div>Puppy Indirect</div>
            <button onClick={_ => click('Father Dog Torvi','Yorki', getDogAge())}>Click for info</button>
        </div>
    );
};