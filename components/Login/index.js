import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/user";
import Login from "./Login";
function LoginContainer(props) {
  const [name, onChangeName] = useState("Your name here");
  const [pass, onChangePass] = useState("Password");
  const onPress = () => props.logUser({ username: name, password: pass });
  return (
    <Login
      name={name}
      pass={pass}
      onChangeName={onChangeName}
      onChangePass={onChangePass}
      onPress={onPress}
    />
  );
}
const mapStateToProps = state => ({
  user: state.user.logged
});
const mapDispatchToProps = dispatch => ({
  logUser: user => dispatch(fetchUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
