import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
} from "react-native";
import { debounce } from "lodash";
import {
  fillEmpty,
  getCenterPositionFromIndex,
  getIndexFromOffset,
} from "../../utils";
import { AMPM, BUTTON_HEIGHT, GAP, HOUR, MINUTE } from "../../values";
import { Pressable } from "react-native";

const isPM = date => date.getHours() >= 12;
const ITEMS = [
  {
    key: "ampm",
    items: AMPM,
  },
  {
    key: "hour",
    items: HOUR,
  },
  {
    key: "min",
    items: MINUTE,
  },
];

const TimePicker = ({ value, onChange, width, buttonHeight, visibleCount }) => {
  if (0 === visibleCount % 2) throw new Error("visibleCount must be odd");
  const dateString = value.toTimeString();

  // 배열 마다 ref 넣기
  const refs = React.useRef(
    // Array.from({ length: 3}) : 길이 3인 배열 얕은 복사
    Array.from({ length: 3 }).map(_ => React.createRef())
  );
  const animatedValues = React.useRef(
    Array.from({ length: 3 }).map(_ => new Animated.Value(0))
  );

  const getScrollProps = (index, key, items) => {
    const onScrollStop = debounce(
      (offsetY) => {
        const date = new Date(value.getTime());
        const itemIndex = getIndexFromOffset(offsetY);

        if ("ampm" === key) {
          const currValueIsPM = isPM(date);
          const nextValueIsPM = AMPM[itemIndex] === "오후";
          if (currValueIsPM && !nextValueIsPM) {
            date.setHours(date.getHours() - 12);
          }
          if (!currValueIsPM && nextValueIsPM) {
            date.setHours(date.getHours() + 12);
          }
        }

        if ("hour" === key) {
          const hour = Number(HOUR[itemIndex]);

          if (isPM(date)) {
            const isNoon = hour === 12;
            if (isNoon) {
              date.setHours(12);
            } else {
              date.setHours(hour + 12);
            }
          } else {
            const isMidnight = hour === 12;
            if (isMidnight) {
              date.setHours(0);
            } else {
              date.setHours(hour);
            }
          }
        }
        if ("min" === key) {
          date.setMinutes(MINUTE[itemIndex]);
        }
        onChange(date);
      },
      200,
      {
        leading: false,
        trailing: true,
      }
    );

    return {
      key,
      index,
      items,
      showsVerticalScrollIndicator: false,
      contentContainerStyle: {
        left: 0,
        right: 0,
        position: "absolute",
      },
      ref: refs.current[index],
      onScrollBeginDrag: (_) => {
        onScrollStop.cancel();
      },
      onScrollEndDrag: (e) => {
        onScrollStop.cancel();
        onScrollStop(e.nativeEvent.contentOffset.y);
      },
      onMomentumScrollBegin: (_) => {
        onScrollStop.cancel();
      },
      onMomentumScrollEnd: (e) => {
        onScrollStop.cancel();
        onScrollStop(e.nativeEvent.contentOffset.y);
      },
      getOnPress: (item) => (_) => {
        const targetIndex = items.indexOf(item);
        if (-1 === targetIndex) return;

        const CENTER_POSITION = getCenterPositionFromIndex(targetIndex);

        onScrollStop(CENTER_POSITION);
        onScrollStop.flush();
      },
      animatedValue: animatedValues.current[index],
      scrollEventThrottle: 16,
    };
  };

  const scrollProps = React.useMemo(
    (_) =>
      ITEMS.map(({ key, items }, index) => getScrollProps(index, key, items)),
    [dateString]
  );

  React.useEffect(
    (_) => {
      const ampm = isPM(value) ? "오후" : "오전";
      const hour = String(
        isPM(value) ? value.getHours() - 12 : value.getHours()
      ).padStart(2, "0");
      const minute = String(value.getMinutes()).padStart(2, "0");

      const matchIndex = [
        AMPM.indexOf(ampm),
        HOUR.indexOf(hour),
        MINUTE.indexOf(minute),
      ];

      scrollProps.forEach((props, index) => {
        props.ref.current.scrollTo({
          y: getCenterPositionFromIndex(matchIndex[index]),
        });
      });
    },
    [dateString]
  );

  const getOnPress = (scrollViewIndex, buttonIndex) => (_) => {
    const targetIndex = buttonIndex - 1;
    if (targetIndex < 0) return;
    const CENTER_POSITION = getCenterPositionFromIndex(targetIndex);
    scrollProps[scrollViewIndex].ref.current.scrollTo({ y: CENTER_POSITION });
  };

  return (
    <View
      style={[styles.container, { width, height: visibleCount * buttonHeight }]}
    >
      {scrollProps.map((props, scrollViewIndex) => {
        const renderItems = fillEmpty(visibleCount, props.items);
        return (
          <ScrollView
            {...props}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: props.animatedValue } } }],
              { useNativeDriver: false }
            )}
          >
            {renderItems.map((item, index) => {
              const position = getCenterPositionFromIndex(
                props.items.indexOf(item)
              );

              const opacity = props.animatedValue.interpolate({
                inputRange: [
                  position - BUTTON_HEIGHT,
                  position - BUTTON_HEIGHT / 2,
                  position,
                  position + BUTTON_HEIGHT / 2,
                  position + BUTTON_HEIGHT,
                ],
                outputRange: [0.2, 0.5, 1, 0.5, 0.2],
                extrapolate: "clamp",
              });

              return (
                <Button
                  key={item}
                  style={{ opacity }}
                  label={item}
                  onPress={props.getOnPress(item)}
                />
              );
            })}
          </ScrollView>
        );
      })}
      <OverlayView />
    </View>
  );
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = ({ label, onPress }) => {
  return (
    <AnimatedPressable onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>
    </AnimatedPressable>
  );
};

const GapView = ({ children }) => {
  return <View style={styles.gap}>{children}</View>;
};

const OverlayView = (_) => {
  return (
    <View
      pointerEvents="none"
      style={[StyleSheet.absoluteFill, styles.overlay]}
    >
      <View style={styles.overlayVisibleView}>
        <View style={styles.overlayVisibleViewInner} />
        <GapView />
        <View style={styles.overlayVisibleViewInner} />
        <GapView>
          <Text style={styles.buttonLabel}>:</Text>
        </GapView>
        <View style={styles.overlayVisibleViewInner} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: "center",
    flexDirection: "row",
  },
  button: {
    //borderBottomWidth:1,
    //borderColor:'red',
    height: BUTTON_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    fontWeight: "bold",
  },
  overlay: {
    alignItems: "center",
    justifyContent: "center",
  },
  gap: {
    alignItems: "center",
    justifyContent: "center",
    width: GAP,
  },
  overlay: {
    alignItems: "center",
    justifyContent: "center",
  },
  overlayVisibleView: {
    width: "100%",
    height: BUTTON_HEIGHT,
    flexDirection: "row",
  },
  overlayVisibleViewInner: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#c8c8c8",
  },
});

export default TimePicker;
