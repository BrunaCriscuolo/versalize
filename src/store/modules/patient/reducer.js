import Types from './types';

const INITIAL_STATE = {
  patientRegisterLoading: false,
  patientRegisterSuccess: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.PATIENT_REGISTER_REQUEST:
      return {
        ...state,
        patientRegisterLoading: true,
        patientRegisterSuccess: false
      };
    case Types.PATIENT_REGISTER_SUCCESS:
      return {
        ...state,
        patientRegisterLoading: false,
        patientRegisterSuccess: true
      };
    case Types.PATIENT_REGISTER_FAILURE:
      return {
        ...state,
        patientRegisterLoading: false,
        patientRegisterSuccess: false
      };

    default:
      return state;
  }
};

