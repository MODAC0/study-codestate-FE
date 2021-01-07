// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_QUANTITY = "SET_QUANTITY";
export const NOTIFY = "NOTIFY";
export const PUSH_NOTIFICATION = "PUSH_NOTIFICATION";
export const POP_NOTIFICATION = "POP_NOTIFICATION";

// actions creator functions
export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      itemId,
      quantity: 1
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

export const notify = (message, dismissTime = 2000) => dispatch => {
  dispatch(pushNotification(message))
  setTimeout(() => {
    dispatch(popNotification())
  }, dismissTime)
}

export const pushNotification = message => {
  return {
    type: PUSH_NOTIFICATION,
    payload: message
  }
}

export const popNotification = () => {
  return {
    type: POP_NOTIFICATION
  }
}