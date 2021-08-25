import { call, put, takeLatest, all } from 'redux-saga/effects';

import Types from './types';

import { useVerifyError } from '../../../hooks/verifyError';
import { api } from '../../../services/api';

import {
  loginSuccess, loginFaliure,
} from './actions';

function* loginRequest({ payload }) {
  const { finalData } = payload;

  try {
    const { data } = yield call(api.post, `/auth/token`, finalData);

    yield put(loginSuccess(`Bearer ${data.accessToken}`));
    sessionStorage.setItem("token", `Bearer ${data.accessToken}`);

  } catch ({ response }) {
    yield put(loginFaliure());
    useVerifyError(response);
  }
}

export default all([
  takeLatest(Types.LOGIN_REQUEST, loginRequest),
]);
