import React from "react";
import { View, StyleSheet } from "react-native";
import Content from "../content/Content";

export default function Contents() {
  return (
    <View style={styles.container}>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
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
});
