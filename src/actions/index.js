// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const SET_QUANTITY = "SET_QUANTITY";


// actions creator functions
export function addToCart() {
	return {
		type: ADD_TO_CART,
	}
}

export function removeFromCart() {
	return {
		type: DELETE_FROM_CART,
	}
}

export function setQuantity() {
	return {
		type: SET_QUANTITY,
	}
}