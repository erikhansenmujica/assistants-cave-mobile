import { SET_USER } from "../constants";

const INITIAL_STATE = {
  logged: {}
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER: {
      if (typeof action.user === "object")
        return { ...state, logged: action.user };
    }
    default:
      return state;
  }
};

export default userReducer;
