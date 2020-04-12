import React from 'react';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import pageData from "./src/json/page.json";
import { navigationRef } from './RootNavigation';
import HomeScreen from './src/screens/HomeScreen';
import TalkScreen from './src/screens/TalkScreen';
import { color } from 'react-native-reanimated';
const Stack = createStackNavigator();
const App = () => {
  return (
     
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title:'',
          headerTitle:(<Image style={styles.title}  source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'}}/>),
          headerLeft: () => (
            <TouchableOpacity  onPress={() => alert('This is a button!')}>
             <Image 
   
                source={require('./img/camera.png')
              }
                  style={{width:28,height:28,marginLeft:8,marginTop:0}}
                  />
              </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity  onPress={() =>navigationRef.current?.navigate("Talk")}>
             <Image 
   
                source={
                  require('./img/comment.png')}
                  style={{width:28,height:28,marginRight:8,marginTop:0}}
                  />
                
                
              
              </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen 
        name="Talk" 
        component={TalkScreen}
        options={{
          title:'LinLisen',
         
         
          headerRight: () => (
            <TouchableOpacity  onPress={() =>navigationRef.current?.navigate("Talk")}>
             <Image 
   
                source={
                  require('./img/edit.png')}
                  style={{width:28,height:28,marginRight:8,marginTop:0}}
                  />
                
                
              
              </TouchableOpacity>
          ),
          headerBackTitle:"",
          headerStyle: {
           
            backgroundColor: '#4F9DEB',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },  
         }}
      />      
    </Stack.Navigator>
  </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  
 title:{
   
  width:120,
  height:40
 },
 back:{
   
  width:40,
  height:40
 }

});
export default App;