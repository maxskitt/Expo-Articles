import * as React from 'react';
import UsersScreen from "../../components/users";
import logoutModal from "../../components/modal/logout";

const {createNativeStackNavigator} = require("@react-navigation/native-stack");
const UsersStack = createNativeStackNavigator();

function UsersStackScreen() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Group>
        <UsersStack.Screen name="Users" component={UsersScreen}
        />
      </UsersStack.Group>
      <UsersStack.Group screenOptions={{presentation: 'modal'}}>
        <UsersStack.Screen name="ModalLogout"
                           component={logoutModal}
                           options={{
                             headerShown: false,
                           }}
        />
      </UsersStack.Group>
    </UsersStack.Navigator>
  );
}

export default UsersStackScreen;
