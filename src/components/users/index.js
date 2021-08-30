import React, {useEffect, useMemo} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {removeGradedCard, usersRequested} from "../../redux/slices/users";
import map from "lodash/map";
import globalStyles from "../../../styles/global";

function UsersScreen() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.collection);

  const displayUsers = useMemo(() =>
      map(users, (user, index) =>
        <Text key={index}>ID: {user.screenID}</Text>
      )

    , [users])

  useEffect(() => {
    dispatch(usersRequested('jZG6hh5LcbKwsaNs59r3'));
  }, [dispatch]);

  return (
    <View style={globalStyles.container}>
      <Text>Users config</Text>
      {displayUsers}
      <Button
        title="clearCard"
        onPress={() => dispatch(removeGradedCard({screenID: '1'}))}
      />
    </View>
  );
}

export default UsersScreen;
