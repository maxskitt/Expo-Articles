import * as React from 'react';
import ArticlesScreen from "../../components/home";
const {createNativeStackNavigator} = require("@react-navigation/native-stack");

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={ArticlesScreen}
        options={{
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
