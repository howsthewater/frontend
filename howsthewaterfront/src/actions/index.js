import { Auth } from "aws-amplify";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const setUserData = isFederatedSignIn => async dispatch => {
  console.log(
    `ACTIONS :: SET USER DATA :: value of isFederatedSignIn is ${isFederatedSignIn}`
  );

  const data = await localStorage.getItem("amplify-signin-with-hostedUI");
  console.log(`ACTIONS :: SET USER DATA :: LOCAL STORAGE value is ${data}`);
  try {
    const user = await Auth.currentAuthenticatedUser();
    dispatch({ type: SIGNUP_START, payload: { data: data, user: user } });
    dispatch({ type: SIGNUP_SUCCESS, payload: { data: data, user: user } });
  } catch (error) {
    console.log(`ACTIONS :: SET USER DATA :: ERROR is ${error}`);
    if (isFederatedSignIn) {
      console.log(
        `ACTIONS :: SET USER DATA :: isFederatedSignIn value IN ERROR is ${isFederatedSignIn}`
      );
      window.location.reload();
    } else {
      dispatch({ type: SIGNUP_FAILED, payload: { data: data, error: error } });
    }
  }
};

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_START });
  dispatch({ type: LOGOUT_SUCCESS });
  window.location.reload();
};

export const IS_FEDERATED_SIGNIN_START = "IS_FEDERATED_SIGNIN_START";
export const IS_FEDERATED_SIGNIN_SUCCESS = "IS_FEDERATED_SIGNIN_SUCCESS";

export const setFederatedSignIn = () => dispatch => {
  console.log(`ACTIONS :: SET FEDERATED SIGN IN :: `);
  dispatch({ type: IS_FEDERATED_SIGNIN_START });
  dispatch({ type: IS_FEDERATED_SIGNIN_SUCCESS });
};
