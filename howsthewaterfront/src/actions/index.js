import { Auth } from "aws-amplify";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const setUserData = () => async dispatch => {
  const data = await localStorage.getItem("amplify-signin-with-hostedUI");
  try {
    const user = await Auth.currentAuthenticatedUser();
    //console.log("ACTION:: SET USER DATA :: -------" + data);
    dispatch({ type: SIGNUP_START, payload: { data: data, user: user } });
    dispatch({ type: SIGNUP_SUCCESS, payload: { data: data, user: user } });
  } catch (error) {
    console.log("ERROR IN SET USER DATA " + error);
    dispatch({ type: SIGNUP_FAILED, payload: { data: data, error: error } });
  }
};
