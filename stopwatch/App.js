import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default () => {
  const [running, setRunning] = React.useState(false);
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);

  const runningHandler = () => {
    setRunning(!running);
    if (running) {
      setInterval(() => {
        console.log("hello");
        setSecond(second + 1);
      }, 1000);
    } 
  };

  const recordHandler = () => {
    running && console.log("기록");
  };

  const resetHandler = () => {
    setRunning(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ fontSize: 60 }}>
          {hour} : {minute} : {second}
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button title={running ? "stop" : "start"} onPress={runningHandler} />
        <Button title="record" onPress={recordHandler} />
        <Button title="reset" onPress={resetHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGroup: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
