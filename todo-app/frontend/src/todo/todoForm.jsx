import React from 'react';

import Grid from '../template/grid';
import Button from '../template/button';

export default (props) => {

    const keyHandler = (event) => {

        if(event.key === "Enter"){
            event.shiftKey ? props.handleSearch() : props.handleAdd();
        }else if(event.key === "Escape") {
            props.handleClear();
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input id="description" className="form-control" placeholder="Add a task"
                    onChange={props.handleChange}
                    onKeyUp={keyHandler} value={props.description}></input>
            </Grid>

            <Grid cols="12 3 2">

                <Button style="primary" icon="plus" title="Press 'Enter'" 
                    onClick={props.handleAdd}></Button>

                <Button style="info" icon="search" title="Press 'Shift+Enter'"
                    onClick={props.handleSearch}></Button>

                <Button style="default" icon="close" title="Press 'Esc'"
                    onClick={props.handleClear}></Button>
            </Grid>
            
        </div>
    )
}