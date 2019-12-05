import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCourses, setCourses } from "../../store/actions/courses";
import Courses from "./Courses";
function CoursesContainer(props) {
  !props.courses.length && props.fetchCourses();
  useEffect(() => () => props.rmCourses(), []);
  const goSomewhere = (where, params) =>
    props.navigation.navigate(where, params);
  return <Courses courses={props.courses} goSomewhere={goSomewhere} />;
}
const mapStateToProps = state => ({
  courses: state.courses.all
});
const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
  rmCourses: () => dispatch(setCourses([]))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesContainer);
