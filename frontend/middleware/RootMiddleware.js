import { applyMiddleware } from 'redux';

import UserMiddleware from '../features/users/UserMiddleware';

const RootMiddleware = applyMiddleware(
  UserMiddleware
);

export default RootMiddleware;
