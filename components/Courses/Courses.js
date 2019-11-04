import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
export default function(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Courses</Text>
      <View style={styles.coursesContainer}>
        <ScrollView>
          {props.courses.map(course => (
            <TouchableOpacity
              style={styles.button}
              key={course.id}
              onPress={() =>
                props.goSomewhere("SelectedCourse", { courseId: course.id })
              }
            >
              <Text style={styles.buttonContent}>{course.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.goSomewhere("NewCourse")}
      >
        <Text style={styles.buttonContent}>Add new course</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 35,
    fontFamily: "8BIT"
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
  coursesContainer: {
    height: 300
  },
  button: { borderColor: "white", borderWidth: 3 },
  buttonContent: {
    color: "white",
    fontFamily: "8BIT",
    fontSize: 15,
    margin: 10
  }
});
