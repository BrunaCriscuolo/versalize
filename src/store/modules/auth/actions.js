import Types from './types';

export const loginRequest = (finalData) => ({
  type: Types.LOGIN_REQUEST,
  payload: { finalData },
});
export const loginSuccess = (token) => ({
  type: Types.LOGIN_SUCCESS,
  payload: { token },
});
export const loginFaliure = () => ({
  type: Types.LOGIN_FAILURE,
});

export const logout = () => ({
  type: Types.LOGOUT,
});
