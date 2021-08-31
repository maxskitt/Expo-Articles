import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import globalStyles from "../../../../styles/global";
import styles from "./style";

function logoutModal() {

  return (
    <View style={styles.container}>
      <View style={globalStyles.containerGrabber}>
        <View style={globalStyles.grabber}></View>
      </View>
      <Text style={styles.title}>Logout?</Text>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>Are you sure do you wanna logout?</Text>
      </View>
      <View style={styles.titleButton}>
        <View style={{flex: 1, marginRight: 10}}>
          <TouchableOpacity style={styles.titleButtonItemSecondary} onPress={() => {
          }}>
            <Text style={{color: "#7F3DFF"}}>No</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity style={styles.titleButtonItemPrimary} onPress={() => {
          }}>
            <Text style={{color: "white"}}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default logoutModal;
