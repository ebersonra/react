import { createStore, combineReducers } from 'redux';

import reducerNumbers from './reducers/reducerNumbers';

const reducers = combineReducers({
    numbers: reducerNumbers,
})

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig