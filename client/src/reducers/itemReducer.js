import { SET_PRODUCTS, SET_ORDERS, SET_ORDER_ITEMS } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_PRODUCTS:
          return Object.assign({}, state, {
            items: action.payload.items
          })
      case SET_ORDERS:
          return Object.assign({}, state, {
            orders: action.payload.orders
          })
      case SET_ORDER_ITEMS:
          return Object.assign({}, state, {
            orderItems: action.payload.orderItems
          })
      default:
          return state;
  }
}

export default itemReducer