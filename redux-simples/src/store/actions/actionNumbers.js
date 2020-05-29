// Action Creator
export function updateMinimumNumber(newNumber) {
    return {
        type: "UPDATE_MINIMUM_NUMBER",
        payload: newNumber
    }
}