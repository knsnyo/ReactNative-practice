import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Content() {
  return (
    <View style={styles.container}>
      <Text>오징어게임</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "gray",
  },
});
