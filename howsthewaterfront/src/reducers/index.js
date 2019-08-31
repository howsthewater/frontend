import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS
} from "../actions";

const initialState = {
  isAuthenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isAuthenticated: true
      };

    default: {
      console.log("DEFAULT CASE");
    }
  }
};

export default reducer;
