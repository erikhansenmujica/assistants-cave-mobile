import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{props.course.name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          props.goSomewhere("Students", { courseId: props.course.id })
        }
      >
        <Text style={styles.buttonContent}> Students </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonContent}> Repos </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonContent}>
          Delete {props.course.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  subtitle: {
    color: "#7D05A1",
    fontSize: 30,
    fontFamily: "8BIT",
    textAlign: "center"
  },
  container: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 603,
    width: 375
  },
  subtitlesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 130
  },
  button: { borderColor: "#22FD0D", borderWidth: 3 },
  buttonContent: {
    color: "#22FD0D",
    fontFamily: "8BIT",
    fontSize: 15,
    margin: 10
  },
  deleteButtonContent: {
    color: "red",
    fontFamily: "8BIT",
    fontSize: 15,
    margin: 10
  },
  deleteButton: { borderColor: "red", borderWidth: 3 }
});
