import * as React from 'react';
import {View, Button, FlatList} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {useRef} from "react";
import renderItemArticles from "../articleItem";
import {useSelector} from "react-redux";
import globalStyles from "../../../styles/global";

export default function Home() {

  const articles = useSelector((state) => state.articles.collection);

  const renderContent = () => (
    <View>
      <View style={globalStyles.grabber}></View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
        }}
      >

        <FlatList
          data={articles}
          renderItem={renderItemArticles}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const sheetRef = useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['80%', '100%', '30%']}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}
