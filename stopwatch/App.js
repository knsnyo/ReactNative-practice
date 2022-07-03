import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default () => {
  let timer = 0;
  let interval;
  let isStop = true;
  const [time, setTime] = React.useState("00:00:00");

  const runningHandler = () => {
    isStop ? isStop = false : isStop = true;
    console.log(`isStop? : ${isStop}`);
    if(!isStop) {
      interval = setInterval(() => {
        timer += 1;
        let min = Math.floor(timer / 60);
        let hour = Math.floor(min / 60);
        let sec = timer % 60;
        min %= 60;
    
        hour < 10 && (hour = "0" + hour);
        min < 10 && (min = "0" + min);
        sec < 10 && (sec = "0" + sec);
    
        setTime(`${hour}:${min}:${sec}`);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  };

  const recordHandler = () => {
    running && console.log(`기록: ${time}`);
  };

  const resetHandler = () => {
    console.log("reset");
    isStop = true;
    setTime("00:00:00");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ fontSize: 60 }}>{time}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button title={isStop ? "start" : "stop"} onPress={runningHandler} />
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
