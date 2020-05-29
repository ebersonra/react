import { createStore, combineReducers } from 'redux';


const reducers = combineReducers({
    numbers: function (state, action) {
        console.log("Reducers Numbers....")
        console.log(state, " ", action);
        return {
            minimum: 7,
            maximum: 14
        }
    },
    names: function (state, action) {
        console.log("Reducers Names....")
        console.log(state, action);
        return [
            'Bruna',
            'Lora',
            'Torvi'
        ]
    }
})

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig