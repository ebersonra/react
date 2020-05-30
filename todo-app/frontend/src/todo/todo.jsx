import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import Form from './todoForm';
import List from './todoList';

const URL = "http://localhost:3003/api/todos";

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = { description: "", list: [] }

        // Actions Form
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        // Actions List
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

        this.refresh();
    }

    handleChange(event) {

        this.setState({ ...this.state, description: event.target.value })
    }

    handleAdd() {

        const description = this.state.description;
        axios.post(URL, { description })
            .then(resp => this.refresh());
    }

    refresh(description = "") {

        const search = description ? `&description__regex=/${description}/` : "";
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }));
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description));
    }

    handleSearch(){
        this.refresh(this.state.description);
    }

    handleClear(){
        this.refresh();
    }

    render() {

        return (
            <div>
                <PageHeader name="Tasks" small="Register"></PageHeader>

                <Form
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>

                <List
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }

}

export default Todo