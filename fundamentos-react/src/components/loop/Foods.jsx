import './Foods.css';
import React from 'react';

import dogFoods from '../../data/dogFood';

export default (props) => {

    const foods = dogFoods.map((food, i) => {

        return (

            <tr key={food.id} className={i % 2 === 0 ? 'Pair' : 'Odd'}>
                <td>{food.id}</td>
                <td>{food.description}</td>
                <td>{food.dogBreed}</td>
                <td>${food.value}</td>
            </tr>
        )
    });

    return (
        <div className="TableFoods">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Dog Breed</th>
                        <th>Food Value</th>
                    </tr>
                </thead>

                <tbody>
                    {foods}
                </tbody>
            </table>
        </div>
    )
}