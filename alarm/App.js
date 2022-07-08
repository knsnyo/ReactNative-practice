import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.section}>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.section}>
          <Text>시</Text>
        </View>
        <View style={styles.section}>
          <Text>분</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.section}>
          <Text>오전/오후</Text>
        </View>
        <View style={styles.section}>
          <Text>00</Text>
        </View>
        <Text>:</Text>
        <View style={styles.section}>
          <Text>00</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Button title="START" onPress/>
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
  row: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  section: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
