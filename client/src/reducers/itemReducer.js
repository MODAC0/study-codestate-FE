import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.payload]
      })
    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(el => el.itemId !== action.payload.itemId)
      });
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      return Object.assign({}, state, {
        cartItems: [...state.cartItems.slice(0, idx), action.payload,
        ...state.cartItems.slice(idx + 1)]
      });
    default:
      return state;
  }
}

export default itemReducer;