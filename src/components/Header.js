import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  const {title}=props;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
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