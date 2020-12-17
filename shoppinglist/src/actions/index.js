// action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_DIFF = "SET_DIFF";

// actions creator functions
export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function setDiff(diffValue) {
    return {
        type: SET_DIFF,
        diff: diffValue
    };
}
