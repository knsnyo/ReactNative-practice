import React from "react";
import { View, Button, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

export default () => {

  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <CustomButton value={7}/>
        <CustomButton value={8}/>
        <CustomButton value={9}/>
        <CustomButton value={'÷'}/>
      </View>
			<View style={styles.col}>
        <CustomButton value={4}/>
        <CustomButton value={5}/>
        <CustomButton value={6}/>
        <CustomButton value={'×'}/>
      </View>
			<View style={styles.col}>
        <CustomButton value={1}/>
        <CustomButton value={2}/>
        <CustomButton value={3}/>
        <CustomButton value={'-'}/>
      </View>
			<View style={styles.col}>
        <CustomButton value={'C'}/>
        <CustomButton value={0}/>
        <CustomButton value={'='}/>
        <CustomButton value={'+'}/>
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
