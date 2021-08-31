import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import globalStyles from "../../../styles/global";
import styles from "./style";

export default function Home({navigation}) {

  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
