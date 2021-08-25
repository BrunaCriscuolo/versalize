import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import Types from './types';

import { api } from '../../../services/api';
import { useVerifyError } from '../../../hooks/verifyError';

import {
  patientRegisterSuccess, patientRegisterFaliure,
} from './actions';

function* patientRegisterRequest({ payload }) {
  const { finalData } = payload;

  try {
    const { data } = yield call(api.post, `/registro/paciente`, finalData);
    yield put(patientRegisterSuccess(data));
    toast.success('Paciente cadastrado com sucesso!');

  } catch ({ response }) {
    yield put(patientRegisterFaliure());
    useVerifyError(response);
  }
}
export default all([
  takeLatest(Types.PATIENT_REGISTER_REQUEST, patientRegisterRequest),
]);
