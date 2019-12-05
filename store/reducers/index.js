import { combineReducers } from "redux";
import userReducer from "./users";
import coursesReducer from "./courses";
import studentsReducer from "./students";

export default combineReducers({
  user: userReducer,
  students: studentsReducer,
  courses: coursesReducer
});
