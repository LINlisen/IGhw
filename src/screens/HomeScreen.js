import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import Header from '../components/Header';
import AlbumDetail from "../components/Detail";
import albumData from "../json/ablums.json"
import Artist from "../components/artist";

const HomeScreen = ({navigation}) => {
  return (
     
       <View style={{flex:1}}>
         <Header title={albumData.albumTitle} />
        <Artist />
        <FlatList
          data={albumData.albumList}
          renderItem={({item})=>
          
          <AlbumDetail
            album={item}
            navigation={navigation}
            />}
            keyExtractor={item => item.title}
          />
      </View>
  );
};

export default HomeScreen;