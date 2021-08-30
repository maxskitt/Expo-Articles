import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import {Avatar} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

function Item({title, name, description, id}) {

  const navigation = useNavigation();

  return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Edit', {id: id})}>
        <View style={styles.title}>
          <View style={styles.containerArticles}>
            <View style={styles.titleAvatar}>
              <Avatar
                size="small"
                source={{
                  uri:
                    'https://www.adobe.com/express/feature/image/resize/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=2000&format=webply&optimize=medium',
                }}
                rounded
                title="MT"
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.containerTitleText}>
              <View style={styles.containerText}>
                <Text style={{
                  fontFamily: 'SFProDisplayBold',
                  fontSize: 12,
                  color: '#636363',
                  textTransform: 'uppercase'
                }}>Title: {title}</Text>
              </View>
              <View style={styles.containerText}>
                <Text
                  style={{fontFamily: 'SFProDisplayRegular', fontSize: 12, color: '#636363'}}>Name: </Text>
                <Text
                  style={{
                    fontFamily: 'SFProDisplayRegular',
                    fontSize: 12,
                    color: '#E06D06'
                  }}
                >{name}</Text>
              </View>
              <View style={styles.containerText}>
                <Text style={{
                  fontFamily: 'SFProDisplayRegular',
                  fontSize: 12,
                  color: '#636363'
                }}>Description: </Text>
                <Text
                  style={{
                    fontFamily: 'SFProDisplayRegular',
                    fontSize: 12,
                    color: '#E06D06'
                  }}
                >{description}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
  );
}

const renderItemArticles = ({item}) => (
  <Item id={item.id} title={item.title} name={item.name} description={item.description}/>
);

export default renderItemArticles;
