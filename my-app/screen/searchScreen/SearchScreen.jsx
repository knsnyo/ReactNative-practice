import React from "react";
import { StyleSheet, View } from "react-native";
import Search from "../../component/search/Search";
import Contents from "../../component/contents/Contents";

export default function SearchScreen() {
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
		width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  search: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  contents: {
    width: "100%",
    flex: 9,
  },
});
