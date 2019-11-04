import axios from "axios";
import { SET_COURSES, SET_COURSE } from "../../constants";

const setCourses = courses => ({
  type: SET_COURSES,
  courses
});
const setCourse = course => ({
  type: SET_COURSE,
  course
});

export const fetchCourses = () => dispatch =>
  axios
    .get("http://10.100.0.133:3000/courses")
    .then(res => dispatch(setCourses(res.data)))
    .catch(console.log);

export const fetchCourse = id => dispatch =>
  axios
    .get(`http://10.100.0.133:3000/courses/${id}`)
    .then(res => dispatch(setCourse(res.data)))
    .catch(console.log);

export const createCourse = course => dispatch =>
  axios
    .post("http://10.100.0.133:3000/courses/create", course)
    .then(res =>
      axios
        .get("http://10.100.0.133:3000/courses")
        .then(res => dispatch(setCourses(res.data)))
        .catch(console.log)
    )
    .catch(console.log);
