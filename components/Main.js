import React, { useState, useEffect } from "react";
import Login from "./Login";
import { connect } from "react-redux";
import Welcome from "./Welcome";
import { checkIfLogged } from "../store/actions/user";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Courses from "./Courses";
import { MaterialCommunityIcons, Entypo, Foundation } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logout } from "../store/actions/user";
import NewCourse from "./Courses/NewCourse";
import SelectedCourse from "./Courses/SelectedCourse";
function Main(props) {
  [load, setLoad] = useState(false);
  useEffect(() => {
    !Object.keys(props.user).length &&
      props.checkIfLogged().then(() => setLoad(true));

    !load && Object.keys(props.user).length && setLoad(true);
  });

  return load ? (
    Object.keys(props.user).length ? (
      <Navigation />
    ) : (
      <Login />
    )
  ) : (
    <Text>Loading...</Text>
  );
}
const mapStateToProps = state => ({
  user: state.user.logged
});
const mapDispatchToProps = dispatch => ({
  checkIfLogged: () => dispatch(checkIfLogged())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
const AppNavigator = createStackNavigator(
  {
    Home: Welcome,
    Courses,
    NewCourse,
    SelectedCourse
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: "The Cave",
      headerTitleStyle: {
        fontFamily: "8BIT",
        fontSize: 15
      },
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#000"
      },
      headerRight: (
        <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
          <MaterialCommunityIcons name="logout" size={32} color="white" />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginLeft: 15 }}
        >
          {navigation.state.routeName === "Home" ? (
            <Foundation name="crown" size={32} color="white" />
          ) : (
            <Entypo name="back" size={32} color="white" />
          )}
        </TouchableOpacity>
      )
    })
  }
);
const Navigation = createAppContainer(AppNavigator);
