import { INCREMENT, DECREMENT, SET_DIFF } from "../actions/index";

const initialState = {
    items: [],
    value: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + 1
            });
    }
    return state
}

export default counterReducer;