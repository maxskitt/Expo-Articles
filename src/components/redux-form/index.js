import React from "react";
import {TextInput, Text, View} from "react-native";
import styles from "./style";

const renderInput = ({input: {name, onChange, ...restInput}}) => {
  return <View>
    <Text>{name}</Text>
    <TextInput style={styles.input} placeholder={name} onChangeText={onChange} {...restInput} />
  </View>
}

export default renderInput;
