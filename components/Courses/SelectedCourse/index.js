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
  const goSomewhere = (where, params) =>
    props.navigation.navigate(where, params);
  return load ? (
    <SelectedCourse course={props.course} goSomewhere={goSomewhere} />
  ) : (
    <Loading />
  );
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
