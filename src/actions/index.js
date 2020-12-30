// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_QUANTITY = "SET_QUANTITY";


// actions creator functions
export function addToCart() {
	return {
		type: ADD_TO_CART,
		itemId
	}
}

export function removeFromCart() {
	return {
		type: REMOVE_FROM_CART,
		itemId
	}
}

export function setQuantity() {
	return {
		type: SET_QUANTITY,
		itemId,
		quantity
	}
}