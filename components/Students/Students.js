import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

export default function(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Students</Text>
      <View style={styles.studentsContainer}>
        <ScrollView>
          <View style={styles.studentsScrollContainer}>
            {props.students[0] ? (
              props.students.map(student => (
                <TouchableOpacity style={styles.cards} key={student.id}>
                  <Text style={styles.cardsContent}>{student.name}</Text>
                  <Image
                    source={{
                      uri: `data:image/gif;base64,${student.picture &&
                        student.picture}`
                    }}
                    style={{
                      height: 160,
                      objectFit: "contain"
                    }}
                  />
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.cardsContent}>There's no students</Text>
            )}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          props.goSomewhere("NewStudent", { courseId: props.courseId })
        }
      >
        <Text style={styles.buttonContent}>Add student</Text>
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
  studentsContainer: {
    height: 300
  },
  studentsScrollContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  button: { borderColor: "white", borderWidth: 3 },
  cards: {
    borderColor: "white",
    borderWidth: 3,
    height: 200,
    width: 150,
    margin: 5,
    overflow: "hidden"
  },
  buttonContent: {
    color: "white",
    fontFamily: "8BIT",
    fontSize: 15,
    margin: 10
  },
  cardsContent: {
    color: "white",
    fontFamily: "8BIT",
    fontSize: 15,
    margin: 10,
    textAlign: "center"
  }
});
