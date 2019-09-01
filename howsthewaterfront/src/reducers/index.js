import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS
} from "../actions";

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  user: {}
};

const reducer = (state = initialState, action) => {
  console.log("ACTION TYPE IS " + action.type);
  switch (action.type) {
    case SIGNUP_START:
      console.log("REDUCER :: SIGNUP  START" + action.payload);
      return {
        ...state,
        error: "",
        isAuthenticated: false,
        isAuthenticating: true
      };
    case SIGNUP_SUCCESS:
      console.log("SIGNUP SUCCESS");
      return {
        ...state,
        error: "",
        isAuthenticated: action.payload.data,
        isAuthenticating: false,
        user: action.payload.user
      };
    case SIGNUP_FAILED:
      console.log("SIGNUP FAILED");
      return {
        ...state,
        error: action.payload.error,
        isAuthenticated: action.payload.data,
        isAuthenticating: false,
        user: null
      };
    default:
      console.log("DEFAULT CASE");
      return state;
  }
};

export default reducer;
