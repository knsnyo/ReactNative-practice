import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function SingleScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.images}>
          <Text>이미지</Text>
        </View>
        <View style={styles.info}>
          <Text>제목</Text>
          <Text>배급사</Text>
          <Text>평점</Text>
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
});
