import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import albumData from "./src/json/ablums.json";

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/TalkScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
     
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={AlbumScreen} 
        options={{
          title: albumData.albumTitle,
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          }, 
        }}
      />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen}
        options={({ route }) => ({ 
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#4F9DEB',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },  
         })}
      />      
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;