import React from "react";
import { StatusBar, } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { BUTTON_HEIGHT, VIEW_WIDTH } from "./values";
import TimePicker from "./components/TimePicker/TimePicker";
import { asPickerFormat } from "./utils";

export default () => {
  const [time, setTime] = React.useState(asPickerFormat(new Date()));

  return (
    <View style={styles.view}>
      <Text>{time.toTimeString()}</Text>
      <TimePicker
        width={VIEW_WIDTH}
        buttonHeight={BUTTON_HEIGHT}
        visibleCount={3}
      />
      <StatusBar style="auto" />
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
