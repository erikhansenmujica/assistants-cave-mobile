import React from "react";
import { connect } from "react-redux";
import Welcome from "./Welcome";

function WelcomeContainer(props) {
  const navigation = name => props.navigation.navigate(name);

  return <Welcome user={props.user} navigation={navigation} />;
}

const mapStateToProps = state => ({
  user: state.user.logged
});

export default connect(mapStateToProps)(WelcomeContainer);
