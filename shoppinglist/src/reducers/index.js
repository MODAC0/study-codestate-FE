import { INCREMENT, DECREMENT, SET_DIFF } from "../actions/index";

const initialState = {
    items: [],
    value: 1,
    diff: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
    }

    
    // switch (action.type) {
    //     case DECREMENT:
    //         return Object.assign({}, state, {
    //             value: state.value - state.diff
    //         });
    // }
    return state
}

export default counterReducer;