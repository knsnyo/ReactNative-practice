import React from "react";
import { StyleSheet, View } from "react-native";
import Contents from "./component/contents/Contents";
import Search from "./component/search/Search";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.contents}>
        <Contents />
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
  },
  search: {
    width: "100%",
    flex: 1,
    backgroundColor: "#dddddd",
  },
  contents: {
    width: "100%",
    flex: 9,
  },
});
