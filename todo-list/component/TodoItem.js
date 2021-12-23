import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SwipeItem, SwipeButtonContainer } from "react-native-swipe-item";
import { AntDesign } from "@expo/vector-icons";

export default function TodoItem({ title, done }) {
	const [todoDone, setTodoDone]=useState(done);

  const editButton = (
    <SwipeButtonContainer style={styles.editButton}>
      <TouchableOpacity>
        <Text>EDIT</Text>
      </TouchableOpacity>
    </SwipeButtonContainer>
  );
  const deleteButton = (
    <SwipeButtonContainer style={styles.deleteButton}>
      <TouchableOpacity>
        <Text>DELETE</Text>
      </TouchableOpacity>
    </SwipeButtonContainer>
  );

  return (
    <SwipeItem
      style={styles.button}
      swipeContainerStyle={styles.swipeContainerStyle}
      leftButtons={editButton}
      rightButtons={deleteButton}
    >
      <Text style={styles.title} onPress={()=>setTodoDone(!todoDone)}>
			  {title}    <AntDesign name={todoDone ? "checkcircle" : "checkcircleo"} size={24} color="black" />
		  </Text>
    </SwipeItem>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 100,
    alignSelf: "center",
    marginVertical: 5,
  },
  swipeContentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#e3e3e3",
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    color: "#424242",
    textAlign: "center",
  },
  editButton: {
    alignSelf: "center",
    aspectRatio: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#cccccc",
  },
  deleteButton: {
    backgroundColor: "#ff0000",
    alignSelf: "center",
    aspectRatio: 1,
    flexDirection: "column",
    padding: 10,
  },
});
