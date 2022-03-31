import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

let imagePath = require("./test.jpg");

export default function SingleScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.images}>
          <Image
          style={{width: "100%", height: "100%"}}
          source={imagePath}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>제목</Text>
          <Text style={styles.text}>배급사</Text>
          <Text style={styles.text}>별점</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text>내용</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  body: {
    flex: 8,
    width: "100%",
    justifyContent: "flex-start",
  },
  images: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flex: 8,
    justifyContent: "space-around",
  },
  text: {
    textAlign: "center",
  }
});
