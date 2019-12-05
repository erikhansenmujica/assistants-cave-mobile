import React from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
export default function({
  name,
  onChangeName,
  onPress,
  onChangeGitusername,
  gitusername,
  pickImage,
  picture
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Student</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.subtitle}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.subtitle}>Github:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeGitusername(text)}
          value={gitusername}
        />
      </View>
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.button}> Select picture </Text>
      </TouchableOpacity>
      <Image
        source={{ uri: `data:image/gif;base64,${picture}` }}
        style={{ width: 40, height: 40 }}
      />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}> G0! </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 270,
    textAlign: "center",
    fontFamily: "8BIT",
    color: "white",
    marginBottom: 20
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontFamily: "8BIT",
    marginBottom: 10,
    marginTop: 30
  },
  container: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 603
  },
  title: {
    color: "#7D05A1",
    fontSize: 30,
    fontFamily: "8BIT"
  },
  button: {
    color: "white",
    fontSize: 25,
    fontFamily: "8BIT",
    backgroundColor: "#7D05A1"
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1
  }
});
