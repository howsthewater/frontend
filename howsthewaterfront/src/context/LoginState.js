import React, { useReducer } from "react";
import LoginContext from "./LoginContext";
import LoginReducer from "./LoginReducer";
const SET_LOGIN = "SET_LOGIN";
const LoginState = props => {
  const initialState = {
    loggedIn: false
  };
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const setLogin = loginObj => {
    dispatch({
      type: SET_LOGIN,
      payload: loginObj
    });
  };
  return (
    <LoginContext.Provider
      value={{
        loginState: state,
        setLogin
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginState;
