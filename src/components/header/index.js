import {Text, View} from "react-native";
import React from "react";
import styles from "./style";
import globalStyles from "../../../styles/global";

function LogoTitle() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.logoText}>jobAgent</Text>
    </View>
  );
}

export default LogoTitle;
