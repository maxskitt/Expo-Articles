import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CheckBox, Input} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {SafeAreaView} from 'react-native-safe-area-context';
import {useLinkTo} from '@react-navigation/native';
import signInWithGoogleAsync from "../../saga/auth/api";

function signUpScreen() {

  const linkTo = useLinkTo();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [check, setCheck] = useState(true);

  return (
    <SafeAreaView style={{padding: 16}}>
      <View>
        <Input
          placeholder='Name'
        />
        <Input
          placeholder='Email'
        />
        <Input
          placeholder="Password"
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
        <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
          <View>
            <CheckBox
              center
              checked={check}
              onPress={() => {
                setCheck(!check)
              }}
            />
            </View>
          <View>
            <Text>By signing up, you agree to the
            </Text>
            <TouchableOpacity onPress={() => linkTo('/p')}>
              <Text>Terms of Service and Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: "red", alignItems: "center"}}>
          <TouchableOpacity onPress={() => {
          }}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: "center"}}>
          <Text>or with</Text>
        </View>
        <View style={{backgroundColor: "green", alignItems: "center"}}>
          <TouchableOpacity onPress={() => {
            signInWithGoogleAsync()
          }}>
            <Text><Icon
              name='google'
              size={14}
              color='red'
            /> Sign Up with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: "center"}}>
        <Text>
          Already have an account?
          Login
        </Text>

      </View>
    </SafeAreaView>
  )
    ;
}

export default signUpScreen;
