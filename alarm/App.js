import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, Pressable, } from "react-native";

const BUTTON_SIZE = 66;

const getCenterPosition = (offsetY) => {
  const btnIndex = Math.round(offsetY / BUTTON_SIZE);
  return btnIndex * BUTTON_SIZE;
};

const getCenterPositionFromIndex = (index) => {
  return index * BUTTON_SIZE;
}

export default function App() {
  const ampm = [" ", "오전", "오후", "  ",];
  const hour = [" ","12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "  ",];
  const min = [" ","00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "  ",];



  const getOnPress = (scrollViewIdx, btnIdx) => {
    const targetIdx = btnIdx - 1;
    if(targetIdx < 0) return;
    const CENTER_POSITION = getCenterPositionFromIndex(targetIdx);
    //scrollProps[scrollViewIdx].ref.current.scrollTo({y: CENTER_POSITION});
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}/>
      <View style={styles.row}>
        <View style={styles.section}>
          <ScrollView style={styles.scroll}>
            {ampm.map((data, index) => (
              <Pressable key={`ampm${data}`} style={styles.item} onPress={getOnPress(index)}>
                <Text style={styles.text}>{data}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <ScrollView style={styles.scroll}>
            {hour.map((data) => (
              <Pressable key={`hour${data}`} style={styles.item}>
                <Text style={styles.text}>{data}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <Text>:</Text>
        <View style={styles.section}>
          <ScrollView style={styles.scroll}>
            {min.map((data) => (
              <Pressable key={`min${data}`} style={styles.item}>
                <Text style={styles.text}>{data}</Text>
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
    height: BUTTON_SIZE * 3,
  },
  section: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "33%"
  },
  text: {
    textAlign: "center",
  },
  scroll: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  item: {
    height: BUTTON_SIZE,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#eee",
    //backgroundColor: "#ddd",
    justifyContent: "center",
  }
});
