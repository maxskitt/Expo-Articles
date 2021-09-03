import React, {useEffect, useRef, useState} from 'react';
import {Button, ScrollView, Text, View, useWindowDimensions, Dimensions} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import styles from "./style";
import BottomSheet from 'reanimated-bottom-sheet';
import globalStyles from "../../../styles/global";
import {PanGestureHandler, TapGestureHandler} from "react-native-gesture-handler";


function animationScreen({navigation}) {

  const [rotate, setRotate] = useState(true);
  const [text, setText] = useState(true);
  const offset = useSharedValue(0);
  const rotation = useSharedValue(0);
  const sheetRef = useRef(null);
  const pressed = useSharedValue(false);
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const {height, width} = useWindowDimensions();
  const targetRef = useRef();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const renderContent = () => (
    <View
      style={{
        backgroundColor: '#FFFBDB',
        padding: 16,
        height: "100%",
      }}
    >
      <View style={globalStyles.containerGrabber}>
        <View style={globalStyles.grabber}></View>
      </View>
      <Text>Swipe down to close</Text>
    </View>
  );

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(offset.value * 255)}],
    };
  });

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [{scale: pressed.value ? 1.2 : 1}],
    };
  });

  const uasTranslate = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
    },
  });

  const eventHandlerTranslation = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.offsetX = x.value;
      ctx.offsetY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.offsetX + event.translationX;
      y.value = ctx.offsetY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      // x.value = withSpring(startingPosition);
      // y.value = withSpring(startingPosition);
    },
  });

  return (
    <>
      <View style={styles.root}>
        <View>
          <Text>Transition</Text>
        </View>
        <Animated.View style={[styles.box, defaultSpringStyles]}/>
        <Animated.View style={[styles.box, customSpringStyles]}/>
        <Button onPress={() => {
          offset.value = withSpring(Math.random());
        }} title="Move"/>
        <View>
          <Text>Rotate</Text>
        </View>
        <Animated.View style={[styles.box, animatedStyle]}/>
        <Button
          title="Rotate"
          onPress={() => {
            rotation.value = withRepeat(withTiming(10), 2, (rotate) => {
              setRotate(!rotate)
            })
          }}
        />
        <View>
          <Text>Events</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          {/*<View>*/}
          {/*  <TapGestureHandler onGestureEvent={eventHandler}>*/}
          {/*    <Animated.View style={[styles.ball, uas]}/>*/}
          {/*  </TapGestureHandler>*/}
          {/*</View>*/}
            <PanGestureHandler onGestureEvent={eventHandlerTranslation}>
              <Animated.View style={[styles.balls, uasTranslate]}/>
            </PanGestureHandler>
        </View>
        <View onLayout={(event) => {
          let {x, y, width, height} = event.nativeEvent.layout;
        }}>
        </View>
        <ScrollView>
          <Text>WidthGlobal: {windowWidth}</Text>
          <Text>HeightGlobal: {windowHeight}</Text>
          <Text onChange={(isVisible) => checkVisible(isVisible)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={{backgroundColor: 'red', opacity: true}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </ScrollView>
      </View>

      {/*<BottomSheet*/}
      {/*  ref={sheetRef}*/}
      {/*  snapPoints={['20%', '15%', '10%']}*/}
      {/*  borderRadius={10}*/}
      {/*  renderContent={renderContent}*/}
      {/*/>*/}
    </>
  );
}

export default animationScreen;



