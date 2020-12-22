import { INCREMENT, DECREMENT, SET_DIFF } from "../actions/index";

const initialState = {
    items: [{
        id: 1,
        name: '박진영 쿠션',
        price: 9900
    },
    {
        id: 2,
        name: '개구리안대',
        price: 9900
    }
    ],
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