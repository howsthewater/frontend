import {
  // LOGIN_FAILED,
  // LOGIN_START,
  // LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  LOGOUT_START,
  LOGOUT_SUCCESS
} from "../actions";

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  user: {},
  userConfirmation: false
};

const reducer = (state = initialState, action) => {
  console.log(`REDUCERS :: ACTION TYPE :: ACTION TYPE is ${action.type}`);
  switch (action.type) {
    case SIGNUP_START:
      console.log(`REDUCERS :: SIGNUP_START ::`);
      return {
        ...state,
        error: "",
        isAuthenticated: false,
        isAuthenticating: true
      };
    case SIGNUP_SUCCESS:
      console.log(
        `REDUCERS :: SIGNUP_SUCCESS :: USER IS ${action.payload.user}`
      );
      return {
        ...state,
        error: "",
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.payload.user
      };
    case SIGNUP_FAILED:
      console.log(
        `REDUCERS :: SIGNUP_FAILED :: error is ${action.payload.error}`
      );
      console.log(
        `REDUCERS :: SIGNUP_FAILED :: state value is ${JSON.stringify(state)}`
      );
      console.log(
        `REDUCERS :: SIGNUP_FAILED :: local storage value is ${localStorage.getItem(
          "amplify-signin-with-hostedUI"
        )}`
      );
      return {
        ...state,
        error: action.payload.error,
        isAuthenticated: false,
        isAuthenticating: false,
        user: null
      };
    case LOGOUT_START:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        isFederatedSignIn: false,
        user: null
      };
    default:
      return state;
  }
};

export default reducer;
