import React, { useContext } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Context } from "../App"

export default () => {
	const {state, dispatch} = useContext(Context)

	return(
		<View style={styles.container}>
			<Text style={styles.formulaText}>{state.formula}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginLeft: "auto",
	},
	formulaText: {
    fontSize: 25,
    fontWeight: "bold",
	}
})