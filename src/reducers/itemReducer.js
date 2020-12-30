import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import initialState from "./initialState";

const itemReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_TO_CART:
			if (!state.cartItems.includes(action.payload))
				return Object.assign({}, state, {
					cartItems: [...state.data.cartItems, action.payload]
				})
			return state;
		case REMOVE_FROM_CART:
			return Object.assign({}, state, {
				cartItems: state.cartItems.filter(el => el.id !== action.payload.id)
			});
		case SET_QUANTITY:
			let idx = state.cartItems.indexOf(action.payload)
			return Object.assign({}, state, {
				cartItems: [...state.cartItems.slice(0, idx),
				action.payload,
				...state.cartItems.slice(idx + 1)]
			});
		default:
			return state;
	}
}

export default itemReducer;