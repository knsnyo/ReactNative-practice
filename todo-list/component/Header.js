import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 16,
    marginLeft: 16,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
  },
});
