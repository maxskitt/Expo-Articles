import * as React from 'react';
import ArticlesScreen from "../../components/home";
import signUpScreen from "../../components/signUp";
import loginScreen from "../../components/login";
import animationScreen from "../../components/animation";
import flatlistExmple from "../../components/flatlistExmple";
import CardViewScreen from "../../components/card";

const {createNativeStackNavigator} = require("@react-navigation/native-stack");

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={ArticlesScreen}
        options={{}}
      />
      <HomeStack.Screen
        name="signUp"
        component={signUpScreen}
        options={{

          title: 'Sign Up'
        }}
      />
      <HomeStack.Screen
        name="login"
        component={loginScreen}
        options={{
          // headerShown: false,
          title: 'Login'
        }}
      />
      <HomeStack.Screen
        name="animation"
        component={animationScreen}
        showNotification
        options={{
          // headerShown: false,
          // headerTitle: props => <LogoTitle {...props} />,
          headerStyle: {
              backgroundColor: '#f4511e',

          },
        }}
      />
      <HomeStack.Screen
        name="animation1"
        component={flatlistExmple}
        showNotification
        options={{
          // headerShown: false,
          // headerTitle: props => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#f4511e',

          },
        }}
      />
      <HomeStack.Screen
        name="animation2"
        component={CardViewScreen}
        showNotification
        options={{
          // headerShown: false,
          // headerTitle: props => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
    </HomeStack.Navigator>

  );
}

export default HomeStackScreen;
