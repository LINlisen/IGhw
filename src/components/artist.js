import React from "react";
import { StyleSheet, Text, View, Image,ScrollView} from "react-native";
import list from "../json/ablums.json";
const Artist =() =>{
    return(
        
        <View style={styles.back}>
                
                <View style={styles.smallback}>
                    <Image
                        style={styles.smallimg}
                        source={{uri:list.albumList[0].thumbnail_image}}/>
                </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
   back:{
    backgroundColor:'#BEBEBE',
   },
    smallback:{
        backgroundColor:'#BEBEBE',
        shadowColor: "#40000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        borderRadius:0.5,
        borderColor:'#d1d1d1',
    
    },
    smallimg:{
        
        width:50,
        height:50,
        marginTop:20,
        marginLeft:180,
        zIndex:-5
    }});
    export default Artist;