import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import Button from '../template/button';
import { add, clear, changeDescription, search } from './actions/todoActions';

class Form extends Component{
    constructor(props){
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(event) {
        const {add, clear, search, description } = this.props;

        if(event.key === "Enter"){
            event.shiftKey ? search() : add(description);
        }else if(event.key === "Escape") {
            clear();
        }
    }

    render() {
        const {add, clear, search, description } = this.props;
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" placeholder="Add a task"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler} value={this.props.description}></input>
                </Grid>

                <Grid cols="12 3 2">

                    <Button style="primary" icon="plus" title="Press 'Enter'" 
                        onClick={()=> add(description)}></Button>

                    <Button style="info" icon="search" title="Press 'Shift+Enter'"
                        onClick={()=> search()}></Button>

                    <Button style="default" icon="close" title="Press 'Esc'"
                        onClick={()=> clear()}></Button>
                </Grid>
            
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    description: state.todo.description 
});
const mapDispatchToProps = (dispatch) => bindActionCreators(
    { add, clear, changeDescription, search }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Form)