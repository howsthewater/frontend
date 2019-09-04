export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const setUserData = user => dispatch => {
  console.log(`ACTIONS :: SET USER DATA :: value of user is ${user}`);
  let data = false;
  if (user) {
    data = true;
    dispatch({ type: SIGNUP_START, payload: { data: data, user: user } });
    dispatch({ type: SIGNUP_SUCCESS, payload: { data: data, user: user } });
  } else {
    console.log(`ACTIONS :: SET USER DATA :: NO USER`);

    dispatch({
      type: SIGNUP_FAILED,
      payload: { data: data, error: "EMPTY USER" }
    });
  }
};

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_START });
  dispatch({ type: LOGOUT_SUCCESS });
  window.location.reload();
};
