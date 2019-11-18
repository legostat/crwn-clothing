import actionTypes from './user.action-types';

const intialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case actionTypes.SIGN_IN_FAILURE:
    case actionTypes.SIGN_UP_FAILURE:
    case actionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
