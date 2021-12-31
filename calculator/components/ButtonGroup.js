import React, { useContext } from "react";
import { View, Button, TouchOpacity, StyleSheet } from "react-native";
import { Context } from "../App";

export default () => {
  const {state, dispatch} = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Button title="7" onPress={() => dispatch({type: '7'})}/>
        <Button title="8" onPress={() => dispatch({type: '8'})}/>
        <Button title="9" onPress={() => dispatch({type: '9'})}/>
        <Button title="÷" onPress={() => dispatch({type: '÷'})}/>
      </View>
			<View style={styles.col}>
        <Button title="4" onPress={() => dispatch({type: '4'})}/>
        <Button title="5" onPress={() => dispatch({type: '5'})}/>
        <Button title="6" onPress={() => dispatch({type: '6'})}/>
        <Button title="×" onPress={() => dispatch({type: '×'})}/>
      </View>
			<View style={styles.col}>
        <Button title="1" onPress={() => dispatch({type: '1'})}/>
        <Button title="2" onPress={() => dispatch({type: '2'})}/>
        <Button title="3" onPress={() => dispatch({type: '3'})}/>
        <Button title="-" onPress={() => dispatch({type: '―'})}/>
      </View>
			<View style={styles.col}>
        <Button title="C" onPress={() => dispatch({type: 'C'})}/>
        <Button title="0" onPress={() => dispatch({type: '0'})}/>
        <Button title="=" onPress={() => dispatch({type: '='})}/>
        <Button title="+" onPress={() => dispatch({type: '+'})}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  col: {
    flex: 1,
    flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: "center",
		margin: 10,
  },
});
