export const addToChart = book => {
    return {
        type: "ADD_TO_CHART",
        payload: book
    }
}

export const removeItem = book => {
    return {
        type: "REMOVE_ITEM",
        payload: book
    }
}
export const removeFromChart = book => {
    return {
        type: "REMOVE_FROM_CHART",
        payload: book
    }
}
