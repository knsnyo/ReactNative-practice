import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Pressable, Animated, TouchableWithoutFeedback, } from "react-native";
import { debounce } from "lodash";

// 상수 모음
const BUTTON_HEIGHT = 50;
const VIEW_WIDTH = 250;
const VIEW_HEIGHT = BUTTON_HEIGHT * 3;
const GAP = 12;

// 제일 가까운 item 값 찾아주기
const getCenterPosition = offsetY => btnIndex = Math.round(offsetY / BUTTON_HEIGHT) * BUTTON_HEIGHT;
const getCenterPositionFromIndex = index => index * BUTTON_HEIGHT;

// 빈칸 만들어 주는 함수
const fillEmpty = (visibleCount, values) => {
  const fillCount = (visibleCount - 1) / 2;
  for (let i = 0; i < fillCount; i++) {
    values.unshift("");
    values.push("");
  }
  return values;
}

export default () => {
  return (
    <View style={styles.view}>
      <TimePicker
        width={VIEW_WIDTH}
        buttonHeight={BUTTON_HEIGHT}
        visibleCount={3}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const TimePicker = ({ width, buttonHeight, visibleCount }) => {
  
  if (0 === visibleCount % 2) throw new Error("visibleCount must be odd");

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const refs = React.useRef(
    // Array.from({ length: 3}) : 길이 3인 배열 얕은 복사
    // 배열 마다 ref 넣기
    Array.from({ length: 3}).map(() => React.createRef())
  );
  // 스크롤 멈췄을 때
  const getOnScrollStop = index => (offsetY, label) => {
    const CENTER_POSITION = getCenterPosition(offsetY);
    refs.current[index].current.scrollTo({ y: CENTER_POSITION})
  };

  const getScrollProps = index => {
    const onScrollStop = debounce(getOnScrollStop(index), 200, {
      leading: false,
      trailing: true,
    });
    return {
      showsVerticalScrollIndicator: false,
      contentContainerStyle: {
        left: 0,
        right: 0,
        position: "absolute",
      },
      ref: refs.current[index],
      onScrollBeginDrag: _ => {
        onScrollStop.cancel();
      },
      onScrollEndDrag: e => {
        onScrollStop.cancel();
        onScrollStop(e.nativeEvent.contentOffset.y, "onScrollEndDrag");
      },
      onMomentumScrollBegin: _ => {
        onScrollStop.cancel();
      },
      onMomentumScrollEnd: e => {
        onScrollStop.cancel();
        onScrollStop(e.nativeEvent.contentOffset.y, "onMomentumScrollEnd");
      },
    };
  };

  // setter 없는 useState 아마도...
  const [scrollProps] = React.useState(() => Array.from({ length: 3}).map((_, index) => getScrollProps(index)));

  const getOnPress = (scrollViewIndex, buttonIndex) => _ => {
    const targetIndex = buttonIndex -1;
    console.log(targetIndex);
    if (targetIndex < 0) return;
    const CENTER_POSITION = getCenterPositionFromIndex(targetIndex);
    scrollProps[scrollViewIndex].ref.current.scrollTo({ y: CENTER_POSITION});
  };

  return (
    <View style={[styles.container, {width, height: visibleCount * buttonHeight}]}>
      <ScrollView {...scrollProps[0]}>
        {fillEmpty(visibleCount, ["오전", "오후"]).map((item, index) => (
          <Button label={item} onPress={getOnPress(0, index)}/>
        ))}
      </ScrollView>
      <GapView/>
      <ScrollView {...scrollProps[1]}>
        {fillEmpty(visibleCount, ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]).map((item, index) => (
          <Button label={item} onPress={getOnPress(1, index)}/>
        ))}
      </ScrollView>
      <GapView/>
      <ScrollView {...scrollProps[2]}>
        {fillEmpty(visibleCount, ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]).map((item, index) => (
          <Button label={item} onPress={getOnPress(2, index)}/>
        ))}
      </ScrollView>
    </View>
  );
};

const Button = ({ label, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const GapView = ({children}) => {
  return (
    <View style={styles.gap}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  container: {
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button: {
    borderBottomWidth:1,
    borderColor:'red',
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gap: {
    alignItems: "center",
    justifyContent: "center",
    width: GAP,
  },
});
