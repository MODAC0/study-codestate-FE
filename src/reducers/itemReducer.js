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
			if (!state.selectedItems.includes(action.data))
				return Object.assign({}, state, {
					selectedItems: [...state.selectedItems, action.data]
				})
			return state;
		case DELETE_ITEM:
			return Object.assign({}, state, {
				selectedItems: state.selectedItems.filter(el => el.id !== action.data.id)
			});
		case SET_QUANTITY:
			let idx = state.selectedItems.indexOf(action.data)
			return Object.assign({}, state, {
				selectedItems: [...state.selectedItems.slice(0, idx),
				action.data,
				...state.selectedItems.slice(idx + 1)]
			});
		default:
			return state;
	}
}

export default itemReducer;