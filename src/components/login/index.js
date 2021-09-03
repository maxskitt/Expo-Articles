import React, {useState} from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {View, Text} from "react-native";
import styles from "./style";

function ScrollExample() {
  const translationY = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translationY.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });


  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translationY.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
        <Animated.View style={[styles.box, stylez]}/>
      <Animated.ScrollView
        style={styles.scroll}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        <View style={{height: 1000, backgroundColor: 'green'}}></View>
      </Animated.ScrollView>
    </View>
  );
}

export default ScrollExample;
