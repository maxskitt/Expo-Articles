import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity, TextInput} from "react-native";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import globalStyles from "../../../styles/global";

function settingsModal() {
  const [checked, setChecked] = useState(false);

  const onPressClear = () => {
    console.log("fsdf")
  };

  const onPress = () => {
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
      <View style={styles.container}>
        <View style={globalStyles.grabber}></View>
        <Text style={styles.title}>Filter</Text>
        <View style={styles.containerIndustry}>
          <View style={styles.containerIndustryTitle}>
            <View>
              <Text style={styles.containerIndustryTitleText}>Industry</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => onPressClear()}>
                <Text style={styles.containerIndustryTitleClear}>Clear filters <Icon name="broom"
                                                                                     color="#BABABA"/></Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerIndustryTitleButton}>
            <TouchableOpacity
              style={!checked ? styles.defaultButton : styles.button}
            >
              <Button
                title='Filter'
                color='#636363'
                onPress={() => onPress()}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={!checked ? styles.defaultButton : styles.button}
            >
              <Button
                title='Filter'
                color='#636363'
                onPress={() => onPress()}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={!checked ? styles.defaultButton : styles.button}
            >
              <Button
                title='Filter'
                color='#636363'
                onPress={() => onPress()}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={!checked ? styles.defaultButton : styles.button}
            >
              <Button
                title='Filter'
                color='#636363'
                onPress={() => onPress()}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={!checked ? styles.defaultButton : styles.button}
            >
              <Button
                title='Filter'
                color='#636363'
                onPress={() => onPress()}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={!checked ? styles.defaultButton : styles.button}
            >
              <Button
                title='Filter'
                color='#636363'
                onPress={() => onPress()}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={!checked ? styles.defaultButton : styles.button}
            >
              <Button
                title='Filter'
                color='#636363'
                onPress={() => onPress()}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerIndustryTitle}>
            <View>
              <Text style={styles.containerIndustryTitleText}>Location</Text>
            </View>
          </View>
          <View style={styles.containerIndustryTitleLocation}>
            <TouchableOpacity style={styles.defaultButton}>
              <Text>Location</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerIndustryTitle}>
            <View>
              <Text style={styles.containerIndustryTitleText}>salary estimate</Text>
            </View>
          </View>
        </View>
      </View>
  );
}

export default settingsModal;
