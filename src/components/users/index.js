import React, {useEffect, useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../redux/slices/users";
import map from "lodash/map";
import globalStyles from "../../../styles/global";
import {Avatar} from "react-native-elements";
import styles from "./style";
import Icon from "react-native-vector-icons/Feather";

function UsersScreen({navigation}) {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.collection);

  const displayUsers = useMemo(() =>
      map(users, (user, index) =>
        <View key={index} style={styles.container}>
          <View style={styles.containerAvatar}>
            <View style={styles.containerAvatarImage}>
              <Avatar
                size="large"
                rounded
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
              />
            </View>
            <View style={styles.containerAvatarBlock}>
              <Text style={styles.user}>Username</Text>
              <Text style={styles.userName}>{user.name}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => {
            }}>
              <Icon name="edit-2" size={28} color="#212325"/>
            </TouchableOpacity>
          </View>
        </View>
      )

    , [users])

  useEffect(() => {
    dispatch(usersRequested('jZG6hh5LcbKwsaNs59r3'));
  }, [dispatch]);

  return (
    <View style={globalStyles.container}>
      {displayUsers}
      <View style={styles.containerMenu}>
        <TouchableOpacity onPress={() => {
        }}>
          <View style={styles.containerMenuItem}>
            <View style={{padding: 10, backgroundColor: '#EEE5FF', borderRadius: 5}}>
              <Icon name='code' size={28} color='#7F3DFF'/>
            </View>
            <Text style={styles.containerMenuText}>Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        }}>
          <View style={styles.containerMenuItem}>
            <View style={{padding: 10, backgroundColor: '#EEE5FF', borderRadius: 5}}>
              <Icon name='settings' size={28} color='#7F3DFF'/>
            </View>
            <Text style={styles.containerMenuText}>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        }}>
          <View style={styles.containerMenuItem}>
            <View style={{padding: 10, backgroundColor: '#EEE5FF', borderRadius: 5}}>
              <Icon name='file' size={28} color='#7F3DFF'/>
            </View>
            <Text style={styles.containerMenuText}>Export Data</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ModalLogout')}>
          <View style={styles.containerMenuItemEnd}>
            <View style={{padding: 10, backgroundColor: '#FFE2E4', borderRadius: 5}}>
              <Icon name='log-out' size={28} color='#FD3C4A'/>
            </View>
            <Text style={styles.containerMenuText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default UsersScreen;
