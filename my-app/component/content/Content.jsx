import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const { height } = Dimensions.get("screen");

export default function Content() {
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setFavorite(!favorite)}>
        <View>
          {favorite ? (
            <Icon name="pushpin" size={height / 15} color="red" />
          ) : (
            <Icon name="pushpino" size={height / 15} color="red" />
          )}
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>오징어게임</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
  },
  text: {
    flex: 8,
    fontSize: 20,
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: height / 15,
  },
});
