import React from "react";
import { ScrollView, Linking ,FlatList,View} from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';
import Talk from "../components/Talk";
import page from "../json/page.json"
const TalkScreen = ({navigation}) => {

  return (
  
    <View style={{flex:1}}>
        
        
    <FlatList
      data={page.Talk}
      renderItem={({item})=>
      
      <Talk
        page={item}
        navigation={navigation}
        />}
        keyExtractor={item => item.title}
      />
  </View>
  );
};

export default TalkScreen;
