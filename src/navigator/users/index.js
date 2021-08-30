import * as React from 'react';
import UsersScreen from "../../components/users";

const {createNativeStackNavigator} = require("@react-navigation/native-stack");
const HomeStack = createNativeStackNavigator();

function UsersStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Users" component={UsersScreen}
      />
    </HomeStack.Navigator>
  );
}

export default UsersStackScreen;
