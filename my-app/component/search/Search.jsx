import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Search() {
  const [item, setItem] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setItem}
        value={item}
        placeholder="search bar"
      />
      <View style={styles.button}>
        <Button title="search" onPress />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
	button: {
		width: "10%",
	}
});
