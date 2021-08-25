import Types from './types';

const INITIAL_STATE = {
  authLoading: false,
  authSuccess: false,
  token: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        authLoading: true,
        authSuccess: false
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        authLoading: false,
        authSuccess: true
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        authLoading: false,
        authSuccess: false
      };

    case Types.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

