import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, WebView } from "react-native";
let sInterval = 0;
let spInterval = 0;
export default function() {
  const [dots, setDots] = useState([]);
  const [working, setWorking] = useState(false);
  useEffect(() => {
    return () => {
      clearInterval(spInterval);
      clearInterval(sInterval);
      spInterval = 0;
      sInterval = 0;
    };
  }, []);
  if (!working) {
    if (dots.length === 3) {
      setWorking(true);
    }
    clearInterval(spInterval);
    spInterval = 0;
    if (!sInterval) {
      sInterval = setInterval(() => {
        setDots(d => [...d, 1]);
      }, 500);
    }
  }
  if (working) {
    if (!dots.length) setWorking(false);
    clearInterval(sInterval);
    sInterval = 0;
    if (!spInterval) {
      spInterval = setInterval(() => {
        setDots(d => d.slice(0, d.length - 1));
      }, 500);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Loading </Text>
      <View style={styles.dotsContainer}>
        {dots.map(() => (
          <Text style={styles.dots} key={Math.random()}>
            .{" "}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#7D05A1",
    fontSize: 30,
    fontFamily: "8BIT",
    textAlign: "center",
    flex: 2
  },
  dots: {
    color: "#7D05A1",
    fontSize: 30,
    fontFamily: "8BIT",
    textAlign: "center",
    marginLeft: -10,
    marginRight: -10
  },
  container: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 603,
    width: 375
  },
  dotsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  }
});
