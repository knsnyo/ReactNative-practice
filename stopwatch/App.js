import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default () => {
  const [timer, setTimer] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const stopwatch = React.useRef(null);

  const runningHandler = () => {
    setIsActive(!isActive);
    {
      !isActive ?
      (stopwatch.current = setInterval(() => {
        setTimer((time) => time + 1);
      }, 10))
      :
      (clearInterval(stopwatch.current));
    }
  };

  const recordHandler = () => {
    console.log(viewTime());
  };

  const resetHandler = () => {
    clearInterval(stopwatch.current);
    setIsActive(false);
    setTimer(0);
  };

  const viewTime = () => {
    let ms = `0${(timer % 60)}`.slice(-2);
    let sec = `${Math.floor(timer / 60)}`;
    sec = `0${sec % 60}`.slice(-2);
    let min = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${min}:${sec}:${ms}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ fontSize: 60 }}>{viewTime()}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button title={isActive ? "pause" : "start"} onPress={runningHandler} />
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
