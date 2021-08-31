import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Input} from "react-native-elements";
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/FontAwesome";
import handleSignUp from "../../saga/auth/api";

function loginScreen({navigation}) {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <SafeAreaView style={{padding: 16}}>
      <View>
        <Input
          placeholder='Email'
        />
        <Input
          placeholder='Password'
          secureTextEntry={passwordVisible}
          rightIcon={
            <TouchableOpacity onPress={() => {
              setPasswordVisible(!passwordVisible)
            }}>
              <Icon
                name='eye'
                size={24}
                color='black'
              />
            </TouchableOpacity>
          }
        />

        <View style={{backgroundColor: "green", alignItems: "center"}}>
          <TouchableOpacity onPress={() =>
            handleSignUp()
          }>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default loginScreen;
