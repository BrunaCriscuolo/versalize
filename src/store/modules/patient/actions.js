import Types from './types';

export const patientRegisterRequest = (finalData) => ({
  type: Types.PATIENT_REGISTER_REQUEST,
  payload: { finalData },
});
export const patientRegisterSuccess = () => ({
  type: Types.PATIENT_REGISTER_SUCCESS,
});
export const patientRegisterFaliure = () => ({
  type: Types.PATIENT_REGISTER_FAILURE,
});
