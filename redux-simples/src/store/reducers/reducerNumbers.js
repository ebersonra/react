import { UPDATE_MINIMUM_NUMBER, UPDATE_MAXIMUM_NUMBER } from '../const/Actions';

const initialState = {
    minimum: 1,
    maximum: 10
}

export default function (state = initialState, action) {

    console.log(state, " ", action);

    switch (action.type) {
        case UPDATE_MINIMUM_NUMBER:
            return {
                ...state,
                minimum: action.payload
            }
        case UPDATE_MAXIMUM_NUMBER:
            return {
                ...state,
                maximum: action.payload
            }
        default:
            return state
    }     
}