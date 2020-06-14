import { combineReducers } from 'redux';

import todoReducer from '../todo/reducers/todoReducer';

const rootReducer = combineReducers({
    
    todo: todoReducer
});

export default rootReducer