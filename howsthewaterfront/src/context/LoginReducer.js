const SET_LOGIN = "SET_LOGIN";
export default (state, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        loggedIn: action.payload
      };
    default:
      return state;
  }
};
