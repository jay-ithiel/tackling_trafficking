import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER,
  RECEIVE_ERRORS,
} from './actions/user_actions';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;

    case REMOVE_CURRENT_USER:
      newState.currentUser = null;
      newState.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default SessionReducer;
