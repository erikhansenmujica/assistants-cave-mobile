import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        Welcome to {props.user.username}'s assistant cave.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation("Courses")}
      >
        <Text style={styles.buttonContent}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 20,
    fontFamily: "8BIT",
    marginBottom: 10,
    marginTop: 260
  },
  container: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 603,
    width: 375
  },
  button: { borderColor: "white", borderWidth: 3 },
  buttonContent: {
    color: "white",
    fontFamily: "8BIT",
    fontSize: 15,
    margin: 10
  }
});
