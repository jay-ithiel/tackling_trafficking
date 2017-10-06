import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  REQUEST_USER,
  UPDATE_USER,
  DESTROY_USER,
  receiveCurrentUser,
  removeCurrentUser,
  receiveErrors,
} from './actions/user_actions';

import {
  login,
  logout,
  signup,
  fetchUser,
  updateUser,
  deleteUser,
} from './util/user_api_util';

const UserMiddleware = ({ getState, dispatch }) => next => action => {
  const userSaveSuccess = user => dispatch(receiveCurrentUser(user));
  const deleteUserSuccess = id => dispatch(removeCurrentUser(id));
  const error = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type) {
    case LOGIN:
      login(action.user, userSuccess, error);
      return next(action);

    case LOGOUT:
      logout(deleteUserSuccess, error);
      return next(action);

    case SIGNUP:
      signup(action.user, userSuccess, error);
      return next(action);

    case REQUEST_USER:
      fetchUser(action.id, userSuccess, error);
      return next(action);

    case UPDATE_USER:
      updateUser(action.user, userSuccess, error);
      return next(action);

    case DESTROY_USER:
      deleteUser(action.id, deleteUserSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default UserMiddleware;
