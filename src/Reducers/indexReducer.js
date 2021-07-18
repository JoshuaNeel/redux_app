import { combineReducers } from 'redux';
import clientReducer from './userReducer';
import AdminReducers from './AdminReducer';
export default combineReducers({
  userDetails: clientReducer,
  adminDetails:AdminReducers
});