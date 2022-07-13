import React from "react";
import { StyleSheet, Text, View, ScrollView, Animated, TouchableWithoutFeedback } from 'react-native';
import { debounce } from "lodash";
import { fillEmpty, getCenterPosition, getCenterPositionFromIndex } from "../../utils";
import { AMPM, BUTTON_HEIGHT, GAP, HOUR, MINUTE } from "../../values";

const TimePicker = ({ width, buttonHeight, visibleCount }) => {  
  if (0 === visibleCount % 2) throw new Error("visibleCount must be odd");

	// 배열 마다 ref 넣기
  const refs = React.useRef(
    // Array.from({ length: 3}) : 길이 3인 배열 얕은 복사
    Array.from({ length: 3}).map(_ => React.createRef())
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
    if (targetIndex < 0) return;
    const CENTER_POSITION = getCenterPositionFromIndex(targetIndex);
    scrollProps[scrollViewIndex].ref.current.scrollTo({ y: CENTER_POSITION});
  };

  return (
    <View style={[styles.container, {width, height: visibleCount * buttonHeight}]}>
      <ScrollView {...scrollProps[0]}>
        {fillEmpty(visibleCount, AMPM).map((item, index) => (
          <Button label={item} onPress={getOnPress(0, index)} key={index}/>
        ))}
      </ScrollView>
      <GapView/>
      <ScrollView {...scrollProps[1]}>
        {fillEmpty(visibleCount, HOUR).map((item, index) => (
          <Button label={item} onPress={getOnPress(1, index)} key={index}/>
        ))}
      </ScrollView>
      <GapView/>
      <ScrollView {...scrollProps[2]}>
        {fillEmpty(visibleCount, MINUTE).map((item, index) => (
          <Button label={item} onPress={getOnPress(2, index)} key={index}/>
        ))}
      </ScrollView>
      <OverlayView/>
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
};

const GapView = ({children}) => {
  return (
    <View style={styles.gap}>
      {children}
    </View>
  )
};

const OverlayView = _ => {
  return (
    <View
      pointerEvents="none"
      style={[StyleSheet.absoluteFill, styles.overlay]}>
        <View style={styles.overlayVisibleView}>
          <View style={styles.overlayVisibleViewInner}/>
          <GapView/>
          <View style={styles.overlayVisibleViewInner}/>
          <GapView>
            <Text style={styles.buttonLabel}>:</Text>
          </GapView>
          <View style={styles.overlayVisibleViewInner}/>
        </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button: {
    //borderBottomWidth:1,
    //borderColor:'red',
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
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayVisibleView: {
    width: '100%',
    height: BUTTON_HEIGHT,
    flexDirection: 'row',
  },
  overlayVisibleViewInner: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#c8c8c8',
  },
});

export default TimePicker;