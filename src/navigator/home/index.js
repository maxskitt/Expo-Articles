import * as React from 'react';
import ArticlesScreen from "../../components/home";
import signUpScreen from "../../components/signUp";
import loginScreen from "../../components/login";
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
      <HomeStack.Screen
        name="signUp"
        component={signUpScreen}
        options={{ title: 'Sign Up' }}
      />
      <HomeStack.Screen
        name="login"
        component={loginScreen}
        options={{ title: 'Login' }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
