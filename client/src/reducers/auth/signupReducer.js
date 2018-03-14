import actionTypes from '../../actions/actionTypes';

const initialState = {
  success: false,
  welcome: false,
  errors: null,
  fails: null
};
/**
 * Reducer function for sign up related operations
 * @function signupReducer
 * @param {object} state
 * @param {object} action
 * @return {object} state - the new state
 */
const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESSFUL:
      state = {
        ...state,
        success: true,
        welcome: true,
        errors: null,
        fails: null
      };
      break;
    case actionTypes.SIGNUP_VALIDATION_ERROR:
      state = {
        ...state,
        success: false,
        welcome: false,
        errors: action.payload
      };
      break;
    case actionTypes.SIGNUP_UNSUCCESSFUL:
      state = {
        ...state,
        success: false,
        welcome: false,
        fails: action.payload
      };
      break;
    default:
      return state;
  }
  return state;
};
export default signupReducer;
