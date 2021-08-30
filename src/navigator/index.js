import * as React from 'react';
import HomeStackScreen from "./home";
import ArticlesStackScreen from "./articles";
import UsersStackScreen from "./users";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function MyStack() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: '20',
          borderTopLeftRadius: '20',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        },
      }}
    >
      <Tab.Screen name="TabHome" component={HomeStackScreen}
                  options={{
                    tabBarLabel: 'Home',
                     headerShown: false,
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="home" color={color} size={26}/>
                    ),
                  }}
      />
      <Tab.Screen name="TabArticles" component={ArticlesStackScreen}
                  options={{
                    tabBarLabel: 'Articles',
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="post" color={color} size={26}/>
                    ),
                  }}
      />
      <Tab.Screen name="TabUsers" component={UsersStackScreen}
                  options={{
                    tabBarLabel: 'Users',
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="account" color={color} size={26}/>
                    ),
                  }}
      />
    </Tab.Navigator>
  );
}

export default MyStack;
