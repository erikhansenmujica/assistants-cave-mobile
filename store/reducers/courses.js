import { SET_COURSES, SET_COURSE } from "../constants";

const INITIAL_STATE = {
  all: [],
  selected: {}
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COURSES: {
      return { ...state, all: action.courses };
    }
    case SET_COURSE: {
      return { ...state, selected: action.course };
    }
    default:
      return state;
  }
};

export default coursesReducer;
