import React, { useState } from "react";
import { StyleSheet, TextInput, View, Dimensions } from "react-native";

export default function Search() {
	const fullWidth = Dimensions.get("window").width;
	const fullHeight = Dimensions.get("window").height;

	const [item, setItem] = useState("");
	return (
		<View style={styles.container}>
			<TextInput
			style={styles.input}
			onChangeText={setItem}
			value={item}
			placeholder="search bar"
			/>
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
	input: {
		width: "100%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
	}
});
