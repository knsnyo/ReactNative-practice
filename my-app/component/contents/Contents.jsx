import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Content from "../content/Content";

export default function Contents() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Content />
        </View>
        <View style={styles.content}>
          <Content />
        </View>
        <View style={styles.content}>
          <Content />
        </View>
        <View style={styles.content}>
          <Content />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
});
