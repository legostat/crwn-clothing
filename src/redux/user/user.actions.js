import actionTypes from './user.action-types';

export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (credentials) => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: credentials
});

export const signInSuccess = (user) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signUpStart = (credentials) => ({
  type: actionTypes.SIGN_UP_START,
  payload: credentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = (error) => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const signInFailure = (error) => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: actionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: actionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
  type: actionTypes.SIGN_OUT_FAILURE,
  payload: error
});
