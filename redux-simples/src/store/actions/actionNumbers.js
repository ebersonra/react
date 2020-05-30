import { UPDATE_MINIMUM_NUMBER, UPDATE_MAXIMUM_NUMBER } from '../const/Actions';

export function updateMinimumNumber(newNumber) {
    return {
        type: UPDATE_MINIMUM_NUMBER,
        payload: newNumber
    }
}

export function updateMaximumNumber(newNumber) {
    return {
        type: UPDATE_MAXIMUM_NUMBER,
        payload: newNumber
    }
}