import axios from "axios";
import { SET_STUDENTS, SET_STUDENT } from "../../constants";

export const setStudents = students => ({
  type: SET_STUDENTS,
  students
});
const setStudent = student => ({
  type: SET_STUDENT,
  student
});

export const fetchStudents = courseId => dispatch =>
  axios
    .get(`http://10.100.0.133:3000/courses/students/${courseId}`)
    .then(res => dispatch(setStudents(res.data.length ? res.data : [false])))
    .catch(console.log);

export const fetchStudent = id => dispatch =>
  axios
    .get(`http://10.100.0.133:3000/students/${id}`)
    .then(res => dispatch(setStudent(res.data)))
    .catch(console.log);

export const createStudent = student => dispatch =>
  axios
    .post("http://10.100.0.133:3000/students/create", student)
    .then(() =>
      axios
        .get(`http://10.100.0.133:3000/courses/students/${student.courseId}`)
        .then(res => dispatch(setStudents(res.data)))
        .catch(console.log)
    )
    .catch(console.log);
