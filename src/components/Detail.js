import React from "react";
import { StyleSheet, Text, View, Image,ScrollView, Button, Linking,TouchableOpacity} from "react-native";
import { Directions } from "react-native-gesture-handler";

const Detail = ({ page ,navigation }) =>{
   
    return(
        <ScrollView>
            <View style={styles.back}>
                
                <View style={styles.box}>
                    
                    <View style={ {flexDirection:'row'}}>
                        <Image style={styles.smallpic}
                                source={{uri:page.smallimg}}/>
                        <Text style={styles.artist}>{page.artist}</Text>
                        
                      
                    </View>
                    <View style={{zIndex:2,width:420,height:3}}>
                    <Image 
                                style={styles.img}
                                source={{uri:page.image}}/> 
                         </View>
                         <View style={{flexDirection:'row',zIndex:1}}>
                                <Image style={styles.icon}
                                source={{uri:page.favorite}}/>
                                <Image style={styles.icon}
                                source={{uri:page.share}}/>
                                <Image style={styles.icon}
                                source={{uri:page.save}}/>
                        </View>
                        <View>
    <Text style={styles.like}>{page.like}</Text>
    <Text style={styles.content}>{page.content}</Text>
    <Text style={styles.like}>{page.message}</Text>
    <Text style={styles.leave}>{page.leave}</Text>
    <Text style={styles.time}>{page.time}</Text>
                        </View>
                    
                </View>
               
                
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    back:{
        
        height:700,
        backgroundColor:'white',
        zIndex:5
    },
    box:{
        
    },

    smallpic:{
        height:40,
        width:40,
        marginTop:40,
        marginLeft:2

    },
    artist:{
        fontSize:12,
        justifyContent:"center",
        alignItems: 'center',
        marginTop:55,
        marginLeft:10
    },
    
    img:{
        width:420,
        height:420,
       
        marginTop:23,
        marginLeft:0
        
    },
    icon:{
        width:28,
        height:28,
        marginTop:455,
        marginLeft:15,
        
    },
    like:{
        marginLeft:15,
        marginTop:10
    },
    content:{
        marginLeft:15,
        marginTop:5,
        fontSize:18,
        fontWeight:'400'
    },
    leave:{
        marginLeft:15,
        marginTop:5,
        color:'gray',
        borderWidth:1,
        borderColor:'gray',
        opacity:0.5,
        width:380,
        height:22
    },
    time:{
        marginLeft:15,
        marginTop:5,
        color:'gray',
        fontSize:12
    }
    
    
        
});
export default Detail;