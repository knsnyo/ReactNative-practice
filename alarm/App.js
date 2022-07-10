import { StyleSheet, Text, View, Button, ScrollView, Pressable, } from "react-native";

export default function App() {
  const ampm = [" ", "오전", "오후", " ",];
  const hour = [" ","12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", " ",];
  const min = [" ","00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", " ",];
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.section}>
          <ScrollView style={styles.scroll}>
            {ampm.map((data) => (
              <Pressable style={styles.item}>
                <Text>{data}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <ScrollView>
            {hour.map((data) => (
              <Pressable>
                <Text>{data}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <Text>:</Text>
        <View style={styles.section}>
          <ScrollView>
            {min.map((data) => (
              <Pressable>
                <Text>{data}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.container}>
        <Button title="START" onPress />
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
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 99,
  },
  section: {
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "33%"
  },
  text: {
    textAlign: "center",
  },
  scroll: {
    backgroundColor: "#ddd",
    height: "100%",
  },
  item: {
    height: 33,
    //backgroundColor: "#ddd",
  }
});
