import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export default function Content() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>오징어게임</Text>
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
	text: {
		fontSize: height / 15,
		textAlignVertical: "center",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		height: height / 15,
	},
});
