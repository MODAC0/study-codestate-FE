import items from './initialState.js';
import { DELETE_ITEM, SELECT_ITEM, SET_QUANTITY } from "../actions/index";

const initialState = {
	items: items,
	selectedItems: [],
	// 여기서 selectedItems 의 length로 갯수 세주기
}

const itemReducer = (state = initialState, action) => {

	switch (action.type) {
		case SELECT_ITEM:
			if (!state.selectedItems.includes(action.payload))
				return Object.assign({}, state, {
					selectedItems: [...state.selectedItems, action.payload]
				})
			return state;
		case DELETE_ITEM:
			return Object.assign({}, state, {
				selectedItems: state.selectedItems.filter(el => el.id !== action.payload.id)
			});
		case SET_QUANTITY:
			let idx = state.selectedItems.indexOf(action.payload)
			return Object.assign({}, state, {
				selectedItems: [...state.selectedItems.slice(0, idx),
				action.payload,
				...state.selectedItems.slice(idx + 1)]
			});
		default:
			return state;
	}
}

export default itemReducer;