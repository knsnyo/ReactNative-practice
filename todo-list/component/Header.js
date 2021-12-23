import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>할 일 목록</Text>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Octicons name="plus-small" color="black" size={24} />
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 16,
    marginLeft: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
  },
  title: {
    color: "#212121",
    fontSize: 32,
    fontWeight: "600",
  },
  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
		backgroundColor: '#eeeeee',
		alignItems: 'center',

    paddingTop: Platform.select({
      ios: 2,
      android: 0,
    }),
    paddingLeft: Platform.select({
      ios: 1,
      android: 0,
    }),
		marginRight: 10,
  },
});
