import React from 'react';

import PageHeader from '../template/pageHeader';
import Form from './todoForm';
import List from './todoList';

export default (props) => {

    return (
        <div>
            <PageHeader name="Tasks" small="Register"></PageHeader>
            <Form />
            <List />
        </div>
    )
}