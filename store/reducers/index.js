import { combineReducers } from "redux";
import userReducer from "./users";
import coursesReducer from "./courses";

export default combineReducers({
  user: userReducer,
  courses: coursesReducer
});
