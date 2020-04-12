import React from "react";
import { StyleSheet, Text, View, Image,ScrollView} from "react-native";
import talkData from "../json/page.json";
const Talk =({page,navigation}) =>{
    return(
        <ScrollView>
        <View style={styles.back}>
             <View style={styles.box}>
                    <Image source={{uri:page.pic}}
                            style={styles.pic}/>    
                    <View style={styles.text}>
                    <Text style={styles.name}>{page.name}</Text>
                    <Text style={styles.message}>{page.message}</Text>     
                    </View> 
    <Text style={styles.time}>{page.time}</Text>
                 </View>   
        </View>
     </ScrollView>   
    )
}
const styles = StyleSheet.create({
   back:{
       height:80,
    backgroundColor:'white',
   },
   box:{
      flexDirection:"row",
    marginTop:30,
    
   },
   pic:{
       width:50,
       height:50,
       marginLeft:20
   },
   name:{
    marginTop:5,
        marginLeft:20,
       fontSize:14
   },
   message:{
       marginTop:5,
       marginLeft:20,
       fontSize:18,
       color:"gray",
       opacity:0.8
       
       
   },
   time:{
       fontSize:12,
       marginLeft:5,
       alignSelf:"flex-end",
       opacity:0.5
   }
  });
    export default Talk;