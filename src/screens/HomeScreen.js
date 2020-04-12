import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import Header from '../components/Header';
import HomeDetail from "../components/Detail";
import page from "../json/page.json"


const HomeScreen = ({navigation}) => {
  return (
     
       <View style={{flex:1}}>
        
        
        <FlatList
          data={page.List}
          renderItem={({item})=>
          
          <HomeDetail
            page={item}
            navigation={navigation}
            />}
            keyExtractor={item => item.title}
          />
      </View>
  );
};

export default HomeScreen;