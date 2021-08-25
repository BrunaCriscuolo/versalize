import { combineReducers } from 'redux';

import patient from './patient/reducer';
import auth from './auth/reducer';

export default combineReducers({
  patient,
  auth
});
