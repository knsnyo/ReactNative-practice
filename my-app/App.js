import React from "react";
import { StyleSheet, View } from "react-native"
import SearchScreen from "./screen/searchScreen/SearchScreen";
import SingleScreen from "./screen/singleScreen/SingleScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SingleScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  contents: {
    width: "100%",
    flex: 9,
  },
});
