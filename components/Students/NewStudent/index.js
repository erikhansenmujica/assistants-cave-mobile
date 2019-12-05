import React, { useState } from "react";
import { connect } from "react-redux";
import { createStudent } from "../../../store/actions/students";
import NewStudent from "./NewStudent";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import Loading from "../../Loading";

function NewStudentContainer(props) {
  const [name, onChangeName] = useState("Student name");
  const [gitUsername, onChangeGitusername] = useState(
    "Student Github username"
  );
  const [loading, onLoadingChange] = useState(false);
  const [picture, onChangePicture] = useState("Student picture");
  const onPress = () => {
    onLoadingChange(true);
    props
      .createStudent({
        name,
        gitUsername,
        picture,
        courseId: props.navigation.state.params.courseId
      })
      .then(() => {
        props.navigation.navigate("Students", {
          courseId: props.navigation.state.params.courseId
        });
      });
  };
  const pickImage = async () => {
    let img = await DocumentPicker.getDocumentAsync({});
    onLoadingChange(true);
    let data = await FileSystem.readAsStringAsync(img.uri, {
      encoding: FileSystem.EncodingType.Base64
    });
    onLoadingChange(false);
    onChangePicture(data);
  };

  return loading ? (
    <Loading />
  ) : (
    <NewStudent
      name={name}
      gitusername={gitUsername}
      onChangeName={onChangeName}
      onChangeGitusername={onChangeGitusername}
      onChangePicture={onChangePicture}
      picture={picture}
      onPress={onPress}
      pickImage={pickImage}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  createStudent: course => dispatch(createStudent(course))
});
export default connect(
  null,
  mapDispatchToProps
)(NewStudentContainer);
