import React from "react";
import { StatusBar, } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import { BUTTON_HEIGHT, VIEW_WIDTH } from "./values";
import TimePicker from "./components/TimePicker/TimePicker";
import { asPickerFormat } from "./utils";

export default () => {
  const [time, setTime] = React.useState(asPickerFormat(new Date()));
  const alarm = React.useRef(null);

  const alarmHandler = _ => {
    console.log("HI");
    let currentTime;
    alarm.current = setInterval(_ => {
      currentTime = new Date();
      console.log(`time: ${time.toTimeString().slice(0, 5)}`);
      console.log(`currentTime: ${currentTime.toTimeString().slice(0, 5)}`);
      console.log(time.toTimeString().slice(0, 5) == asPickerFormat(currentTime).toTimeString().slice(0, 5));
      if(currentTime == time) clearInterval(alarm.current);
    }, 1000);
  };

  return (
    <View style={styles.view}>
      <Text>{time.toTimeString().slice(0, 5)}</Text>
      <TimePicker
        value={time}
        onChange={setTime}
        width={VIEW_WIDTH}
        buttonHeight={BUTTON_HEIGHT}
        visibleCount={3}
      />
      <Button title="alarm" onPress={alarmHandler}/>
      <StatusBar style="auto"/>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 8,
  },
});
