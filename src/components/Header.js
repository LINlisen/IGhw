import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  const {title}=props;
  return (
    <View style={styles.viewStyle}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    
    // Android Only
    elevation: 2,
    zIndex:3
  },
  textStyle: {
    fontSize: 30,
    color:"black",
    
  }
});

export default Header;