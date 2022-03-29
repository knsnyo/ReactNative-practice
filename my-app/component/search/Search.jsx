import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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
        <TouchableOpacity>
          <View>
            <Icon name="search" size={30}/>
          </View>
        </TouchableOpacity>
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
    margin: 0,
  },
  input: {
    flex: 9,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
	button: {
    flex: 1,
		width: "10%",
	}
});
