import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchCourse } from "../../../store/actions/courses";
import SelectedCourse from "./SelectedCourse";
import Loading from "../../Loading";

function CoursesContainer(props) {
  [load, setLoad] = useState(false);
  !load &&
    props
      .fetchCourse(JSON.stringify(props.navigation.state.params.courseId))
      .then(() => setLoad(true));

  return <SelectedCourse course={props.course} />;
}
const mapStateToProps = state => ({
  course: state.courses.selected
});
const mapDispatchToProps = dispatch => ({
  fetchCourse: id => dispatch(fetchCourse(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesContainer);
