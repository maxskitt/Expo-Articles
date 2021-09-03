import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, Animated, ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {articlesRequested} from "../../redux/slices/articles";
import globalStyles from "../../../styles/global";
import styles from "./style";
import renderItemArticles from "../articles/item";
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function ArticlesScreen({navigation}) {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const articles = useSelector((state) => state.articles.collection);

  const onPressSearch = (value) => {
    setSearch(value)
  };

  useEffect(() => {
    dispatch(articlesRequested());
  }, [dispatch]);

  return (
    <View style={globalStyles.container}>
      {/*<ScrollView>*/}
        <View style={styles.container}>
          <Text style={styles.jobSearch}>Job Search</Text>
          <View style={styles.containerSearch}>
            <View style={styles.containerSearchBar}>
              <Input
                placeholder='Search'
                inputContainerStyle={styles.searchInputContainer}
                inputStyle={styles.searchInput}
                leftIcon={
                  <Icon
                    name='search'
                    size={16}
                    color='#636363'
                  />
                }
              />
            </View>
            <View style={styles.containerSearchBarButton}>
              <TouchableOpacity onPress={() => navigation.navigate("ModalSettings")}>
                <Icon name="sliders" size={14} color="#636363"/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerSort}>
            <View>
              <Text style={styles.sortText}>Sort by:</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.sortPosted}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.sortPostedText}>Date posted: </Text>
                <Icon name="angle-down" size={16}/>
              </TouchableOpacity>
              <Animated.View style={{opacity: modalVisible}}>
                <View style={{position: "absolute", backgroundColor: "yellow", top: 6, width: 80}}>
                  <TouchableOpacity
                    onPress={() => {
                    }}
                  >
                    <Text style={styles.modalText}>Sort 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                    }}
                  >
                    <Text style={styles.modalText}>Sort 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                    }}
                  >
                    <Text style={styles.modalText}>Sort 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                    }}
                  >
                    <Text style={styles.modalText}>Sort 1</Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </View>
          </View>
        </View>
          <FlatList
            data={articles}
            renderItem={renderItemArticles}
            keyExtractor={item => item.id}
          />
      {/*</ScrollView>*/}
    </View>
  );
}

export default ArticlesScreen;


// <Modal
//   animationType="slide"
//   transparent={true}
//   visible={modalVisible}
//   onRequestClose={() => {
//     setModalVisible(!modalVisible);
//   }}
// >
//   <View style={styles.centeredView}>
//     <View style={styles.modalView}>
//       <Text style={styles.modalText}>Hello World!</Text>
//       <Pressable
//         style={[styles.button, styles.buttonClose]}
//         onPress={() => setModalVisible(!modalVisible)}
//       >
//         <Text style={styles.textStyle}>Hide Modal</Text>
//       </Pressable>
//     </View>
//   </View>
// </Modal>
