import items from './initialState.js';
import { SELECT_ITEM } from "../actions/index";

const initialState = {
    items: items,
    selectedItems: [],
    // 여기서 selectedItems 의 length로 갯수 세주기
}

const itemReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_ITEM:
            return Object.assign({}, state, {
                selectedItems: [...state.selectedItems, action.data]
            });
    }
    return state
}

export default itemReducer;