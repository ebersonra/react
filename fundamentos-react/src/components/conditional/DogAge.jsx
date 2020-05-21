import React from 'react';

import './If'
import If, {Else} from './If';

export default (props) => {

    const age = props.dog.age;

    return (
        <div>
            <h3>Whats dog age?</h3>
            <If test={age >= 0}>
                
                <If test={age >= 12}>
                    <p>All right, your dog is an adult!</p>
                    <Else>
                        <p>Own... your dor is a baby.</p>
                    </Else>
                </If>

                <Else>
                    <p>Ops... dog age not informed.</p>
                </Else>
            </If>
        </div>
    );
}