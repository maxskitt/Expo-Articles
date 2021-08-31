import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity, Slider} from "react-native";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import globalStyles from "../../../../styles/global";
import {useDispatch, useSelector} from "react-redux";
import {articlesFilter, articlesFilterClear} from "../../../redux/slices/articles";

function settingsModal() {

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const filterItem = useSelector((state) => state.articles.filter);
  console.log(filterItem, "filterItem")

  const checkFilter = (action) => {
    dispatch(articlesFilter(action));
  }

  const clearFilter = () => {
    dispatch(articlesFilterClear());
  }

  return (
    <View style={styles.container}>
      <View style={globalStyles.containerGrabber}>
        <View style={globalStyles.grabber}></View>
      </View>
      <Text style={styles.title}>Filter</Text>
      <View style={styles.containerIndustry}>
        <View style={styles.containerIndustryTitle}>
          <View>
            <Text style={styles.containerIndustryTitleText}>Industry</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => clearFilter()}>
              <Text style={styles.containerIndustryTitleClear}>Clear filters <Icon name="broom"
                                                                                   color="#BABABA"/></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerIndustryTitleButton}>
          <TouchableOpacity
            style={!filterItem[0] ? styles.defaultButton : styles.button}
          >
            <Button
              title='Filter'
              color='#636363'
              onPress={() => checkFilter({id: 0, filter: !filterItem[0]})}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={!filterItem[1] ? styles.defaultButton : styles.button}
          >
            <Button
              title='Filter'
              color='#636363'
              onPress={() => checkFilter({id: 1, filter: !filterItem[1]})}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={!filterItem[2] ? styles.defaultButton : styles.button}
          >
            <Button
              title='Filter'
              color='#636363'
              onPress={() => checkFilter({id: 2, filter: !filterItem[2]})}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={!filterItem[3] ? styles.defaultButton : styles.button}
          >
            <Button
              title='Filter'
              color='#636363'
              onPress={() => checkFilter({id: 3, filter: !filterItem[3]})}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={!filterItem[4] ? styles.defaultButton : styles.button}
          >
            <Button
              title='Filter'
              color='#636363'
              onPress={() => checkFilter({id: 4, filter: !filterItem[4]})}
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
            <View style={styles.location}>
              <Text style={styles.containerIndustryTitleText}>Location</Text>
              <Icon name="map-marker-alt" size={14} color="#636363"/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerIndustryTitle}>
          <View>
            <Text style={styles.containerIndustryTitleText}>salary estimate</Text>
          </View>
        </View>
        <View style={{alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            value={value}
            maximumValue={3500}
            minimumValue={1500}
            onValueChange={(value) => setValue(value)}
          />
          <Text>Value: {value}</Text>
        </View>
      </View>
    </View>
  );
}

export default settingsModal;
