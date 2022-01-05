import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from "../App";

export default (props) => {
  const {state, dispatch} = useContext(Context);

	return(
		<TouchableOpacity
		  style={styles.button}
			onPress={() => dispatch({type: `${props.value}`})}>
			<Text>{props.value}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
		margin: 10,
		flex: 1,
		width: '100%',
		height: '100%',
		borderRadius: 10,
  }
})