import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import cartReducer from './cartReducer';
import notificationReducer from './notificationReducer';
import responseReducer from './response';

const rootReducer = combineReducers({
  itemReducer,
  cartReducer,
  notificationReducer,
  responseReducer
});

export default rootReducer;
