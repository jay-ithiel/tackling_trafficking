import { combineReducers } from 'redux';

import UserReducer from '../features/users/UserReducer';

const RootReducer = combineReducers({
  users: UserReducer,
});

export default RootReducer;
