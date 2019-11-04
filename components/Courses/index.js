import React from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../../store/actions/courses";
import Courses from "./Courses";
function CoursesContainer(props) {
  !props.courses.length && props.fetchCourses();
  const goSomewhere = (where, params) =>
    props.navigation.navigate(where, params);
  return <Courses courses={props.courses} goSomewhere={goSomewhere} />;
}
const mapStateToProps = state => ({
  courses: state.courses.all
});
const mapDispatchToProps = dispatch => ({
  fetchCourses: user => dispatch(fetchCourses(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesContainer);
