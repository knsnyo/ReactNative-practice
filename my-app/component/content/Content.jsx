import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { height } = Dimensions.get("screen");

export default function Content() {
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setFavorite(!favorite)}>
        <View>
          {favorite ? (
            <Icon name="star" size={height / 15} color="#ffff00" />
          ) : (
            <Icon name="star-o" size={height / 15} color="#ffff00" />
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
    fontSize: height / 15,
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: height / 15,
  },
});
