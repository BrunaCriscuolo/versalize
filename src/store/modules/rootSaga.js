import { all } from 'redux-saga/effects';

import patient from './patient/saga';
import auth from './auth/saga';

export default function* rootSaga() {
  return yield all([
    patient,
    auth
  ]);
}
