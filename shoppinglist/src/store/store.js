import { createStore } from 'redux';
import counterReducer from '../reducers/index';

const store = createStore(counterReducer);
export default store;