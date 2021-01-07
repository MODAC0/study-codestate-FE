import { PUSH_NOTIFICATION, POP_NOTIFICATION } from "../actions/index";
import { initialState } from "./initialState";

const notificationReducer = (state = initialState, action) => {

  switch (action.type) {
    case PUSH_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: [...state.notifications, action.payload]
      })
    case POP_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: state.notifications.slice(1)
      })
    default:
      return state;
  }
}

export default notificationReducer;