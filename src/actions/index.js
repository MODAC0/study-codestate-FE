// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_QUANTITY = "SET_QUANTITY";

// actions creator functions
export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      quantity: 1,
      itemId
    }
  }
}

export const removeFromCart = (itemId) => {
  return {
    //TODO
    type: REMOVE_FROM_CART,
    payload: {
      itemId
    }
  }
}

export const setQuantity = (itemId, quantity) => {
  return {
    //TODO
    type: SET_QUANTITY,
    payload: {
      itemId,
      quantity
    }
  }
}