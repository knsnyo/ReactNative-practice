import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Context } from "../App";

export default () => {
  const {state, dispatch} = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{state.result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginLeft: "auto",
	},
  resultText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
