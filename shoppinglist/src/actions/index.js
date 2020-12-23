// action types
export const SELECT_ITEM = "SELECT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SET_QUANTITY = "SET_QUANTITY";


// actions creator functions
export function selectItem() {
    return {
        type: SELECT_ITEM,
    }
}

export function deleteItem() {
    return {
        type: DELETE_ITEM,
    }
}

export function setQuantity() {
    return {
        type: SET_QUANTITY,
    }
}