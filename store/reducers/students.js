import { SET_STUDENTS, SET_STUDENT } from "../constants";

const INITIAL_STATE = {
  all: [],
  selected: {}
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STUDENTS: {
      return { ...state, all: action.students };
    }
    case SET_STUDENT: {
      return { ...state, selected: action.student };
    }
    default:
      return state;
  }
};

export default coursesReducer;
