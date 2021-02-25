import { RESPONSE } from '../actions/index';
import { initialState } from './initialState';

const reponseReudcer = (state = initialState, action) => {
  switch (action.type) {
    case RESPONSE:
      return Object.assign('', state, {
        ...state,
        response: action.payload
      });
    default:
      return state;
  }
};

export default reponseReudcer;
