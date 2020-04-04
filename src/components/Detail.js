import React from "react";
import { StyleSheet, Text, View, Image,ScrollView, Button, Linking,TouchableOpacity} from "react-native";

const albumDetail = ({ album ,navigation }) =>{
   
    return(
        <ScrollView>
            <View style={styles.back}>
                
                <View style={styles.box}>
                    
                    <View>
                        <Text style={styles.content}>{album.title}</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Detail',album)}>
                            <Image 
                                style={styles.img}
                                source={{uri:album.image}}/>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
                
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    back:{
        height:400,
        backgroundColor:'#BEBEBE',
        zIndex:5
    },
    artist:{
        fontSize:20,
        justifyContent:"center",
        alignItems: 'center',
        marginTop:10
    },
    smallimg:{
        width:100,
        height:100,
        marginTop:20,
        marginLeft:160
    },
    box:{
        width:300,
        height:300,
        marginTop:20,
        marginLeft:60,
        backgroundColor:"#F0F0F0",
        
    },
    img:{
        width:200,
        height:200,
       zIndex:-2,
        marginTop:30,
        marginLeft:50
        
    },
    content:{
        color:'#2F0000',
        fontSize:20,
        marginLeft:10,
        marginTop:10,
       
        },
        
});
export default albumDetail;