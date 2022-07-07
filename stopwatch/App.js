import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";

export default () => {
  const [timer, setTimer] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const stopwatch = React.useRef(null);
  const [record, setRecord] = React.useState([]);

  const runningHandler = () => {
    setIsActive(!isActive);
    {
      !isActive
        ? (stopwatch.current = setInterval(() => {
            setTimer((time) => time + 1);
          }, 10))
        : clearInterval(stopwatch.current);
    }
  };

  const recordHandler = () => {
    if(0 !== timer) {
      let newRecord = [...record].reverse();
      newRecord.push(viewTime());
      setRecord([...newRecord].reverse());
    }
  };

  const resetHandler = () => {
    clearInterval(stopwatch.current);
    setIsActive(false);
    setTimer(0);
    setRecord([]);
  };

  const viewTime = () => {
    let ms = `0${timer % 60}`.slice(-2);
    let sec = `${Math.floor(timer / 60)}`;
    sec = `0${sec % 60}`.slice(-2);
    let min = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${min}:${sec}.${ms}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ fontSize: 60 }}>{viewTime()}</Text>
      </View>
      {record.length != 0 && (
        <View style={styles.record}>
          <Text style={styles.text}>기록</Text>
        </View>
      )}
      <ScrollView style={styles.scroll}>
        {record.map((data, index) => (
          <View style={styles.record} key={record.length - index}>
            <Text style={{ fontSize: 40 }}>{record.length - index}</Text>
            <Text style={styles.text}>{data}</Text>
          </View>
        ))}
      </ScrollView>
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
  scroll: {
    flex: 1,
    width: "100%",
  },
  text: {
    width: "100%",
    fontSize: 40,
    textAlign: "center",
  },
  record: {
    width: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
