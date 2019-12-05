import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStudents, setStudents } from "../../store/actions/students";
import Students from "./Students";
import Loading from "../Loading";

function StudentsContainer(props) {
  const [loading, onLoadingChange] = useState(false);
  useEffect(() => () => props.rmStudents(), []);
  if (!props.students.length) {
    !loading && onLoadingChange(true);
    props
      .fetchStudents(props.navigation.state.params.courseId)
      .then(() => onLoadingChange(false));
  }
  const goSomewhere = (where, params) =>
    props.navigation.navigate(where, params);

  return loading ? (
    <Loading />
  ) : (
    <Students
      students={props.students}
      courseId={props.navigation.state.params.courseId}
      goSomewhere={goSomewhere}
    />
  );
}
const mapStateToProps = state => ({
  students: state.students.all
});
const mapDispatchToProps = dispatch => ({
  fetchStudents: courseId => dispatch(fetchStudents(courseId)),
  rmStudents: () => dispatch(setStudents([]))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsContainer);
