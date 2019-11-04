import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
let sInterval = 0;
let spInterval = 0;
export default function() {
  const [dots, setDots] = useState([]);
  const [working, setWorking] = useState(false);
  const dotAdder = () => {
    let arr = JSON.parse(JSON.stringify(dots));
    arr.push(1);
    setDots(arr);
  };

  const dotRemover = () => {
    setDots(dots.slice(0, dots.length - 1));
  };
  console.log(sInterval, dots);
  if (!working) {
    if (dots.length === 3) setWorking(true);
    clearInterval(spInterval);
    spInterval = 0;
    !sInterval && (sInterval = setInterval(dotAdder, 1000));
  }

  if (working) {
    if (!dots.length) setWorking(false);
    clearInterval(sInterval);
    sInterval = 0;
    !spInterval && (spInterval = setInterval(dotRemover, 1000));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Loading </Text>
      {dots.map(() => (
        <Text style={styles.subtitle}>. </Text>
      ))}
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
  }
});
