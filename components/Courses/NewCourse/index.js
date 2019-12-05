import React, { useState } from "react";
import { connect } from "react-redux";
import { createCourse } from "../../../store/actions/courses";
import NewCourse from "./NewCourse";
function NewCourseContainer(props) {
  const [name, onChangeName] = useState("New course name");
  const onPress = () =>
    props
      .createCourse({ name })
      .then(() => props.navigation.navigate("Courses"));
  return (
    <NewCourse name={name} onChangeName={onChangeName} onPress={onPress} />
  );
}

const mapDispatchToProps = dispatch => ({
  createCourse: course => dispatch(createCourse(course))
});
export default connect(
  null,
  mapDispatchToProps
)(NewCourseContainer);
